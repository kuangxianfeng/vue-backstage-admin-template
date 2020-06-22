import api from '@/api/api.js';
export default {
    async getPermission(store) {
        let res = await api.menuBarData({
            token: store.state.token,
        });
        store.commit('setMeauBarData', res.data.data)
        return res.data.data;
    }
}