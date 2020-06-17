/*
封装请求的地方
*/
import axios from 'axios'
import router from '../router/index';
import { Message } from 'element-ui';
// des解密

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}
axios.defaults.baseURL = process.env.VUE_APP_AJAXURL;

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/json';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  let data =JSON.parse(decryptDes(response.data.ciphertext));
  if(data.errorCode!==0){
    Message.error(data.message)
    if(data.errorCode===1003){
      toLogin();
    }
  }
  // 对响应数据做点什么
  console.log(data)
  return data;
}, function (error) {
  // 对响应错误做点什么
  Message.error('服务器异常 请稍后再试')
  return Promise.reject(error);
});
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function httpPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}



