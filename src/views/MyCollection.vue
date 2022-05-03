<template>
    <main 
        class="cntnt__collect">
        <h1 class="cntnt__zone-title cntnt__collect-title">My collection</h1>
        <p class="cntnt__contentCollection">Connect your Elrond Wallet in order to see you collection</p>
        <router-link class="cntnt__zone-btn" to="/login">Connect Wallet</router-link>
    </main>
</template>

<script>

export default {
    name: 'MyCollection',
    computed: {
        logged() {
            return this.$erd.logged;
        }
    },
}
</script>
