<template>
    <div
        class="cntnt"
        id="app">
        <Header></Header>
        <router-view />
        <Footer></Footer>
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
            isLoading: true,
            isLoaded: false,
            
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

            localStorage.setItem('mintedPacks', mintedPacks || 0)
            localStorage.setItem('mintedSkins', mintedSkins || 0)
        },
    },
    async beforeMount() {
        console.log(this.$store)
        await this.checkIfMintIsLive()
    }
};
</script>

<style lang="scss">
    @import "src/sass/app";
</style>
