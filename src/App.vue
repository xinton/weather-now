<template>
  <div id="app">
    <header class="header">
      <figure>
        <img class="img" alt="Weather Now logo" src="./assets/logo.svg">
      </figure>
    </header>
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

body {margin:0;}

.img {
  height: 20px;
}

.header {
  width: 100%;
  position: fixed;
  background: white;
  z-index: 1;
}
</style>
