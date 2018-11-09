<template>
  <div>
    <div>{{demo}}</div>
    <div class="login-head">
      <div class="logo">
        <img src="@/assets/images/regist/loge.png" />
      </div>

      <div class="login">
        <p>

          <span>已有账号，立即<router-link :to="{path:'/Login'}">登录</router-link></span>
          <label><router-link :to="{path:'/Index'}">首页</router-link></label>
          <label><router-link :to="{path:'/Help'}">帮助中心</router-link></label>
        </p>

      </div>
    </div>

  </div>
</template>

<script>
    export default {
        props:['demo']
    }
</script>

<style lang="scss">

  .login-head{
    overflow: hidden;
    background-color: white;
    height: 90px;
    padding: 0 40px;
    .logo{
      float: left;
      margin-top: 14px;
    }
    .login{
      float: right;
      p{
        margin:0;
        line-height: 90px;
        label{
          margin: 0 10px;
          a{
            color: black;
          }
        }
        a{
          text-decoration: none;
        }
      }
    }
  }
</style>
