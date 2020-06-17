/**
 * 汇总所有的插件 集中导入到main.js中
 */
import Vue from 'vue';

import './element';

import '@/permission'; //引入权限控制的js

import api from '@/api/api'; //接口集合

import 'default-passive-events';

Vue.prototype.$api = api;