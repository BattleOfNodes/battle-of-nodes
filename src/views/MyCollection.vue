<template>
    <div>
        <main 
            class="cntnt__collect">
            <h1 class="cntnt__zone-title cntnt__collect-title">My collection</h1>
            <p class="cntnt__contentCollection">Connect your Elrond Wallet in order to see you collection</p>
            <router-link class="cntnt__zone-btn" to="/login">Connect Wallet</router-link>
            <template v-if="isDesktop">
                <img class="cntnt__home-card cntnt__home-card-1" src="@/assets/images/bg-card-blue.png" />
                <img class="cntnt__home-card cntnt__home-card-2" src="@/assets/images/bg-card-red.png" />
                <img class="cntnt__home-card cntnt__home-card-3" src="@/assets/images/bg-card-blue.png" />
                <img class="cntnt__home-card cntnt__home-card-4" src="@/assets/images/bg-card-red.png" />
                <img class="cntnt__home-card cntnt__home-card-5" src="@/assets/images/bg-card-blue.png" />
                <img class="cntnt__home-card cntnt__home-card-6" src="@/assets/images/bg-card-red.png" />
            </template>
        </main>
    </div>
</template>

<script>

export default {
    name: 'MyCollection',
    data() {
        return {
            isDesktop: window.innerWidth >= 1024
        }
    },
    computed: {
        logged() {
            return this.$erd.logged;
        }
    },
}
</script>
