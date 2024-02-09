import axios from "axios";
const BASEURL = "https://api.api-ninjas.com/v1/facts?limit=1";

export default {
    search: function () {
        return axios.get(BASEURL, {
            headers: { 'X-Api-Key': 'D+ZlT8Ep8oa5oQnp6azCuQ==eWaP6bu3RAEwBiTB'},
        });
    }
};