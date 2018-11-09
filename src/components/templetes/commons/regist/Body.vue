<template>
  <div class="login-body">
    <div v-if="isRigest" class="login-form-box">
      <div class="form">
        <h2>注册</h2>
        <ul>
         <!-- <li>
            <input maxlength="20"  placeholder="请设置您的账户名" name="user"  v-model="formData.userName" v-on:input="checkUser(formData.userName)"/>
            <p v-if="checkBox.isUser">账户名包含字母（不区分大小写）、数字、下划线，不能全为数字</p>
          </li>
          <li>
            <input placeholder="请输入邮箱" name="email" type="email" v-model="formData.mail" v-on:input="checkMail(formData.mail)">
            <p v-if="checkBox.isMail">邮箱格式不正确</p>
          </li>
          <li>
            <input type="password" placeholder="请输入密码"/>
          </li>
          <li>
            <input type="password" placeholder="请再次输入"/>
          </li>-->

          <!--插件-->
          <li>
            <div>
              <input id="name" maxlength="20" v-model="user.name" v-validate="'required|max:20|min:4|name'" :class="{'input': true, 'is-danger': errors.has('name')|user.hasName }"  type="text" name="name" class="layui-input" v-on:input="userinput" @blur="checkName(user.name)" placeholder="请设置您的账户名">

            </div>
            <p>
              <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
              <!--<span v-show="user.hasName"  class="text-style" v-cloak> 账号存在</span>-->
            </p>



          </li>
          <li>
            <div>
              <input  v-model="user.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" name="email" class="layui-input" placeholder="请输入您的邮箱">

            </div>
            <p>
              <span v-show="errors.has('email')" class="text-style" v-cloak> {{ errors.first('email') }} </span>

            </p>



          </li>
          <li>
            <div>
              <input maxlength="20" v-model="user.password" v-validate="'required|max:20|min:6|password'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" name="password" class="layui-input" placeholder="请输入密码">

            </div>
            <p>
              <span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
            </p>



          </li>
          <li>
            <div>
              <input maxlength="20" v-model="user.password2" v-validate="'required|max:20|min:6|confirmed:password'" :class="{'input': true, 'is-danger': errors.has('password2') }" type="password" name="password2" class="layui-input" placeholder="请再次输入密码">

            </div>
            <p>
              <span v-show="errors.has('password2')" class="text-style" v-cloak> {{ errors.first('password2') }} </span>
            </p>


          </li>
          <li>
              <div class="phone-box">
              <select class="phonet">
               <option value="86">+86（中国大陆）</option>
              </select>
              <input v-model="user.phone" v-validate="'required|phone'" :class="{'phonew':true,'input': true, 'is-danger': errors.has('phone')}" type="text" v-on:input=" phoneinput" @blur="checkPhone(user.phone)" name="phone" class="layui-input" placeholder="手机">
              </div>
               <p>
                 <span v-show="errors.has('phone')" class="text-style" v-cloak> {{ errors.first('phone') }} </span>

               </p>
          </li>
          <li>
            <div class="get-code-box">
              <input  maxlength="6" v-model="user.code" placeholder="短信验证码" v-validate="'required|code|numeric'" :class="{'input': true, 'is-danger': errors.has('code')}" type="numeric" v-on:input="codeinput" name="code" class="layui-input" />
              <button v-on:click="getCode" :disabled="disabled" :class="{'disa':disabled}">{{btntxt}}</button>

            </div>
            <p>
              <span v-show="errors.has('code')" class="text-style" v-cloak> {{ errors.first('code') }} </span>

            </p>
          </li>


          <button class="submit" type="button" @click="sub" >提交</button>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import  './validate.js';
  import {Validator} from 'vee-validate'








  export default {
    data(){
      return{

        user:{
          code:"",
          name:"",
          phone:"",
          password:"",
          password2:"",
          email:"",

        },
        dataCode:"",
        btntxt:"免费获取短信验证码",
        disabled:false,
        time:0,
        isRigest:true
      }
    },
    beforecreate:function(){
      console.group('beforeCreate 创建前状态===============》');
    },
    mounted:function(){
      console.log("wwwwwww");
    },
    updated:function(){


    },
    created:function(){
      console.log("bbbb")
    },
    computed:{

    },
    methods:{
        checkCodeEqual:function(){

          Validator.extend('code', {
            messages: {
              zh_CN:field => '验证码输入错误',
            },
            validate: value => {
              const promise = new Promise(function(resolve) {

                resolve(true);

              })
              return promise.then((val)=>{
                return  !val
              })
            }
          })
        },
        sub:function(){
          var dataCode=this.dataCode;
          var code=this.user.code;
          if(!dataCode || !code){
            this.checkCodeEqual();

          }
          if(dataCode!=code){
            this.checkCodeEqual();

          }
            this.$validator.validate().then(result => {
              console.log(result)
              if (!result) {
                return false;
              }else{
                alert("a");
                console.log("success")
              }

            });

        },
      checkHas:function(){
        var aa=this.user.name;
        Validator.extend('name', {
          messages: {
            zh_CN:field => '账号已存在',
          },
          validate: value => {
            //let havaurl = UrlService.url('org/hava/'+_this.parentId+'/'+value),val
            const promise = new Promise(function(resolve) {
              // $.get(havaurl,data=>{
              //此处data返回一个布尔值，true为已存在，false为不存在


              if(aa=='123abc'){
                resolve(true);
                this.user.hasName=true;
              }else{
                resolve(false);
                this.user.hasName=false;
              }

              // })
            })
            //必须返回一个promise对象，否则报错
            return promise.then((val)=>{
              return  !val  //val值取反
            })
          }

        })
      },
      checkHasPhone:function(){
        var aa=this.user.phone;

        Validator.extend('phone', {
          messages: {
            zh_CN:field => '号码已存在',
          },
          validate: value => {
            //let havaurl = UrlService.url('org/hava/'+_this.parentId+'/'+value),val
            const promise = new Promise(function(resolve, reject) {
              // $.get(havaurl,data=>{
              //此处data返回一个布尔值，true为已存在，false为不存在


              if(aa=='13699463829'){
                resolve(true);

              }else{
                resolve(false);

              }

              // })
            })
            //必须返回一个promise对象，否则报错
            return promise.then((val)=>{
              return  !val  //val值取反
            })
          }

        })
      },

      checkName:function(user1){


        this.$validator.validate("name").then(result => {
              if(!result){
                console.log("验证没通过")
              }else{
                this.checkHas();
              }

        })
      },
      checkPhone:function(phone){
          console.log(phone)
        //this.user.name= user.toLowerCase();

        //请求后台接口校验用户是否存在(不区分大小写)

        //传参请求后台返回true或false
        function getPhone(){
          return '13699463829';
        }
        var ooo= getPhone();
        this.$validator.validate("phone").then(result => {
          if (!result) {
            console.log("验证没通过")
          }else{
            this.checkHasPhone();
          }
        });
      },
      phoneinput:function(){
        Validator.extend('phone', {
          messages: {
            required: ( field )=> "请输入" + field,
            zh_CN:field => field + '号码格式不正确'
          },

          validate: value => {
            return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
          }
        });
      },
      userinput:function(){
        Validator.extend('name', {
          messages: {
            required: ( field )=> "请输入" + field,
            zh_CN:field => field + '名包含字母（不区分大小写）、数字、下划线，不能全为数字' || '账号存在',
          },
          validate: value => {
            return  /^[a-zA-Z0-9_-]{4,20}$/.test(value) && !(/^\d*\.?\d+$/.test(value))
          }
        });
        //this.user.hasName=false;
      },
      codeinput:function(){
        Validator.extend('code', {
          messages: {
            required: ( field )=> "请输入" + field,
            zh_CN:field => field + '为6位数字'
          },

          validate: value => {
            return value.length== 6 && /^\d*\.?\d+$/.test(value)
          }
        })
      },
      getCode:function(){
        this.$validator.validate("phone").then(result => {
          if (!result){
            console.log("手机验证没通过")
            return;
          }else{
            //点击按钮发送获取验证码交易  按钮变更为“60秒后可重新发送”且为灰色不可点，60秒结束后按钮名字恢复且变为可点击

              var url="请求地址";

              this.user.code="";
              this.time=60;
              this.disabled=true;
              this.timer();
              //发送交易
              /*axios.post(url).then(
                res=>{
                  this.phonedata=res.data;
                }
              )*/
              this.dataCode="123456";


          }
        })
      },
      timer:function(){
        if (this.time > 0) {
          this.time--;
//                 console.log(this.time);
          this.btntxt=this.time+"s,后重新获取验证码";
          setTimeout(this.timer, 1000);
        } else{
          this.time=0;
          this.btntxt="免费获取短信验证码";
          this.disabled=false;
        }
      },
    }
  }
</script>

<style lang="scss">
  .login-body{
    background-color: #e3e3e3;
    padding: 2rem 8rem;
    .login-form-box{
      background-color: white;
      padding-bottom:40px;
      .form{
        overflow: hidden;
        h2{
          margin-top: 2rem;
        }
        ul{
          margin: 0;
          padding: 0;
          width: 40%;
          margin: 0 auto;
          li{
            text-align: left;
            margin-bottom: 2rem;
            position: relative;
            input{
                font-size: 12px;
                padding: 14px 4px;
                width: 100%;
              box-sizing: border-box;
              height: 45px;
              vertical-align:middle;
            }
            p{
              margin: 0;
              padding: 0;
            }
            .text-style{
              color: red;
              font-size: 12px;
            }
            .phone-box{
              font-size: 0;
              .phonet{
                font-size: 12px;
                vertical-align:middle;
                width: 38%;
                display: inline-block;
                text-align: center;
                padding: 14px 2px;
                font-size: 12px;
                height: 45px;
              }
              input.phonew{
                width: 60%;
                font-size: 12px;
                margin-left: 2%;
              }
            }

            .get-code-box{
              font-size: 0;
              input{
                font-size: 12px;
                width: 48%;
                vertical-align: middle;
              }
              button{
                border: none;
                border-radius: 4px;
                font-size: 12px;
                width: 50%;
                margin-left: 2%;
                color: white;
                background-color: blue;
                vertical-align: middle;
                height: 45px ;
              }
              button.disa{
                background-color: #e3e3e3;
                color: white;
              }
            }
          }
          .submit{
            width: 100%;
            color: white;
            background: blue;
            cursor: pointer;
            font-size: 16px;
            line-height: 45px;
            outline:none;
            border: 1px solid white;
            border-radius: 4px;
          }
        }

      }
    }

  }
</style>
