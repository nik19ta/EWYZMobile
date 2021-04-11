<template>
  <div class="step1" id="slider" >
  
    <div class="FirsScreen">
    <div class="container_logo">
      <img class="logo" src="../assets/logo.svg" alt="">
    </div>
    <div class="container_mobile_photo">
      <img class="mobile_photo" src="../assets/screen_1.png" alt="">
    </div>
    <div class="container_title">
      <h1>Сканируй QR-Code</h1>

      <div class="steps">
        <span :style="step > 0 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps1"></span>
        <span :style="step > 1 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps2"></span>
        <span :style="step > 2 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps3"></span>
      </div>

      <div class="btns">
        <div class="btns_group">
          <button @click="backStap" class="btn btn_cancel">
            <img 
              class="img_in_btn" 
              :src="step > 1 ? require('../assets/back.png') : require('../assets/cancel.png')" 
              alt="back screen" >
            </button>
          <button @click="nextStap" class="btn btn_to">
            <img class="img_in_btn" 
            :src="step <= 2 ? require('../assets/to.png') : require('../assets/backToMain.png')" 
            alt="to next screen">
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="FirsScreen">
    <div class="container_logo">
      <img class="logo" src="../assets/logo.svg" alt="">
    </div>
    <div class="container_mobile_photo">
      <img  class="mobile_photo" src="../assets/screen_2.png" alt="">
    </div>
    <div class="container_title">
      <h1>Просматривай меню</h1>

      <div class="steps">
        <span :style="step > 0 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps1"></span>
        <span :style="step > 1 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps2"></span>
        <span :style="step > 2 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps3"></span>
      </div>

      <div class="btns">
        <div class="btns_group">
          <button @click="backStap" class="btn btn_cancel">
            <img 
              class="img_in_btn" 
              :src="step > 1 ? require('../assets/back.png') : require('../assets/cancel.png')" 
              alt="back screen" >
            </button>
          <button @click="nextStap" class="btn btn_to">
            <img class="img_in_btn" 
            :src="step <= 2 ? require('../assets/to.png') : require('../assets/backToMain.png')" 
            alt="to next screen">
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="FirsScreen">
    <div class="container_logo">
      <img class="logo" src="../assets/logo.svg" alt="">
    </div>
    <div class="container_mobile_photo">
      <img class="mobile_photo" src="../assets/screen_3.png" alt="">
    </div>
    <div class="container_title">
      <h1>Смотри в 3D</h1>

      <div class="steps">
        <span :style="step > 0 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps1"></span>
        <span :style="step > 1 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps2"></span>
        <span :style="step > 2 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps3"></span>
      </div>

      <div class="btns">
        <div class="btns_group">
          <button @click="backStap" class="btn btn_cancel">
            <img 
              class="img_in_btn" 
              :src="step > 1 ? require('../assets/back.png') : require('../assets/cancel.png')" 
              alt="back screen" >
            </button>
          <button @click="nextStap" class="btn btn_to">
            <img class="img_in_btn" 
            :src="step <= 2 ? require('../assets/to.png') : require('../assets/backToMain.png')" 
            alt="to next screen">
          </button>
        </div>
      </div>
    </div>
  </div>  

  </div>
</template>

<script>
  export default {
    name: 'FirsScreen',
    data() {
      return {
        step: 1,
      }
    },
    methods: {
      nextStap() {
        if (this.step == 1) {
          this.step++
          document.querySelector('#slider').style.left = '-100vw'
          document.querySelector('#slider').style.width = '200vw'
        } 
        else if (this.step == 2) {
          this.step++
          document.querySelector('#slider').style.left = '-200vw'
          document.querySelector('#slider').style.width = '300vw'

        }
        else if (this.step == 3) this.toMainScreen()
      },
      backStap() {
        if (this.step == 1) {
          return null
        } 
        else if (this.step == 2) {
          this.step = 1
          document.querySelector('#slider').style.left = '0vw'
          // document.querySelector('#slider').style.width = '100vw'
          
        } 
        else if (this.step == 3) {
          this.step--
          document.querySelector('#slider').style.left = '-100vw'
          // document.querySelector('#slider').style.width = '200vw'
        } 
      },
      toMainScreen() {
        this.$emit('toMainScreen')
      }
    }
  }
</script>

<style scoped lang="scss">
#slider {
  transition: all 0.3s;
  width: 100vw;
  // left: 00vw;
  display: inline-flex;
  flex-shrink: 0;
  flex-grow: 1;
}
.FirsScreen {
  min-width: 100vw!important;
}
.step1 {
  display: flex;
  align-items: center;
  width: 300vw;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
  left: 0vh;
}
  .FirsScreen {
    min-width: 100vw;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;

    .container_logo {
      width: 100%;
      margin-top: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 108px;
      }
    }

    .container_mobile_photo {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .mobile_photo {
        max-height: calc(100vh - 300px);
        max-width: 90vw;
      }
    }

    .container_title {
      width: 100%;
      // height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 88px;
        color: #FFFFFF;
        text-align: center;

        margin-top: -20px;
      }

      .steps{
        width: 100%;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: -60px;
        z-index: 2;

        .step{
          width: 8px;
          height: 8px;

          display: block;
          border-radius: 10px;
          background: #fff;
          opacity: 0.5;
          margin-left: 9px;
          margin-right: 9px;
        }
      }

      .btns {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: -20px;
        margin-bottom: 20px;

        .btn_cancel {
          background: #000000;

          width: 40px;
          height: 40px;

          border-radius: 100%;
          padding: 10px;
          margin-right: 5px;
        }

        .btn_to {
          background: #fff;

          width: 60px;
          height: 60px;

          border-radius: 100%;
          padding: 10px;
          margin-left: 5px;
        }


        .btns_group {
          display: flex;
          justify-content: center;
          align-items: center;

          margin-left: -50px;
        }

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;

          border: none;
          cursor: pointer;
        }

        .img_in_btn {
          width: 60%;
        }
      }
    }
  }

  
  // .bounce-enter-active {
  //   transition: all 0.3s;
  //   // transform: translateX(100vw);
  //   // transform: translateX(75vw);
  //   // transform: translateX(50vw);
  //   transform: translateX(100vw);
  // }
  // .bounce-leave-active {
  //   transition: all 0.3s;
  //   transform: translateX(-100vw);
  // }
</style>