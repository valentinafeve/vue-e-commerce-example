<template lang="html">
  <div class="product">
    <div class="ui card">
      <div class="image">
        <img :src="image" style="height:200px">
      </div>
      <div class="content">
        <a class="header">{{name}}</a>
        <div class="description">
          {{description}}
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="dollar sign icon"></i>
          {{price}}
        </a>
      </div>
      <div class="extra content">
        <button class="ui circular button everdose" @click="add({id, name, image, description, price})" >Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['id','name','image','description','price', 'add']
}
</script>

<style lang="css" scoped>
.product{
  display: inline-block;
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
}
.product .ui.card{
  border-color: yellow !important;
}
.ui.circular.button.everdose{
  color: white;
  background-color: #3851FF;
}
</style>
