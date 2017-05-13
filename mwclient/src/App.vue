<template>
  <div id="app">
    <StoryEdit></StoryEdit>
  </div>
</template>

<script>
import StoryEdit from './components/StoryEdit'

export default {
  name: 'app',
  components: {
    StoryEdit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
