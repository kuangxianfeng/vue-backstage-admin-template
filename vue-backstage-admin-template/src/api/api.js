import {
   httpPost
} from '@/utils/http';
export default {
    menuBarData(){
        return httpPost('/meau/bar/data')
    }
}
