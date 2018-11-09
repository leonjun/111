<template>
  <div class="title">
      <div class="line"></div>
      <h2>{{caption}}</h2>
      <p>{{describ}}</p>
  </div>
</template>

<script>
  export  default {
        props:['caption','describ']
  }
</script>

<style lang="scss">
    .title{
       text-align: center;
       .line{
         margin: 0 auto;
         width: 70px;
         height: 6px;
         background-color: blue;
       }
      h2{
          margin: 1rem 0 0.5rem 0;
          font-size: 2rem;
      }
      p{
          margin: 0;
      }
    }
</style>
