<template>
	<div class="head2">

		<div class="tabs">

      	<div class="tab">
      		<ul>
      			<li  v-for="(operate,path,index) in paths.ops">
      				<router-link :to="{path:operate.path}">{{operate.name}}</router-link>
      			</li>
      		</ul>
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
.head2{


  .tabs{
	overflow: hidden;
	width: 100%;
  z-index: 9999999;
  line-height: 66px;
  text-align: center;
    .tab{
      //background: #f4f5f6;
      overflow:hidden;
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
            color: black;
          }
        }
        .router-link-exact-active{
          border-bottom: 2px solid blue;
          padding-bottom: 6px;
        }
      }

    }
  }

.tab ul::-webkit-scrollbar{
	display: none;
}
}

</style>
