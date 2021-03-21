<template>
    <div class="MainScreen">
        <div class="container_logo">
            <img class="logo" src="../assets/logo.svg" alt="">
        </div>
        <div class="content" >
            <qrcode-stream @decode="onDecode"></qrcode-stream>
        </div>
        <div class="bottom_bar" >

        </div>


    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
    name: 'FirsScreen',
    data() {
        return {
            step: 1,
        }
    },
    components: {
        QrcodeStream,
        // QrcodeDropZone,
        // QrcodeCapture
    },
    methods: {
        onDecode (decodedString) {
            console.log(decodedString);
        }
    }
}
</script>

<style scoped lang="scss">
    .MainScreen {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .container_logo {
            width: 100%;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;

            .logo {
                width: 55px;
            }
        }
        .content{
            height: calc(100vh - 50px - 110px); 
            width: 100%;

            background: red;
        }
        .bottom_bar {
            width: 100%;
            height: 140px;
            background: #212121;
            border-top-right-radius: 18px;
            border-top-left-radius: 18px;
            margin-top: -30px;
        }


    }
</style>