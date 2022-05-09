<template>
    <div>
        <main class="cntnt__collect">
            <div v-if="!logged">
                <h1 class="cntnt__zone-title cntnt__collect-title">My collection</h1>
                <p class="cntnt__contentCollection">Connect your Elrond Wallet in order to see you collection</p>
                <router-link class="cntnt__zone-btn" to="/login">Connect Wallet</router-link>
            </div>
            <div v-else>
                <div v-if="this.usersCards.length === 0 ">
                    <h1 class="cntnt__zone-title cntnt__collect-title">
                        My collection
                    </h1>
                    <p class="cntnt__contentCollection">You don't have any cards yet.</p>
                    <router-link class="cntnt__zone-btn" to="/booster-pack">Open a pack</router-link>
                    <router-link class="cntnt__zone-btn" to="/booster-pack">Buy some cards</router-link>
                </div>
                <div v-else>
                    <h1 class="cntnt__zone-title cntnt__collect-title-connected">
                        My collection
                    </h1>
                </div>  
            </div>
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
import axios from "axios";

export default {
    name: 'MyCollection',
    data() {
        return {
            cards: [],
            usersCards: [],
            isDesktop: window.innerWidth >= 1024
        }
    },
    async mounted () {
         if(this.$erd.logged)
         { 
            await axios.get('/cards_BON.json')
            .then( res => this.cards = res.data)
            .catch( error => console.log('error : ', error))
            await axios.get(`https://devnet-api.elrond.com/accounts/${this.$erd.walletAddress}/nfts?collections=BONCARDSX-55601b`)
            .then(res => this.usersCards = res.data)
            .catch(err => console.log(err))
            console.log(this.usersCards)
         }
    },
    computed: {
        logged() {
            return this.$erd.logged;
        }
    },
    methods: {
       
    }
}
</script>
