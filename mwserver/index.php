<?php
require 'functions.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

// an artificial delay...
$myFN = fibonacci(34);

// what is our command? - default to getStory
if (isset($_GET['cmd'])) {
  $cmd = $_GET['cmd'];
} else {  
  $cmd = "getStory";
}


switch ($cmd) {
  case "getStory":
    $mrStory = getMostRecentStory();
    $res = array('status' => 'ok',
                  'story'    =>  $mrStory);
    print json_encode($res);
    break;

  case "addPhoto":
    $pi = getUploadInfo();

    // send back some json info, so that client can refer
    // to newly uploaded photo
    // print $mrPhoto;
    $res = array('status' => 'great',
                  'pi'    =>  $pi);
    print json_encode($res);
    break;

  case "updateStory":
    updateStory();
    break;

  default:          
    break;
}

exit;
?>
