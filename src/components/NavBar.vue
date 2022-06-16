<template>
  <div>
    <b-navbar variant="faded" type="light" class="nav"> <img src="https://cdn.shopify.com/s/files/1/0603/7130/4638/t/2/assets/logo_c.png?v=150900189943828018881645114369" alt="logo" class="logo">
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
   height: 100px;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #E9E074;
}
</style>
