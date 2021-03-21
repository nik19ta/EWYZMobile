<template>
  <div id="app">
    <FirsScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FirsScreen from './components/FirsScreen.vue'

export default {
  name: 'App',
  components: {
    FirsScreen
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');

body {
  margin: 0;
  padding: 0;

  min-height: 100vh;
  width: 100vw;
}

*, *::after, *::before {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #212121;
}
</style>
