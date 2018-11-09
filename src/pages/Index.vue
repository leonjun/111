<template>
  <div class="hello">
    <Head></Head>
    <Banner></Banner>
    <div class="in-product-show">
      <Title :describ="product.describ" :caption="product.tit"></Title>
      <div class="product-list">

          <router-link :to="{path:path.path}" v-for="(item,index) in products" :key="index">
          <Product :t="item.tit" :msg="item.msg" :img="item.src"></Product>
          </router-link>

      </div>
    </div>
    <div class="news-box">
      <Title :describ="news.describ" :caption="news.tit"></Title>
      <div class="news-list">
          <a v-for="item in newsLists">
            <News :t="item.tit" :msg="item.msg" :img="item.src" :date="item.date"></News>
          </a>
      </div>
    </div>
    <div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/templetes/commons/banner/Banner';
  import Head from '@/components/templetes/commons/head/Head';
  import Title from '@/components/templetes/commons/others/Title';
  import Product from '@/components/product/ProductIndex';
  import Foot from '@/components/templetes/commons/foot/Footer';
  import News from '@/components/news/NewsIndex';
export default {

  name: 'HelloWorld',
  components:{
    "Title":Title,
    "Foot":Foot,
    "Banner":Banner,
    "Head":Head,
    "Product":Product,
    "News":News,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      path:{
        path:"/Product",name:"产品中心"
      },
      product: {
        tit: "产品介绍",
        describ: "一体化、智能化、可视化的服务平台，打造优质的客户体验，提升客户满意度、忠诚度，驱动企业的业务增长"
      },
      news: {
        tit: "新闻中心",
        describ: "一体化、智能化、可视化的服务平台，打造优质的客户体验，提升客户满意度、忠诚度，驱动企业的业务增长"
      },
      products:[
        {
          tit:"拍照",msg:"人脸摄像头拍摄客户面部高清视频图像；全景摄像头拍摄客户操作区",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"打印",msg:"高速激光打印机--可根据系统指令打印用户回单、账户明细等",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"扫描",msg:"扫描并回收A4以下幅面的纸质凭证和文件，提供扫描影像",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"卡证读取",msg:"读取银行卡、身份证信息",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"身份核查",msg:"人像拍照、身份证信息读取、后台身份核验",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"插卡验密",msg:"页面级的插卡验密服务，密码键盘提供安全保障",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"聚合支付",msg:"同时支持微信、支付宝、银联、建行龙支付扫码支付",src:require('../assets/images/product/icon1.png')
        },
        {
          tit:"人脸识别",msg:"对客户进行人脸识别，精准匹配度，高安全性",src:require('../assets/images/product/icon1.png')
        },
      ],
      newsLists:[
        {
          date:this.getDate(),tit:"拍照",msg:"人脸摄像头拍摄客户面部高清视频图像；全景摄像头拍摄客户操作区",src:require('../assets/images/news/new1.png')
        },
        {
          date:this.getDate(),tit:"拍照",msg:"人脸摄像头拍摄客户面部高清视频图像；全景摄像头拍摄客户操作区",src:require('../assets/images/news/new1.png')
        },
        {
          date:this.getDate(),tit:"拍照",msg:"人脸摄像头拍摄客户面部高清视频图像；全景摄像头拍摄客户操作区",src:require('../assets/images/news/new1.png')
        },
      ]
    }
  },
  methods:{
    //获取时间格式化
    getDate:function(){
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    }
  }
}
</script>


<style lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style: none;

}

.hello{

}
.in-product-show {
  margin-top: 75px;
  .product-list{
    overflow:hidden;
    padding: 0 5rem;

    margin-top: 20px;
    >a{
      display: block;
      width: 25%;
      height: 245px;
      float: left;
      cursor: pointer;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 10px;
      text-decoration: none;
      .product-show{
        padding: 20px;
        height: 250px;
        &:hover{
          box-shadow:0 0 20px rgba(199,237,204,0.8);
        }
      }
    }
  }
}
  .news-box{
    margin-top: 75px;

    .news-list{
      overflow: hidden;
      padding: 0 5rem;


      margin-top: 20px;
      >a{
        display: block;
        width: 33%;
        float: left;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 10px;
        .new-show{
          padding: 20px;
          &:hover{
            box-shadow:0 0 20px rgba(199,237,204,0.8);
          }
          .new-msg{
            width: 360px;
            margin: 0 auto;

            >div{
              padding: 10px 20px;
            }
          }
        }
      }
    }
  }
</style>
