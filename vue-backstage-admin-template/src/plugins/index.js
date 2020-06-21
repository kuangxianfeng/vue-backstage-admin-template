/**
 * 汇总所有的插件 集中导入到main.js中
 */
import Vue from 'vue';

import './element';

import '@/permission'; //引入权限控制的js

import api from '@/api/api'; //接口集合
Vue.prototype.$api = api;

import 'default-passive-events';

import '@/css/reset.css';//重置pc端样式

require('./mock')

