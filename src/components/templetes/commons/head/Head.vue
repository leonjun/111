<template>
	<div class="head">

		<div class="tabbs">
         <div class="logo">
           <img src="../../../../assets/log.png" />
        </div>
      	<div class="tab">
      		<ul>
      			<li  v-for="(operate,path,index) in paths.ops">
      				<router-link :to="{path:operate.path}">{{operate.name}}</router-link>
      			</li>
      		</ul>
      	</div>
        <div class="login">
            <div>

              <router-link :to="{path:'/regist'}"><button class="regist-bt">注册</button></router-link>
              <router-link :to="{path:'/Login'}"><button class="login-bt">登陆</button></router-link>

            </div>

        </div>
    </div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				paths:{
          			ops:[
          				{path:"/",name:"首页"},
          				{path:"/Product",name:"产品中心"},
          				{path:"/ProjectManage",name:"项目管理"},
          				{path:"/ResourceManage",name:"资源管理"},
          				{path:"/Help",name:"帮助中心"},
          				{path:"/Contact",name:"联系我们"},
          				{path:"/UserCenter",name:"个人中心"},

          			]
          	}

			}
		},
    methods:{
		  regist:function(){

      },
      login:function(){

      }
    }
	}
</script>

<style lang="scss">
.tabbs{
	overflow: hidden;
	width: 100%;
  position: absolute;
  top: 0;
  z-index: 9999999;
  line-height: 66px;
  .logo{
    float: left;
    width: 30%;
  }
  .login{
    float: left;
    width: 20%;
    font-size:0px;
    button{
      cursor: pointer;
      margin-top: 14px;
      width: 80px;
      font-size: 15px;
      line-height: 30px;
      outline:none;
      border: 1px solid white;
    }
    .regist-bt{
      color: white;
      background: none;
    }
    .login-bt{
      background: white;
      color: #000000;
    }
  }
  .tab{
    width: 50%;
    overflow:hidden;
    float: left;
    ul{
      overflow:hidden;
      padding: 0;
      margin: 0;
      overflow-x: scroll;
      white-space: nowrap;
      overflow-scrolling: touch;

      li{
        display: inline-block;
        margin-left: 15px;
        a{
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
.tab ul::-webkit-scrollbar{
	display: none;
}
</style>
