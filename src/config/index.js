import axios from "axios";

const baseUrl = "";
const apiClient = axios.create( {
    baseURL: baseUrl
});

let config = {};
export default {
    async fetchConfig() {
        let response;
        try {
            response = await apiClient.get('/api/v1/config');
        } catch (error) {
            console.error("Cannot read configuration")
        }
        config = response.data;
        return config;
    },
    get() {
        return config;
    }
}