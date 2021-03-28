<template>
    <div class="MenuScrin">
        <div class="container_logo">
            <p class="logo_text">Menu</p>
            <img class="search" src="../assets/search.svg" alt="">
        </div>
        <div class="MenuContent">
            <div class="category">
                <p class="title">Супы</p>
                <div class="items_scroll">
                    <div class="items" :style="`width: ${(210 + 10) * 3}px`">
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category">
                <p class="title">Горячие</p>
                <div class="items_scroll">
                    <div class="items" :style="`width: ${(210 + 10) * 3}px`">
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category">
                <p class="title">Напитки</p>
                <div class="items_scroll">
                    <div class="items" :style="`width: ${(210 + 10) * 3}px`">
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                        <div @click='toProduct("1")' class="item">
                            <div class="description">
                                <div class="name">Пикассо</div>
                                <div class="price">500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MenuScreen',
        data() {
            return {
                data: [],
            }
        },
        methods: {
            showMenu() {
                console.log(1);
            },
            toProduct(data) {
                this.$emit('toProduct', data)
            }
        }
    }
</script>

<style scoped lang="scss">
    .MenuScrin {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .container_logo {
            width: 100%;
            height: 50px;

            padding-left: 12px;
            padding-right: 12px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo_text {
                color: #fff;
                font-size: 18px;
            }

            .search {
                width: 20px;
            }
        }

        .MenuContent {
            padding-left: 12px;
            padding-right: 12px;

            width: 100%;
            height: calc(100vh - 50px);

            background: #fff;

            .category {
                width: 100%;
                margin-bottom: 20px;

                display: flex;
                flex-direction: column;

                .items_scroll {
                    overflow-x: auto;
                    margin-top: -10px;

                    .items {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin-left: -10px;
                        margin-right: -10px;

                        .item {
                            background: #f0f0f0;
                            width: 210px;
                            height: 135px;
                            margin: 10px;
                            border-radius: 10px;

                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            align-items: center;

                            .description {
                                width: 100%;
                                height: 30px;

                                border-bottom-left-radius: 10px;
                                border-bottom-right-radius: 10px;

                                padding-left: 10px;
                                padding-right: 10px;

                                background: rgba($color: #000000, $alpha: 0.7);

                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                .name {
                                    color: #fff;
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
                }
            }
        }
    }
</style>