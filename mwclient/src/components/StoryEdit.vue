<template>
  <div class="hello">
    <transition name="fade">
      <div v-show="showUploadWidget">
        <h1>{{ msg }}</h1>

        <multiple-file-uploader
          postURL="http://daniel.org/mw/mwserver/index.php?cmd=addPhoto"
          successMessagePath=""
          errorMessagePath="">          
        </multiple-file-uploader>
      </div>
    </transition>

    <transition name="fade">
      <div v-show="!showUploadWidget">
        <h1>Enter Attributes, then pick spot, update story...</h1>

        <label for="location">Location</label>
          <input id="location" type="text"></input>
        <label for="description">Description</label>
          <input id="description" type="text" placeholder="description"></input>
        <label for="tags">Tags</label>
        <input id="tags" type="text" placeholder="tags"></input>
        <button @click="updateStory">Update Story</button>
      </div>
    </transition>

    <div id="myStory" contenteditable="true" @focus="gotFocus" v-html="theStory">      
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import MultipleFileUploader from './MultipleFileUploader'
import EventBus from './EventBus';

export default {

  components: {
    MultipleFileUploader
  },
  name: 'StoryEdit',
  data () {
    return {
      errors: [],
      msg: 'Story Editor',
      theStory: 'Loading...',
      location: "",
      description: "",
      tags: "",
      curImage: "",
      curImageURL: '',
      showUploadWidget: true
    }
  },

  methods: {
    gotFocus() {
      this.updateImageParams();
      this.insertHtmlAtCursor(this.curImage);
    },

    updateImageParams() {
      this.location = document.getElementById('location').value;
      this.description = document.getElementById('description').value;
      this.tags = document.getElementById('tags').value;

      this.curImage = `<img src="http://${this.curImageURL}" title='Location: ${this.location}\nDescription: ${this.description}\nTags: ${this.tags}' />`;

      console.log(this.curImage);      
    },

    // from Stack Overflow
    insertHtmlAtCursor(html) {
      var range, node;
      if (window.getSelection && window.getSelection().getRangeAt) {
          range = window.getSelection().getRangeAt(0);
          node = range.createContextualFragment(html);
          range.insertNode(node);
      } else if (document.selection && document.selection.createRange) {
          document.selection.createRange().pasteHTML(html);
      }

      const myStory = document.getElementById('myStory');
      console.log(myStory.innerHTML);

    },

    updateStory() {
      let params = new URLSearchParams();
      params.append('story', JSON.stringify(myStory.innerHTML));

      axios.post('http://daniel.org/mw/mwserver/index.php?cmd=updateStory', params)
      .then(response => {
        this.showUploadWidget = true;
      })
      .catch(e => {
        this.errors.push(e)
      })

    }

  },


  created() {
    axios.get(`http://daniel.org/mw/mwserver/index.php`)
    .then(response => {
      if (response.data.story.length) {
        this.theStory = response.data.story;        
      } else {
        this.theStory = "Start a new story...";
      }
    })
    .catch(e => {
      this.errors.push(e)
    });

    EventBus.$on("photoUploadEvent", (response) => {
      this.curImageURL = response.data.pi.photoURL;
      this.showUploadWidget = false;

      this.updateImageParams();
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
