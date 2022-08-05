<template>
    <nav class="menu menu__submenu">
        <ul class="menu__links menu__submenu-links">
            <li class="menu__item">
                <router-link class="menu__item-link" to="/download">
                    <span>Download DEMO</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/mint-page">
                    <span :class="{glow: isMint}">MINT LIVE</span>
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

export default {
    data() {
        return{
            isMint: false,

            devApi : "https://api.elrond.com",
            SCAddressStr: "erd1qqqqqqqqqqqqqpgqfj9qht90c9zldjskq62sfx8ugfdxpjte58sq7r8au4"
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