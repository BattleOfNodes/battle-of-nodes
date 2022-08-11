import Vapi from "vuex-rest-api"

const baseUrl = "/api/v1";

const store =  new Vapi({
    baseURL: baseUrl,
    state: {
    }
})
    .get({
        action: "fetchConfig",
        property: "config",
        path: "/config"
    })
    .getStore();

store.namespaced=true;
export default store;