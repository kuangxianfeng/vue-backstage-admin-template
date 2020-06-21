<template>
    <div class="navbar">
        <div class="handle-box-1">
            <div class="sidebar-handle hDiv">
                <i class="el-icon-s-fold sidebar-handle-icon" v-if="!sidebarIsCollapse" @click="sidebar_handle" title="收起菜单"></i>
                <i class="el-icon-s-unfold sidebar-handle-icon" v-else @click="sidebar_handle" title="展开菜单"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Navbar',
    computed:{
        ...mapState(['sidebarIsCollapse'])
    },
    methods:{
        sidebar_handle(){
            if(this.sidebarIsCollapse){
                this.$store.commit('setSidebarIsCollapse',false);
            }else{
                this.$store.commit('setSidebarIsCollapse',true);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    width: 100%;
    background: #fff;
    .sidebar-handle-icon{
        cursor: pointer;
        font-size: 22px;
    }
}

</style>