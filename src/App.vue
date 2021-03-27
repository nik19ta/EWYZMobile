<template>
  <div id="app">
    <FirsScreen @toMainScreen='toMainScreen' v-if="screen == 0" />
    <MainScreen v-if="screen == 1" />
    <MenuScreen v-if="screen == 2" />
    <ProductScreen v-if="screen == 3" />
  </div>
</template>

<script>
import FirsScreen from './components/FirsScreen.vue'
import MainScreen from './components/MainScreen.vue'
import MenuScreen from './components/Menu'
import ProductScreen from './components/Product'

export default {
  name: 'App',
  components: {
    FirsScreen,
    MainScreen,
    MenuScreen,
    ProductScreen
  },
  data() {
    return {
      screen: 0
    }
  },
  methods: {
    toMainScreen() {
      this.screen++
    }
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
