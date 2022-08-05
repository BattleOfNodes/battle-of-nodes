<template>
    <nav class="menu">
        <div class="menu__phone">
            <input type="checkbox" id="checkMenu" class="menu__phone-check" />
            <span class="menu__phone-span"></span>
            <span class="menu__phone-span"></span>
            <span class="menu__phone-span"></span>
            <ul class="menu__links">
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/">About the game</router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/explore">Explore</router-link>
                </li>
                <li class="menu__item">
                    <router-link ref="fetch" class="menu__item-link" to="/my-collection">My Collection</router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/booster-pack">Booster Pack</router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/login">
                        <span v-if="this.$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
                        <span v-else>Connect</span>
                    </router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/mint-page">
                        <span :class="{glow: isMint}">MINT</span>
                    </router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/download">
                        <span>Download DEMO</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import axios from "axios";

export default {
     data () {
        return{
            isMint: false,

            devApi : "https://api.elrond.com",
            SCAddressStr: "erd1qqqqqqqqqqqqqpgqfj9qht90c9zldjskq62sfx8ugfdxpjte58sq7r8au4",
        }
    },
    methods: {
        async checkIfMintIsLive() {

            let rawMintedPacks = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            let mintedPacks = Number("0x" + Buffer.from(rawMintedPacks.data.returnData[0], 'base64').toString("hex"));

            let rawBoughtPacks = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex")) {
                mintedPacks -= Number("0x" + Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex"));
            }


            let rawMintedSkins = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["01"],
                    "value"     : "0"
                }
            );

            let mintedSkins = Number("0x" + Buffer.from(rawMintedSkins.data.returnData[0], 'base64').toString("hex"));

            let rawBoughtSkins = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["01"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex")) {
                mintedSkins -= Number("0x" + Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex"));
            }

            if(mintedPacks || mintedSkins) {
                this.isMint = true
            }
        },
    },
    async beforeMount() {
        await this.checkIfMintIsLive()
    }

};
</script>
