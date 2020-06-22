export default {
    setSidebarIsCollapse(store, data) {
        store.sidebarIsCollapse = data;
    },
    setToken(store, data) {
        store.token = data;
        localStorage.setItem('token', data)
    },
    setMeauBarData(store, data) {
        store.meauBarData = data;
    },
    setBreadcrumbRecordArr(store,data){
        store.breadcrumbRecordArr=data;
    }
}