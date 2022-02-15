<template>
    <div class="cntnt" id="app">
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
};
</script>

<style lang="scss">
    @import "src/sass/app";
</style>
