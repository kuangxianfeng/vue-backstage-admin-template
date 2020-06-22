import {
    httpPost
} from '@/utils/http';
export default {
    menuBarData(params) {
        return httpPost('/meau/bar/data', params)
    },
    login(params) {
        return httpPost("/login", params)
    }
}
