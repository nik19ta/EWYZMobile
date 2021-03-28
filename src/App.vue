<template>
  <div id="app">
    <FirsScreen
        v-if="screen == 0"
        @toMainScreen='toMainScreen' />

    <MainScreen
        v-if="screen == 1"
        @toMenu='toMenu' />

    <MenuScreen 
        v-if="screen == 2"
        @toProduct='toProduct'
        :dataMenu='dataMenu' />

    <ProductScreen
        v-if="screen == 3"
        @backToMenu='backToMenu'
        @to3D='to3D'
        :productData='productData' />

    <ProductScreen3D
        v-if="screen == 4"
        @back='back' />
  </div>
</template>

<script>
import FirsScreen from './components/FirsScreen.vue'
import MainScreen from './components/MainScreen.vue'
import MenuScreen from './components/Menu'
import ProductScreen from './components/Product'
import ProductScreen3D from './components/Product3D'

export default {
  name: 'App',
  components: {
    FirsScreen,
    MainScreen,
    MenuScreen,
    ProductScreen,
    ProductScreen3D
  },
  data() {
    return {
      screen: 0,
      dataMenu: '',
      productData: {}
    }
  },
  methods: {
    toMainScreen() {
      this.screen++
    },
    toMenu(data) {
      this.screen++
      this.dataMenu = data;
    },
    toProduct(data) {
      this.screen++
      this.productData = data;
    },
    backToMenu() {
      this.screen--
    },
    back() {
      this.screen--
    },
    to3D() {
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
