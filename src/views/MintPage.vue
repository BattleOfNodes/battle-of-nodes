<template>
    <main class="cntnt__mint">
        <h1 class="cntnt__booster-title">BOOSTER PACK MINTING</h1>
        <div class="cntnt__mint-content">
            <p class="cntnt__booster-text">BASIC BOOSTER PACK - BASE SET</p>
            <img class="cntnt__mint-booster" src="@/assets/images/BaseSetBoosterPack.png" />
            <div class="cntnt__mint-buttons">
                <router-link v-if="!this.$erd.logged" class="cntnt__zone-btn cntnt__mint-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO MINT
                </router-link>
                <div v-else>
                    <div v-if="remainingPacks===0">
                        <p class="cntnt__booster-text" v-if="mintedPacks!=0"> You minted all the packs available.</p>
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
            <div v-if="mintedPacks!=0">
                <p class="cntnt__mint-text" v-if="mintedPacks>60">{{mintedPacks}} PACKS LEFT</p>
                <p class="cntnt__mint-text" v-else style="color:red">ONLY {{mintedPacks}} PACK{{mintedPacks !== 1 ? 's' : ''}} LEFT!</p>
            </div>
            <p class="cntnt__mint-text" v-else>NO MORE PACKS LEFT</p>
            <p class="cntnt__mint-text">PRICE - 0.40 EGLD</p>
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
import successMessageMint from "@/components/modals/successMessageMint";
import { Account, Address, Transaction, TransactionPayload, Balance, GasLimit } from "@elrondnetwork/erdjs";
import axios from "axios";
import {Buffer} from 'buffer';

function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

function hashArrayToHex(hashArray) {
    /* We convert the hash
        char array to hex  */
    var hashHex = ""
    for (const i in hashArray)
        hashHex = hashHex.concat(intToHex(hashArray[i], 10));
    return hashHex.substring(0, 64);
}

function intToHex(string) {
    let hex = Number(string).toString(16);
    if (hex.length % 2 !== 0) {
        hex = `0${hex}`;
    }
    return hex;
}

export default {
    name: 'MintPack',
    Components: {
        successMessageMint
    },
    data () {
        return{
            isDesktop: window.innerWidth >= 1024,
            loader: false,
            mintPacks: 1,
            mintedPacks: 0,     // api taken
            remainingPacks: 0,   // api taken

            // ELROND //
            // devApi: "https://devnet-api.elrond.com",
            // SCAddressStr: "erd1qqqqqqqqqqqqqpgqyaqtxp57538uzjl6d5krpfrrzquv5f0ctvkqn59qft",

            // main
            devApi : "https://api.elrond.com",
            SCAddressStr: "erd1qqqqqqqqqqqqqpgqfj9qht90c9zldjskq62sfx8ugfdxpjte58sq7r8au4",

        }
    },
    methods: {
        openModal() {
            const options = { packs: this.mintPacks , remaining: this.remainingPacks};
            const style = {margin: 'auto', width: '80%', height: '40%'};
            const events = {'before-close': () => {
                this.getMintedPacks()
                this.getRemainingPacks()
                this.mintPacks = 1
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        moveUp() {
           window.scrollTo(0,0);
        },
        addBooster() {
            if(this.mintPacks < this.remainingPacks)
                this.mintPacks++
        },
        removeBooster() {
            if(this.mintPacks > 1)
                this.mintPacks--
        },
        async getMintedPacks() { // get the already minted Packs

            var rawMintedPacks = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            this.mintedPacks = Number("0x" + Buffer.from(rawMintedPacks.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtPacks = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex")) {
                this.mintedPacks -= Number("0x" + Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex"));
            }
        },
        async getRemainingPacks() { // get the packs that the user can mint

            var rawMaxBuyablePerAddress = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyablePerAddress",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            this.remainingPacks = Number("0x" + Buffer.from(rawMaxBuyablePerAddress.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtPacksperAddress = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getBoughtForAnAddress",
                    "args"      : ["00", this.$erd.walletAddress.valueHex],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtPacksperAddress.data.returnData[0], 'base64').toString("hex")) {
                this.remainingPacks -= Number("0x" + Buffer.from(rawBoughtPacksperAddress.data.returnData[0], 'base64').toString("hex"));
            }

            if(this.mintedPacks < this.remainingPacks) {
                this.remainingPacks = this.mintedPacks
            }
        },
        async mintPack() { // just mint a pack
            try {
                this.loader = true
                
                let select = "00"
                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                let SCAddress = new Address(this.SCAddressStr);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)

                let quantityToBuy = (this.mintPacks.toString(16).length%2 ? this.mintPacks : '0' + this.mintPacks.toString(16));

                /* We create the data payload */
                var payload = new TransactionPayload(`buyNFT@${select}@${quantityToBuy}`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: SCAddress,
                    gasLimit: new GasLimit(7000000),
                    value: Balance.egld(parseFloat(this.mintPacks*0.40).toPrecision(4)),
                    data: payload,
                });

                /* We set the transaction's nonce
                    which is the account's one   */
                await transaction.setNonce(account?.nonce);

                /*  We send the transaction and
                get its transaction hash array */

                const hashArray = await this.$erd?.providers?.signAndSend(transaction).then((result) => {return result?.hash?.hash;});
                /* We convert the hash
                    array to hex     */
                var hashHex = hashArrayToHex(hashArray);

                /* We're pending for the
                status to be defined  */
                await sleep(250)
                await this.pending(hashHex)
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },
        async pending(hashHex) {
            /* We try to get the
               transaction status */
            try {
                /* we request the transaction
                     status through the API   */
                var rawRequest = await axios.get(`${this.devApi}/transactions/${hashHex}?fields=status`);

                /* If the transaction is pending */
                if (rawRequest.data.status === "pending") {
                    /* We call this function
                         again 250ms later   */
                    await sleep(250)
                    await this.pending(hashHex)
                /* Otherwise */
                } else {
                    /*   The transaction is over, we redirect
                         the user to the burn booster result
                       page with the status and the transaction
                                hash as url parameters          */
                    
                    await sleep(1500)
                    this.loader = false
                    if(rawRequest.data.status === "success") {
                        this.openModal()
                    }
                    // STATUS = rawRequest.data.status      ==> "success" or "failure"
                } 
            } catch (err) {
                console.log(err)
                /* We need to wait a little bit more time, because the transaction
                   is not reachable yet so we call this function again 250ms later */
                await sleep(250)
                await this.pending(hashHex)
            }
        },
    },
    async beforeMount() {
        if(this.$erd.logged === true) {
            await this.getMintedPacks()
            await this.getRemainingPacks()
        }
        let waiting = 5
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(500)
            await this.getMintedPacks()
            await this.getRemainingPacks()
            waiting-=0.5
        }
    }
}

</script>