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
    </main>
</template>

<script>
export default {
    name: 'BoosterPack',
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