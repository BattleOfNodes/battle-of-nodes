<template>
    <nav class="menu menu__submenu">
        <ul class="menu__links menu__submenu-links">
            <li class="menu__item d-flex align-items-center p-2 animationDrop" v-if="this.$erd.logged && shards">
                <p class="shardCount me-2">{{ shards }}</p>
                <img class="shardLogo" src="@/assets/images/shard.png" alt="shard" />
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/staking">
                    <span>Staking</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/download">
                    <span>Download</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/mint-page">
                    <span :class="{glow: isMint}">MINT</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/login">
                    <span v-if="this.$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
                    <span v-else>Connect</span>
                </router-link>
            </li>
            <li class="menu__item">
                <a href="https://twitter.com/BattleOfNodeNFT" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/twitterWhite.png" alt="Twitter Logo" /></a>
            </li>
            <li class="menu__item">
                <a href="https://discord.gg/6X2FN6BRKz" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/discordWhite.png" alt="Discord Logo" /></a>
            </li>
        </ul>
    </nav>
</template>

<script>
import axios from "axios";
import { sleep } from "../utils"

export default {
    data() {
        return{
            isMint: localStorage.getItem("mintedPacks") || localStorage.getItem("mintedSkins") || 0,
            shards: 0,
            devApi : "https://api.multiversx.com",
            shardsId: "SHARD-d1f010",
        }
    },
    methods: {
        getShardsCount() {
            try {
                axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/tokens/${this.shardsId}`)
                .then(res => {
                    if(res?.data)
                        this.shards = parseInt(res?.data?.balance/1000000)
                        // this.shards = parseInt(res?.data?.balance)
                    else 
                        this.shards = 0
                })
            } catch(e) {
                this.$toast.open({
                    message: 'Something went wrong! Please try again later!',
                    type: 'error',
                    dismissible: true,
                    position: 'top-right',
                    duration: 5000,
                });
            }
        },
    },
    async beforeMount() {
        let waiting = 40
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(100)
            waiting-=1
        }
        if(this.$erd.logged === true) {
            this.getShardsCount()
        }
    },
    watch: {
        '$erd.logged': () => {
            if ( this.$erd.logged === true ) {
                this.getShardsCount()
            }
        }
    },
};
</script>