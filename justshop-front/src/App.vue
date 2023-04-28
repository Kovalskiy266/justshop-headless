<template>
  <div id="app">
    <router-link to="/s">Home</router-link> |
    <HeaderComponent/>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: yellow !important;
  margin: 0;
}
</style>
