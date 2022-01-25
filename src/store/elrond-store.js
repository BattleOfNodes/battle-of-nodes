import Vapi from "vuex-rest-api"
import axios from "axios";
import ElrondConfig from '@/config'

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
    async config => { config.baseURL=await ElrondConfig.get().elrond.api.url; return config; },
        error => Promise.reject(error)
);

const store = new Vapi({
    axios: axiosInstance,
    state: {
        userWines: []
    }
})
    .get({
        action: "fetchUserCards",
        property: "userCards",
        path: ({ address, from, size }) => `/accounts/${address}/nfts?collections=${ElrondConfig.get().bon.collection}&from=${from}&size=${size}`
    })
    .getStore();
store.namespaced=true;

export default store;
