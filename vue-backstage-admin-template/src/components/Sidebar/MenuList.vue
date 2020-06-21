<template>
  <div>
        <template v-for="(item,index) of list" >
            <el-submenu :index="item.path" v-if="item.children" :key="index">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{item.meta.title}}</span>
                </template>
                <MenuList :list="item.children" />   <!--递归调用-->
            </el-submenu>
            <el-menu-item :index="item.meta.link"  v-else :key="index">
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    list: Array
  }
};
</script>
