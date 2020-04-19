<template lang="html">
  <div class="home">
    <div class="nav">
      <div class="main search">
        <div class="ui search">
          <div class="ui fluid icon input">
            <input class="prompt" type="text" placeholder="Search products...">
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>
      <div class="cart_button">
        <div class="ui circular button">
          <a class="item">
            <i class="shopping cart icon"></i>
            My cart
            <div class="floating ui red circular label left">{{products_len}}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="catalog">
      <div class="product">
        <Product v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :image="product.image" :description="product.description" :price="product.price" :add="addToCart"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/home/Product'
export default {
  components: {
    Product
  },
  data(){
    return {
      products:[
        {
            id: 1,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://dam.cosmoenespanol.com/wp-content/uploads/2019/12/que%CC%81-jabon-debo-usar-para-mi-higiene-i%CC%81ntima.jpg"
        },
        {
            id: 2,
            name: "Gel",
            price: 8900,
            description: "Una description",
            image:"https://smoda.elpais.com/wp-content/uploads/2020/03/gel.jpg"
        },
        {
            id: 3,
            name: "Levonorgestrel",
            price: 8900,
            description: "Una description",
            image:"https://farmaciainformativa.com/wp-content/uploads/2018/09/Levonorgestrel-0.75-mg-pastillas.jpg.webp"
        },
        {
            id: 4,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://dam.cosmoenespanol.com/wp-content/uploads/2019/12/que%CC%81-jabon-debo-usar-para-mi-higiene-i%CC%81ntima.jpg"
        },
      ],
      products_in_cart : []
    }
  },
  computed:{
    products_len(){
      return this.products_in_cart.length
    }
  },
  methods:{
    addToCart( id ){
      this.products_in_cart.push( id )
    }
  }
}
</script>

<style lang="css" scoped>
.home .nav{
  background-color: #efefef;
  height: 50px;
}
.home .catalog{
  padding-top: 40px;
  padding-bottom: 60px;
}
.home .main.search{
  margin-top: 6px;
  margin-left: 15px;
  width: 80%;
  display: inline-block;
}
.home .cart_button{
  display: inline-block;
  float: right;
}
.home .cart_button .ui.circular.button{
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
}

</style>
