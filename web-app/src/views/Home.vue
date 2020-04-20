<template lang="html">
  <div class="home">
    <Nav search="true" account="true" cart="true" :products_len="products_len" />
    <div class="catalog">
      <div class="product">
        <Product v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :image="product.image" :description="product.description" :price="product.price" :add="addToCart"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/home/Product'
import Nav from '../components/Nav'
import cookie from '../cookies'

export default {
  components: {
    Product,
    Nav
  },
  data(){
    return {
      products:[
        {
            id: 1,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp2iGZr56-17Uv2U3GcklWalhMLiuEJ3eAMFDKL0swNdp-NB7P&usqp=CAU"
        },
        {
            id: 2,
            name: "Difenhidramina",
            price: 8900,
            description: "Una description",
            image:"https://www.aliraif.com.tr/wp-content/uploads/2018/11/Hydryllin_Surup-300x300.jpg"
        },
        {
            id: 3,
            name: "Aderrall",
            price: 8900,
            description: "Una description",
            image:"https://prescriptionhope.com/wp-content/uploads/2020/02/How-to-Make-Adderall-Last-Longer-and-Stronger-1024x683.jpg"
        },
        {
            id: 4,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp2iGZr56-17Uv2U3GcklWalhMLiuEJ3eAMFDKL0swNdp-NB7P&usqp=CAU"
        },
        {
            id: 5,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://static.psycom.net/wp-content/uploads/2016/01/Ritalin-methylphenidate-683x1024.jpg"
        },
        {
            id: 6,
            name: "Jabón",
            price: 8900,
            description: "Una description",
            image:"https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/activgel/Productos_455x455_activgel.png?auto=format"
        },
      ],
      products_in_cart : []
    }
  },
  computed:{
    products_len(){
      var total = 0;
      for( var product of this.products_in_cart ){
        total += product.amount;
      }
      return total
    }
  },
  mounted(){
    console.log("Mounting")
    this.products_in_cart = cookie.getCookie('products')
    console.log(this.products_in_cart)
  },
  methods:{
    addToCart( product ){
      var added = false;
      for (var global_product of this.products_in_cart ){
        console.log(product.id)
        if (global_product.id == product.id) {
          console.log("Exists:")
          console.log(product.id)
             global_product.amount += 1;
             product.amount += 1;
             cookie.setCookie('products',JSON.stringify(this.products_in_cart))
            console.log(cookie.getCookie('products'))
             added = true;
        }
      }
      if (!added){
        product.amount = 1;
        this.products_in_cart.push( product )
        console.log("Adding product")
        cookie.setCookie('products',JSON.stringify(this.products_in_cart))
        console.log(cookie.getCookie('products'))
      }
    }
  }
}
</script>

<style lang="css" scoped>
.home .catalog{
  padding-top: 40px;
  padding-bottom: 60px;
}

</style>
