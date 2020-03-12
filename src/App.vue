<template>
  <div id="app">    
    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from './components/Main.vue'

export default {
  name: 'App',
  components: {
    MainComponent,
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
