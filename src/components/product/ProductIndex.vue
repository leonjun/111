<template>
  <div class="product-show">
      <div><img :src="img"/></div>
      <h2>{{t}}</h2>
      <p>{{msg}}</p>
  </div>
</template>

<script>
  export  default {
    props:['img','t','msg'],
    components:{

    }
  }
</script>
<style lang="scss">
  .product-show{
    h2{
      padding: 0;
      margin: 0;
      color: #333333;
    }
    p{
      margin: 0.3rem 0;
      padding: 0 2rem;
      color: #333333;
    }
  }
</style>
