<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Index from '@/pages/Index';
export default {
  name: 'App',
  components:{
      "Index":Index
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
body{
  margin:0;
}
</style>
