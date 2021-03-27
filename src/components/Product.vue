<template>
    <div class="ProductScrin">
        <div class="container_logo">
            <p class="logo_text">Назад</p>
        </div>
        <div class="MenuContent">
            

            <div class="description" >
                <div class="steps">
                    <span :style="step > 0 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps1"></span>
                    <span :style="step > 1 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps2"></span>
                    <span :style="step > 2 ? 'opacity: 1' : 'opacity: 0.5' " class="step steps3"></span>
                </div>
                <div class="titel_product">
                    <p class="name">Латте</p>
                    <p class="price">500</p>
                </div>
                <div class="time_block">
                    <p class="time">5-10min</p>
                </div>
                <div class="structure">
                    <p>Состав:</p>
                    <p class="structure_text" >Блабла бабалабла блабалбала блабалабл аба лбалаблаб ла</p>
                </div>
                <div class="container_btn" >
                    <button>Смотреть в 3D</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductScreen',
        data() {
            return {
                data: [],
                step: 2
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .ProductScrin {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .logo_text {
            color: #fff;
            font-size: 18px;
            position: relative;
            margin-left: 15px;

            cursor: pointer;
        }

        .logo_text::before {
            content: '';
            background-image: url('../assets/back.svg');
            background-size: cover;

            display: block;
            width: 7px;
            height: 14px;

            position: absolute;
            left: -15px;
            top: 4px;

            cursor: pointer;
        }

        .container_logo {
            width: 100%;
            height: 50px;

            padding-left: 12px;
            padding-right: 12px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .MenuContent {
            height: calc(100vh - 50px);
            background: #f0f0f0;

            position: relative;
            
            .steps{
                width: 100%;
                height: 20px;

                display: flex;
                justify-content: center;
                align-items: center;

                // margin-top: -60px;
                z-index: 2;

                .step{
                width: 8px;
                height: 8px;

                display: block;
                border-radius: 10px;
                background: #fff;
                opacity: 0.5;
                margin-left: 14px;
                margin-right: 14px;
                }
            }

            .description {
                padding-top: 10px;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: #212121;
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
                z-index: 9;

                padding-bottom: 20px;

                .titel_product {
                    width: 100%;
                    height: 30px;

                    padding-left: 10px;
                    padding-right: 10px;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .name {
                        color: #fff;
                        font-weight: 500;
                    }

                    .price {
                        color: #fff;
                    }

                    .price::after {
                        content: '₽';
                    }
                }
            }
        }

        .time_block {
            padding-left: 10px;
            padding-right: 10px;
            color: #fff;
            font-size: 16px;
            margin-top: -15px;
            font-weight: 300;

            .time {
                margin-left: 18px;
                position: relative;
            }

            .time::before {
                content: '';
                background-image: url('../assets/time.svg');
                display: block;
                width: 13px;
                height: 13px;
                background-size: cover;
                position: absolute;
                left: -18px;
                top: 3.5px;
            }
        }

        .structure{
            padding-left: 10px;
            padding-right: 10px;

            p {
                color: #fff;
                font-size: 16px;
                font-weight: 300;
            }

            .structure_text {
                margin-top: -10px;
            }
        }

        .container_btn {
            width: 100%;
            display: flex;
            justify-content: center;

            button {
                width: 90%;
                height: 35px;
                border: 0;
                border-radius: 10px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 5px;
            }
        }
    }
</style>