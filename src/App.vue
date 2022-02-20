<template>
    <div
        class="cntnt"
        :class="{ loading: isLoading, loaded: isLoaded }"
        id="app">
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {
        Header,
        Footer
    },
    data () {
        return {
            isLoading: true,
            isLoaded: false
        }
    },
    mounted () {
        setTimeout(() => {
            this.isLoading = false;

            setTimeout(() => {
                this.isLoaded = true;
            }, 1000)
        }, 1000);
    }
};
</script>

<style lang="scss">
    @import "src/sass/app";
</style>
