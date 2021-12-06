import axios from "axios";

export default axios.create({
    baseURL: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
})