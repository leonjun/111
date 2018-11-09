import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      //name: () => '不能全为数字',
      //phone:()=> '请输入正确的手机格式',
      required: ( field )=>  field+"不能为空"
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      password2:'确认密码',
      name: '账号',
      phone: '手机',
      name2:"账号",
      equal:"账号",
      code:"验证码"
    }
  }
};

Validator.updateDictionary(dictionary);

/*Validator.extend('phone', {
  messages: {
    required: ( field )=> "请输入" + field,
    zh_CN:field => field + '号码格式不正确'
  },

  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});*/
Validator.extend('code', {
  messages: {
    required: ( field )=> "请输入" + field,
    zh_CN:field => field + '为6位数字'
  },

  validate: value => {
    return value.length== 6 && /^\d*\.?\d+$/.test(value)
  }
})
Validator.extend('email', {
  messages: {
    required: ( field )=> "请输入" + field,
    zh_CN:field => field + '格式不正确',
  },
  validate: value => {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
  }
});
/*Validator.extend('name', {
  messages: {
    required: ( field )=> "请输入" + field,
    zh_CN:field => field + '名包含字母（不区分大小写）、数字、下划线，不能全为数字' || '账号存在',
  },
  validate: value => {
    return  /^[a-zA-Z0-9_-]{4,20}$/.test(value) && !(/^\d*\.?\d+$/.test(value))
  }
});*/

Validator.extend('password', {
  messages: {
    required: ( field )=> "请输入" + field,
    zh_CN:field => field + '由英文字母（区分大小写）、数字、符号组成',
  },
  validate: value => {
      return value.length>=6 && value.length<=20 && /^[a-zA-Z0-9]{6,20}$/.test(value) && !(/^\d*\.?\d+$/.test(value))
  }
});
Validator.extend('password2', {
  messages: {
    required: ( field )=> "请再次输入密码",
    zh_CN:field => field + '长度不正确',
  },
  validate: value => {
    return value.length>=6 && value.length<=20  && /^[a-zA-Z0-9]{6,20}$/.test(value) && !(/^\d*\.?\d+$/.test(value))
  }
});





