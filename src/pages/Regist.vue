<template>
  <div>
    <Head :demo="demo"></Head>
    <Body></Body>
  </div>
</template>

<script>
  import Head from '@/components/templetes/commons/regist/Head';
  import Body from '@/components/templetes/commons/regist/Body';
    export default {
      components:{
        Head,
        Body
      },
      data(){
        return{
          demo:"123"
        }
      }
    }
</script>

<style lang="scss">
  li{
    list-style: none;
  }
</style>
