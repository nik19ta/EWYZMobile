<template>
    <div class="MenuScrin">
        <div class="container_logo">
            <p class="logo_text">Menu</p>
            <img v-if="mode == 'menu'" @click="toSearchMenu" class="search" src="../assets/search.svg" alt="">
            <img v-else @click="toSearchMenu" class="search" src="../assets/back.png" alt="">
        </div>
        <div v-if="mode == 'menu'" class="MenuContent">

            <div class="category" v-for="item in data" :key="item.name">
                <p class="title">{{item.name}}</p>
                <div class="items_scroll" >
                    <div class="items" 
                        :style="`width: ${(210 + 10) * item.items.length}px`" >

                        <div 
                            v-for="itm in item.items"
                            :key="itm.name"
                            @click='toProduct([item.name, itm])'
                            :style="`background-image: url(${itm.img});`"
                            class="item" >

                            <div class="description">
                                <div class="name">{{itm.name}} </div>
                                <div class="price">{{itm.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="MenuContent" >
            <form v-on:submit.prevent v-on:submit="getProduct" class="search_form" >
                <input class="search_inp" v-model="searchName" type="text" placeholder="name" >

            </form>


                
            <div class="products" v-if="searchdata != []" >
                <div class="product" v-for="item in searchdata.data" :key="item.id" >
                    <div class="text" >
                        <div>
                            <p class="name" >{{item['name']}}</p>
                            <p class="time" >{{item['time']}}мин</p>
                        </div>
                        <p class="price" >{{item['price']}}₽</p>
                    </div>
                    <div class="img" :style="`background-image: url(${item['img']});`" >
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
                searchdata: [],
                mode: 'menu',
                searchName: ""
            }
        },
        props: {
            dataMenu: {}
        },
        mounted() {
            fetch(`https://nikita.tech/api/ewyz/get_menu?id=${this.dataMenu}`)
                .then(response => response.text())
                .then((response) => {
                    this.data = JSON.parse(response)

                    console.log(this.data);
                })
        },
        methods: {
            showMenu() {
                console.log(1);
            },
            toProduct(data) {
                this.$emit('toProduct', data)
            },
            toSearchMenu() {
                if (this.mode == "menu") {
                    this.mode = "search"
                } else {
                    this.mode = "menu"
                }
            },
            getProduct() {
                const vm = this;
                fetch(`https://nikita.tech/api/ewyz/search?name=${this.searchName}&id=${this.dataMenu}`)
                .then(response => response.text())
                .then((response) => {
                    
                    if (JSON.parse(response).data.length > 0) {    
                        vm.searchdata = JSON.parse(response);
                    } else {
                        vm.searchdata = []
                    }
                })
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


            .search_form {
                width: 100%;
                display: flex;
                justify-content: center;
                padding-top: 20px;

                .search_inp {
                    width: 100%;
                    background: #212121;
                    color: #fff;
                    padding: 10px;
                    border: 0;
                    border-radius: 11px;
                    font-size: 16px;
                }
            }

            .products {
                margin-top: 30px;

                display: flex;
                flex-direction: column;

                background: #FFFFFF;

                /* shadow */
                box-shadow: 0px 10px 44px -12px rgba(0, 0, 0, 0.25);
                border-radius: 10px;

                padding: 10px;

                .product {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .text {
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .name {
                            margin: 0;
                            color: 212121;
                            font-family: Montserrat;
                            font-style: normal;
                            font-weight: 500;
                            font-size: 18px;
                        }
                        .time {
                            font-size: 14px;
                            margin-top: 0px;
                        }
                        .price {
                            margin: 0;
                            color: 212121;

                        }
                    }
                    .img {
                        height: 100px;
                        width: 100px;
                        border-radius: 10px;
                        background-size: cover;
                    }
                }
            }

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

                            background-size: cover;

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