<template>
    <div class="sidebar" :class="sidebarIsCollapse?'w65':''">
        <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            :default-active="$route.path"
            :collapse="sidebarIsCollapse"
        >
            <MenuList :list="meauBarData" />
        </el-menu>
    </div>
</template>

<script>
import { mapState } from "vuex";
import MenuList from "./MenuList.vue";
export default {
  name: "Sidebar",
  components: {
    MenuList
  },
  computed: {
    ...mapState(["sidebarIsCollapse", "meauBarData"])
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 220px;
  height: 100vh;
  overflow: hidden;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: all 0.3s;
  background: #545c64;
  ::v-deep.el-menu {
    border-right: none;
  }
}
.w65 {
  width: 65px;
}
</style>