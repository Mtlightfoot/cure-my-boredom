import axios from "axios";
const BASEURL = "https://www.boredapi.com/api/activity?type=";

export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    }
};