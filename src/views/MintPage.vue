<template>
    <main>
        
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
import axios from "axios";
function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

import errorMessageMint from "@/components/modals/errorMesageMint";
import successMessageMint from "@/components/modals/successMessageMint";

export default {
    name: 'BoosterPack',
    Components: {
        errorMessageMint,
        successMessageMint
    },
    data () {
        return{
            isDesktop: window.innerWidth >= 1024,
            loader: false,
            mintedPacks: 0
        }
    },
    methods: {
    },
    async beforeMount() {
    }
}

</script>