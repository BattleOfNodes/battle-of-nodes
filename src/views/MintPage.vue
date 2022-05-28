<template>
    <main class="cntnt__mint">
        <h1 class="cntnt__booster-title">BOOSTER PACK MINTING</h1>
        <div class="cntnt__mint-content">
            <p class="cntnt__booster-text">1ST EDITION BOOSTER PACK - BASE SET</p>
            <img class="cntnt__mint-booster" src="@/assets/images/BaseSetBoosterPack.png" />
            <div class="cntnt__mint-buttons">
                <router-link v-if="!this.$erd.logged" class="cntnt__zone-btn cntnt__mint-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO MINT
                </router-link>
                <div v-else>
                    <div v-if="remainingPacks===0">
                        <p class="cntnt__booster-text"> You minted all the packs available.</p>
                        <router-link class="cntnt__zone-btn cntnt__mint-btn" style="width: 240px;" to="/booster-pack" @click.native="moveUp()">
                            GO TO PACK OPENING
                        </router-link>
                    </div>
                    <div v-else>
                        <p v-if="remainingPacks!==1" class="cntnt__booster-text"> You can mint {{remainingPacks}} packs.</p>
                        <p v-else class="cntnt__booster-text"> You can mint one more pack.</p>
                        <div class="cntnt__mint-buttonAdd pointerCursor" v-on:click="removeBooster()">
                            -
                        </div>
                        <div class="cntnt__zone-btn cntnt__booster-btn pointerCursor" v-on:click="mintPack()">
                            MINT {{ mintPacks }} BASIC PACK
                        </div>
                        <div class="cntnt__mint-buttonAdd pointerCursor" v-on:click="addBooster()">
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="loader" class="loader-dual" />
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
// import axios from "axios";

// function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

import successMessageMint from "@/components/modals/successMessageMint";

export default {
    name: 'BoosterPack',
    Components: {
        successMessageMint
    },
    data () {
        return{
            isDesktop: window.innerWidth >= 1024,
            loader: false,
            mintPacks: 1,
            mintedPacks: 0,     // api taken
            remainingPacks: 1   // api taken
        }
    },
    methods: {
        openModal() {
            const options = { packs: this.mintPacks , remaining: this.remainingPacks};
            const style = {margin: 'auto', width: '50%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedPacks()
                this.getRemainingPacks()
                this.mintPacks = 0
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        moveUp() {
           window.scrollTo(0,0);
        },
        addBooster() {
            if(this.mintPacks !== this.remainingPacks)
                this.mintPacks++
        },
        removeBooster() {
            if(this.mintPacks !== 1)
                this.mintPacks--
        },
        getMintedPacks() { // get the already minted Packs
            
        },
        getRemainingPacks() { // get the packs that the user can mint
            
        },
        mintPack() { // just mint a pack
            this.openModal()
        }
    },
    async beforeMount() {
    }
}

</script>