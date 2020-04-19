<template lang="html">
  <div class="login">
    <div class="card">
      <form class="" action="index.html" method="post">
        <input type="text" name="username" value="" placeholder="username">
        <input type="password" name="password" value="" placeholder="password">
        <button type="button" name="button" @click="login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
     return {

     }
  },
  methods:{
    login(){
      console.log("Login in")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
