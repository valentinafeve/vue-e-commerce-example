<template lang="html">
  <div class="signup">
    <div class="card">
      <div class="form_panel">
        <form class="ui form">
          <div class="field">
            <input type="text" name="first-name" placeholder="Email">
          </div>
          <div class="field">
            <input type="text" name="first-name" placeholder="Username">
          </div>
          <div class="field">
            <input type="password" name="last-name" placeholder="Password">
          </div>
          <div class="ui divider">

          </div>
          <div class="ui two fields">
            <div class="field">
              <input type="text" name="firstname" value="" placeholder="First name">
            </div>
            <div class="field">
              <input type="text" name="lastname" value="" placeholder="Last name">
            </div>
          </div>
          <button class="ui fluid black button" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.signup .form_panel{
  background-color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #dadada;
  padding: 50px;
  width: 50%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
