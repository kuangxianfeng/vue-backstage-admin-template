<template>
  <div>
        <template v-for="(item,index) of list" >
            <el-submenu :index="'/'+item.path" v-if="item.children" :key="index">
                <template slot="title">
                    <i :class="item.meta.icon" v-if="item.meta.icon"></i>
                    <span v-if="!sidebarIsCollapse">{{item.meta.title}}</span>
                </template>
                <MenuList :list="item.children" />   <!--递归调用-->
            </el-submenu>
            <el-menu-item :index="item.meta.link?item.meta.link:'/'+item.path"  v-else :key="index">
                <i :class="item.meta.icon" v-if="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MenuList",
  props: {
    list: Array
  },
  computed: {
    ...mapState(["sidebarIsCollapse"])
  }
};
</script>

