<?php

// generate mostly unique timestamp...
function getTimeStamp() {
  list($usec, $sec) = explode(" ", microtime());
  $mtime = $sec . "_" . $usec; 

  return $mtime;
}


// used to simulate a heavy server load, ie: fibonacci(34)
function fibonacci($fn) {
  if ($fn == 1 || $fn == 2) {
    return 1;
  } else {
    return fibonacci($fn - 1) + fibonacci($fn - 2 );
  }
}

// check our files object...
function getUploadInfo() {
  $ourInfo = array();

  // should extensively check incoming file...
  if (count($_FILES['items']=== 1)) {
    $ourInfo['name'] = $_FILES['items']['name'][0];
  } else {
    $ourInfo['name'] = "NONE";
  }

  $localPath = "/assets/photos/" . uploadName($ourInfo['name']);

  $ourInfo['uploadPath'] = $_SERVER["DOCUMENT_ROOT"] . $localPath;
  $ourInfo['photoURL'] = $_SERVER["HTTP_HOST"] . $localPath;
  move_uploaded_file($_FILES['items']['tmp_name'][0], $ourInfo['uploadPath']);

  $ourInfo['knownFiles'] = scandir ($_SERVER["DOCUMENT_ROOT"] . "/assets/photos", SCANDIR_SORT_ASCENDING);

  return $ourInfo;
}


function uploadName($theFileName) {
  // what is our filename extension?
  $ext = strtolower(pathinfo($theFileName, PATHINFO_EXTENSION));

  // and be consistent as to what we want to call it...
  $extMap = array(
    'jpg' => 'jpg',
    'jpeg' => 'jpg',

    'png' => 'png',

    'gif' => 'gif',

    'bmp' => 'bmp',

    'tif' => 'tif',
    'tiff' => 'tif'
  );

  if (array_key_exists($ext, $extMap)) {
    $ext = $extMap[$ext];    
  }

  // lead with timestamp component...
  $ourFile = getTimeStamp() . "." . $ext;

  return $ourFile;
}

 
function updateStory() {
  $ourFile = getTimeStamp() . ".json";
  $localPath = "/assets/story/" . $ourFile;
  $storyPath = $_SERVER["DOCUMENT_ROOT"] . $localPath;

  error_log(print_r($_POST, true));

  file_put_contents($storyPath, $_POST['story']);
}

function getMostRecentStory() {

  $response = array();
  $storyDir = $_SERVER["DOCUMENT_ROOT"] . "/assets/story/";

  $mr = scandir($storyDir, SCANDIR_SORT_DESCENDING);
  error_log(print_r($mr, true));

  if (count($mr) > 2) {
    $latest = $mr[0];
    $theStory = json_decode(file_get_contents($storyDir . $latest));    
  } else {
    $theStory = "no story yet";
  }

  $response['data'] = $theStory;

  error_log($theStory);
  return $theStory;
}


?>
