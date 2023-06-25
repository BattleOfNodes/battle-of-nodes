<template>
    <div
        :class="{cntnt: this.$route.path !== '/staking'}"
        id="app">
        <Header v-if="this.$route.path !== '/staking'"></Header>
        <router-view />
        <Footer v-if="this.$route.path !== '/staking'"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
    components: {
        Header,
        Footer
    },
    data () {
        return {
            devApi : "https://api.multiversx.com",
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

            // ----------------- skin ----------------------

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

            // -------------------- wine skin --------------------------

            let rawMintedSkinsWine = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["02"],
                    "value"     : "0"
                }
            );

            let mintedWineSkin = Number("0x" + Buffer.from(rawMintedSkinsWine.data.returnData[0], 'base64').toString("hex"));

            let rawBoughtSkinsWine = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["02"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsWine.data.returnData[0], 'base64').toString("hex")) {
                mintedWineSkin -= Number("0x" + Buffer.from(rawBoughtSkinsWine.data.returnData[0], 'base64').toString("hex"));
            }

            // ----------------------- wine skin shard -------------------------------

            let rawMintedSkinsWineShard = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["03"],
                    "value"     : "0"
                }
            );

            let mintedWineSkinShards = Number("0x" + Buffer.from(rawMintedSkinsWineShard.data.returnData[0], 'base64').toString("hex"));

            let rawBoughtSkinsWineShard = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["03"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsWineShard.data.returnData[0], 'base64').toString("hex")) {
                mintedWineSkinShards -= Number("0x" + Buffer.from(rawBoughtSkinsWineShard.data.returnData[0], 'base64').toString("hex"));
            }

            // --------------------- wine skin wtoken ----------------------------

            let rawMintedSkinsWineWtoken = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["04"],
                    "value"     : "0"
                }
            );

            let mintedWineSkinWtoken = Number("0x" + Buffer.from(rawMintedSkinsWineWtoken.data.returnData[0], 'base64').toString("hex"));

            let rawBoughtSkinssWineWtoken = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["04"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinssWineWtoken.data.returnData[0], 'base64').toString("hex")) {
                mintedWineSkinWtoken -= Number("0x" + Buffer.from(rawBoughtSkinssWineWtoken.data.returnData[0], 'base64').toString("hex"));
            }

            localStorage.setItem('mintedPacks', mintedPacks || 0)
            localStorage.setItem('mintedSkins', mintedSkins || 0)

            localStorage.setItem('mintedWineSkin', mintedWineSkin || 0)
            localStorage.setItem('mintedWineSkinShards', mintedWineSkinShards || 0)
            localStorage.setItem('mintedWineSkinWtoken', mintedWineSkinWtoken || 0)
        },
    },
    async beforeMount() {
        this.checkIfMintIsLive()
    }
};
</script>

<style lang="scss">
    @import "src/sass/app";
</style>
