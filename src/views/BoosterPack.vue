<template>
    <main class="cntnt__collect">
        <h1 class="cntnt__booster-title">Booster Packs</h1>
        <div class="cntnt__booster-content">
            <div class="cntnt__booster-pack">
                <p class="cntnt__booster-text">1ST EDITION BOOSTER PACK - BASE SET</p>
                <img class="cntnt__booster-image" src="@/assets/images/1stEditionBoosterPack.png" />
                <router-link class="cntnt__zone-btn cntnt__booster-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO OPEN
                </router-link>
            </div>
            <div class="cntnt__booster-packs">
                <p class="cntnt__booster-text">BASIC BOOSTER PACK - BASE SET</p>
                <img class="cntnt__booster-image" src="@/assets/images/BaseSetBoosterPack.png"  />
                <router-link class="cntnt__zone-btn cntnt__booster-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO OPEN
                </router-link>
            </div>
        <div>
        <template v-if="isDesktop">
            <img class="cntnt__home-card cntnt__home-card-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-6" src="@/assets/images/bg-card-red.png" />
        </template>
    </main>
</template>

<script>
export default {
    name: 'BoosterPack',
    data () {
        return {
            isDesktop: window.innerWidth >= 1024
        }
    },
    computed: {
        logged() {
            return this.$erd.logged;
        }
    },
    methods:{
        moveUp(){
           window.scrollTo(0,0);
        }
    }
}
</script>