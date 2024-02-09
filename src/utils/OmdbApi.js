import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + "&apikey=trilogy");
    }
};