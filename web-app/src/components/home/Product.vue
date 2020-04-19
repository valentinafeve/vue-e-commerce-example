<template lang="html">
  <div class="product">
    <div class="ui card">
      <div class="image">
        <img :src="image" style="height:250px">
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
        <button class="ui button everdose" @click="add({id, name, image, description, price})" >ADD</button>
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
</style>
