<template>
    <div id="app">
        <Sidebar />
        <div class="app-content" :class="sidebarIsCollapse?'sidebarCollapse':'sidebarNoCollapse'">
            <Navbar />
        </div>
    </div>
</template>

<script>
import Navbar from '~/Navbar/Index.vue';
import Sidebar from '~/Sidebar/Index.vue';
import { mapState } from 'vuex';
export default {
    name:'Main',
    components:{
        Navbar,
        Sidebar,
    },
    computed:{
        ...mapState(['sidebarIsCollapse'])
    }
}
</script>

<style lang="scss" scoped>
@import url('../../css/Main/Index.scss');
</style>