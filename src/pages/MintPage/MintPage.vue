<template>
    <main>
        <h1 class="cntnt-title">BOOSTER PACK MINTING</h1>
        <div class="cntnt__mint-content">
            <div>
                <p class="cntnt__booster-text">BASIC BOOSTER PACK - BASE SET</p>
                <img class="cntnt__mint-booster" src="@/assets/images/BaseSetBoosterPack.png" />
                <div class="cntnt__mint-buttons">
                    <router-link v-if="!this.$erd.logged" class="cntnt-btn cntnt__mint-btn" to="/login" @click.native="moveUp()">
                        CONNECT TO MINT
                    </router-link>
                    <div v-else>
                        <div v-if="remainingPacks===0">
                            <p class="cntnt__booster-text" v-if="mintedPacks!=0"> You minted all the packs available.</p>
                            <router-link class="cntnt-btn cntnt__mint-btn" style="width: 240px;" to="/booster-pack" @click.native="moveUp()">
                                GO TO PACK OPENING
                            </router-link>
                        </div>
                        <div v-else>
                            <p v-if="remainingPacks!==1" class="cntnt__booster-text"> You can mint {{remainingPacks}} packs.</p>
                            <p v-else class="cntnt__booster-text"> You can mint one more pack.</p>
                            <div class="cntnt__mint-buttonAdd pointerCursor" v-on:click="removeBooster()">
                                -
                            </div>
                            <div class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="mintPack()">
                            <!-- <div class="cntnt-btn cntnt__booster-btn noPointerCursor"> -->
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

            <!----------------------- skin -------------------------------->
            <div style="margin-top:10rem;">   
                <p class="cntnt__booster-text">1st Edition celebration Skin</p>
                <img class="cntnt__mint-booster" src="@/assets/images/BON-Skin-1.png" />
                <div class="cntnt__mint-buttons">
                    <router-link v-if="!this.$erd.logged" class="cntnt-btn cntnt__mint-btn" to="/login" @click.native="moveUp()">
                        CONNECT TO MINT
                    </router-link>
                    <div v-else>
                        <div v-if="remainingSkins===0">
                            <p class="cntnt__booster-text" v-if="mintedSkins!=0"> You minted all the skins available.</p>
                            <router-link class="cntnt-btn cntnt__mint-btn" style="width: 240px;" to="/booster-pack" @click.native="moveUp()">
                                GO TO PACK OPENING
                            </router-link>
                        </div>
                        <div v-else>
                            <p v-if="remainingSkins!==1" class="cntnt__booster-text"> You can mint {{remainingSkins}} skins.</p>
                            <p v-else class="cntnt__booster-text"> You can mint one more skin.</p>
                            <div class="cntnt__mint-buttonAdd pointerCursor" v-on:click="removeSkin()">
                                -
                            </div>
                            <div class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="mintSkin()">
                            <!-- <div class="cntnt-btn cntnt__booster-btn noPointerCursor"> -->
                                MINT {{ mintSkins }} SKINS
                            </div>
                            <div class="cntnt__mint-buttonAdd pointerCursor" v-on:click="addSkin()">
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="mintedSkins!=0">
                    <p class="cntnt__mint-text" v-if="mintedSkins>60">{{mintedSkins}} SKINS LEFT</p>
                    <p class="cntnt__mint-text" v-else style="color:red">ONLY {{mintedSkins}} SKINS{{mintedSkins !== 1 ? 's' : ''}} LEFT!</p>
                </div>
                <p class="cntnt__mint-text" v-else>NO MORE SKINS LEFT</p>
                <p class="cntnt__mint-text">PRICE - 0.50 EGLD</p>
            </div>  

            <!----------------------- wine skin -------------------------------->
            <div style="margin-top:10rem;" class="mb-4">   
                <p class="cntnt__booster-text">WWWINE COLLABORATION SKINn</p>
                <img class="cntnt__mint-booster" src="@/assets/images/WWWINE_SKIN.png" />
                <div class="cntnt__mint-buttons">
                    <router-link v-if="!this.$erd.logged" class="cntnt-btn cntnt__mint-btn" to="/login" @click.native="moveUp()">
                        CONNECT TO MINT
                    </router-link>
                    <div v-else>
                        <div v-if="
                            (parseInt(selectedWineOption) === 1 && remainingWineSkin === 0) || 
                            (parseInt(selectedWineOption) === 2 && remainingWineSkinShards === 0) || 
                            (parseInt(selectedWineOption) === 3 && remainingWineSkinWtoken === 0)"
                        >
                            <p class="cntnt__booster-text" v-if="
                                (parseInt(selectedWineOption) === 1 && mintedWineSkin !== 0) || 
                                (parseInt(selectedWineOption) === 2 && mintedWineSkinShards !== 0) || 
                                (parseInt(selectedWineOption) === 3 && mintedWineSkinWtoken !== 0)"
                            > You minted all the skins available.</p>
                            <select class="cntnt__booster-wineSlector cntnt__booster-wineSlector-noMore wineSelctorDesktop" v-model="selectedWineOption">
                                <option value=1 selected>EGDL</option>
                                <option value=2>Shard</option>
                                <option value=3>Grapes</option>
                            </select>
                            <router-link class="cntnt-btn cntnt__mint-btn" style="width: 240px;" to="/booster-pack" @click.native="moveUp()">
                                GO TO PACK OPENING
                            </router-link>
                        </div>
                        <div v-else>
                            <div v-if="parseInt(selectedWineOption) === 1">
                                <p v-if="remainingWineSkin!==1" class="cntnt__booster-text"> You can mint {{remainingWineSkin}} skins.</p>
                                <p v-else class="cntnt__booster-text"> You can mint one more skin.</p>
                            </div>
                            <div v-if="parseInt(selectedWineOption) === 2">
                                <p class="cntnt__booster-text"> You can mint one skin.</p>
                            </div>
                            <div v-if="parseInt(selectedWineOption) === 3">
                                <p class="cntnt__booster-text"> You can mint one skin.</p>
                            </div>
                            <div>
                                <select class="cntnt__booster-wineSlector wineSelctorDesktop" :class="{'cntnt__booster-wineSlector-tokens' :parseInt(selectedWineOption) === 2 || parseInt(selectedWineOption) === 3}" v-model="selectedWineOption">
                                    <option value=1 selected>EGDL</option>
                                    <option value=2>Shard</option>
                                    <option value=3>Grapes</option>
                                </select>
                                <div v-if="parseInt(selectedWineOption) === 1" class="cntnt__mint-buttonAdd pointerCursor" v-on:click="removeSkinWine()">
                                    -
                                </div>
                                <div v-if="parseInt(selectedWineOption) === 1" :class="{disabledButton: parseInt(mintedWineSkin) === 0}" class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="mintSkinWine()">
                                    MINT {{ mintWineSkin }} SKINS
                                </div>
                                <div v-if="parseInt(selectedWineOption) === 2" :class="{disabledButton: parseInt(mintedWineSkinShards) === 0}" class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="mintSkinWineShard()">
                                    MINT ONE SKIN
                                </div>
                                <div v-if="parseInt(selectedWineOption) === 3" :class="{disabledButton: parseInt(mintedWineSkinWtoken) === 0}" class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="mintSkinWineWtoken()">
                                    MINT ONE SKIN
                                </div>
                                <div v-if="parseInt(selectedWineOption) === 1" class="cntnt__mint-buttonAdd pointerCursor" v-on:click="addSkinWine()">
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <select class="cntnt__booster-wineSlector wineSelctorMobile" v-model="selectedWineOption">
                    <option value=1 selected>EGDL</option>
                    <option value=2>Shard</option>
                    <option value=3>Grapes</option>
                </select>
                <div v-if="mintedWineSkin!=0 && parseInt(selectedWineOption) === 1">
                    <p class="cntnt__mint-text" v-if="mintedWineSkin>60">{{mintedWineSkin}} SKINS LEFT</p>
                    <p class="cntnt__mint-text" v-else style="color:red">ONLY {{mintedWineSkin}} SKINS{{mintedWineSkin !== 1 ? 's' : ''}} LEFT!</p>
                </div>
                <div v-if="mintedWineSkinShards!=0 && parseInt(selectedWineOption) === 2">
                    <p class="cntnt__mint-text" v-if="mintedWineSkinShards>5">{{mintedWineSkinShards}} SKINS LEFT</p>
                    <p class="cntnt__mint-text" v-else style="color:red">ONLY {{mintedWineSkinShards}} SKINS{{mintedWineSkinShards !== 1 ? 's' : ''}} LEFT!</p>
                </div>
                <div v-if="mintedWineSkinWtoken!=0 && parseInt(selectedWineOption) === 3">
                    <p class="cntnt__mint-text" v-if="mintedWineSkinWtoken>5">{{mintedWineSkinWtoken}} SKINS LEFT</p>
                    <p class="cntnt__mint-text" v-else style="color:red">ONLY {{mintedWineSkinWtoken}} SKINS{{mintedWineSkinWtoken !== 1 ? 's' : ''}} LEFT!</p>
                </div>
                <p class="cntnt__mint-text" v-if="
                    (parseInt(selectedWineOption) === 1 && parseInt(mintedWineSkin) === 0) || 
                    (parseInt(selectedWineOption) === 2 && parseInt(mintedWineSkinShards) === 0) || 
                    (parseInt(selectedWineOption) === 3 && parseInt(mintedWineSkinWtoken) === 0)"
                >NO MORE SKINS LEFT</p>
                <p class="cntnt__mint-text" v-if="parseInt(selectedWineOption) === 1">PRICE - 0.40 EGLD</p>
                <p class="cntnt__mint-text" v-if="parseInt(selectedWineOption) === 2">PRICE - 500 SHARDS</p>
                <p class="cntnt__mint-text" v-if="parseInt(selectedWineOption) === 3">PRICE - 500 GRAPES</p>
            </div>  
            <p class="mt-5 mb-4">MINT REWARDS</p>
            <div class="d-flex m-auto">
                <div style="width:33%;">
                    <img class="cntnt__booster-wineSlector-logos" src="@/assets/images/SHARDS.svg" alt="Discord Logo" />
                    <p>X1 FREE RANDOM</p>
                    <p>NATURE CARD</p>
                </div>
                <div style="margin-right:2rem;margin-left:2rem;width: 33%;">
                    <img class="cntnt__booster-wineSlector-logos" src="@/assets/images/ELROND.svg" alt="Discord Logo" />
                    <p>X1 FREE RANDOM</p>
                    <p>NATURE CARD</p>
                    <p>+25 SHARD TOKENS</p>
                </div>
                <div style="width:33%;">
                    <img class="cntnt__booster-wineSlector-logos" src="@/assets/images/GRAPES.svg" alt="Discord Logo" />
                    <p>X2 FREE RANDOM</p>
                    <p>NATURE CARD</p>
                    <p>+50 SHARD TOKENS</p>
                </div>
            </div>
        </div>
        <div v-if="loader" class="blur-screen">
            <svg class="loader-box" viewBox="0 0 100 100">
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
                        flood-color="#fc6767"/>
                    </filter>
                </defs>
                <circle class="loader-spinner" cx="50" cy="50" r="45"/>
            </svg>
        </div>
        <template v-if="isDesktop">
            <img class="cntnt__bgCard cntnt__bgCard-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-6" src="@/assets/images/bg-card-red.png" />
        </template>
    </main>
</template>

<style lang="scss">
    @import "./MintPage.scss";
</style>

<script>
import successMessageMint from "./modal/successMessageMint";
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
            mintedPacks: localStorage.getItem("mintedPacks") || 0,
            remainingPacks: 0,   // api taken

            mintSkins: 1,
            mintedSkins: localStorage.getItem("mintedSkins") || 0,
            remainingSkins: 0,  // api taken

            mintWineSkin: 1,
            remainingWineSkin: 0,
            mintedWineSkin: localStorage.getItem("mintedWineSkin") || 0,

            remainingWineSkinShards: 0,
            mintedWineSkinShards: localStorage.getItem("mintedWineSkinShards") || 0,

            remainingWineSkinWtoken: 0,
            mintedWineSkinWtoken: localStorage.getItem("mintedWineSkinWtoken") || 0,

            selectedWineOption: 1,

            // // ELROND //
            // devApi: "https://devnet-api.elrond.com",
            // SCAddressStr: "erd1qqqqqqqqqqqqqpgqyaqtxp57538uzjl6d5krpfrrzquv5f0ctvkqn59qft",

            // main
            devApi : "https://api.elrond.com",
            SCAddressStr: "erd1qqqqqqqqqqqqqpgqfj9qht90c9zldjskq62sfx8ugfdxpjte58sq7r8au4",

        }
    },
    methods: {
        openModalBooster() {
            const options = { packs: this.mintPacks , remaining: this.remainingPacks, type:"packs"};
            const style = {margin: 'auto', width: '80%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedPacks()
                this.getRemainingPacks()
                this.mintPacks = 1
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        openModalSkins() {
            const options = { packs: this.mintSkins , remaining: this.remainingSkins, type:"skins"};
            const style = {margin: 'auto', width: '80%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedSkins()
                this.getRemainingSkins()
                this.mintSkins = 1
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        openModalSkinWine() {
            const options = { packs: this.mintWineSkin , remaining: this.remainingWineSkin, type:"skins"};
            const style = {margin: 'auto', width: '80%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedWineSkin()
                this.getRemainingWineSkin()
                this.mintWineSkin = 1
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        openModalSkinWineShard() {
            const options = { packs: 1 , remaining: this.remainingWineSkinShards, type:"skins"};
            const style = {margin: 'auto', width: '80%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedWineSkinShard()
                this.getRemainingWineSkinShard()
                }}
            this.$modal.show(successMessageMint, options, style, events);
        },
        openModalSkinWineWtoken() {
            const options = { packs: 1 , remaining: this.remainingWineSkinWtoken, type:"skins"};
            const style = {margin: 'auto', width: '80%', height: '50%'};
            const events = {'before-close': () => {
                this.getMintedWineSkinWtoken()
                this.getRemainingWineSkinWtoken()
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
        addSkin() {
            if(this.mintSkins < this.remainingSkins)
                this.mintSkins++
        },
        removeSkin() {
            if(this.mintSkins > 1)
                this.mintSkins--
        },
        addSkinWine() {
            if(this.mintWineSkin < this.remainingWineSkin)
                this.mintWineSkin++
        },
        removeSkinWine() {
            if(this.mintWineSkin > 1)
                this.mintWineSkin--
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

            const availablePacks = Number("0x" + Buffer.from(rawMintedPacks.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtPacks = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["00"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex")) {
                this.mintedPacks = availablePacks - Number("0x" + Buffer.from(rawBoughtPacks.data.returnData[0], 'base64').toString("hex"));
                localStorage.setItem('mintedPacks', this.mintedPacks || 0)
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
                var payload = new TransactionPayload(`buyNFT@${select}@0${quantityToBuy == '10' ? 'a' : quantityToBuy}`);

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
                await this.pending(hashHex, 'booster')
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },
        async pending(hashHex, mode) {
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
                    await this.pending(hashHex, mode)
                /* Otherwise */
                } else {
                    /*   The transaction is over, we redirect
                         the user to the burn booster result
                       page with the status and the transaction
                                hash as url parameters          */
                    
                    await sleep(1500)
                    this.loader = false
                    if(rawRequest.data.status === "success") {
                        if(mode === 'booster'){
                            this.openModalBooster()
                        }
                        else if(mode === 'skin') {
                            this.openModalSkins()
                        } else if(mode === 'skinWine') {
                            this.openModalSkinWine()
                        }
                        else if(mode === 'skinWineShard') {
                            this.openModalSkinWineShard()
                        }
                        else if(mode === 'skinWineWtoken') {
                            this.openModalSkinWineWtoken()
                        }
                    }
                    // STATUS = rawRequest.data.status      ==> "success" or "failure"
                } 
            } catch (err) {
                console.log(err)
                /* We need to wait a little bit more time, because the transaction
                   is not reachable yet so we call this function again 250ms later */
                await sleep(250)
                await this.pending(hashHex, mode)
            }
        },

        // ---------------------------------- mint skins ---------------------------------
        async getMintedSkins() { // get the already minted Packs

            var rawMintedSkins = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["01"],
                    "value"     : "0"
                }
            );

            const availableSkins = Number("0x" + Buffer.from(rawMintedSkins.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkins = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["01"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex")) {
                this.mintedSkins = availableSkins - Number("0x" + Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex"));
                localStorage.setItem('mintedSkins', this.mintedSkins || 0)
            }
        },
        async getRemainingSkins() { // get the packs that the user can mint

            var rawMaxBuyablePerAddress = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyablePerAddress",
                    "args"      : ["01"],
                    "value"     : "0"
                }
            );

            this.remainingSkins = Number("0x" + Buffer.from(rawMaxBuyablePerAddress.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkinsperAddress = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getBoughtForAnAddress",
                    "args"      : ["01", this.$erd.walletAddress.valueHex],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex")) {
                this.remainingSkins -= Number("0x" + Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex"));
            }

            if(this.mintedSkins < this.remainingSkins) {
                this.remainingSkins = this.mintedSkins
            }
        },
        async mintSkin() { // just mint a skin!!
            try {
                this.loader = true
                
                let select = "01"
                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                let SCAddress = new Address(this.SCAddressStr);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)

                let quantityToBuy = (this.mintSkins.toString(16).length%2 ? this.mintSkins : '0' + this.mintSkins.toString(16));

                /* We create the data payload */
                var payload = new TransactionPayload(`buyNFT@${select}@0${quantityToBuy == '10' ? 'a' : quantityToBuy}`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: SCAddress,
                    gasLimit: new GasLimit(7000000),
                    value: Balance.egld(parseFloat(this.mintSkins*0.50).toPrecision(4)),
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
                await this.pending(hashHex, 'skin')
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },

        // ---------------- wine skin --------------------------
         async getMintedWineSkin() { // get the already minted Packs

            var rawMintedSkins = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["02"],
                    "value"     : "0"
                }
            );

            const availableSkins = Number("0x" + Buffer.from(rawMintedSkins.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkins = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["02"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex")) {
                this.mintedWineSkin = availableSkins - Number("0x" + Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex"));
                localStorage.setItem('mintedWineSkin', this.mintedWineSkin || 0)
            }
        },
        async getRemainingWineSkin() { // get the packs that the user can mint

            var rawMaxBuyablePerAddress = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyablePerAddress",
                    "args"      : ["02"],
                    "value"     : "0"
                }
            );

            this.remainingWineSkin = Number("0x" + Buffer.from(rawMaxBuyablePerAddress.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkinsperAddress = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getBoughtForAnAddress",
                    "args"      : ["02", this.$erd.walletAddress.valueHex],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex")) {
                this.remainingWineSkin -= Number("0x" + Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex"));
            }

            if(this.mintedWineSkin < this.remainingWineSkin) {
                this.remainingWineSkin = this.mintedWineSkin
            }
        },

         async mintSkinWine() { // just mint a skin!!
            try {
                this.loader = true
                
                let select = "02"
                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                let SCAddress = new Address(this.SCAddressStr);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)

                let quantityToBuy = (this.mintWineSkin.toString(16).length%2 ? this.mintWineSkin : '0' + this.mintWineSkin.toString(16));

                /* We create the data payload */
                var payload = new TransactionPayload(`buyNFT@${select}@0${quantityToBuy == '10' ? 'a' : quantityToBuy}`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: SCAddress,
                    gasLimit: new GasLimit(7000000),
                    value: Balance.egld(parseFloat(this.mintWineSkin*0.40).toPrecision(4)),
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
                await this.pending(hashHex, 'skinWine')
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },
        // ---------------- wine skin shard --------------------------

        async getMintedWineSkinShard() { // get the already minted Packs

            var rawMintedSkins = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["03"],
                    "value"     : "0"
                }
            );

            const availableSkins = Number("0x" + Buffer.from(rawMintedSkins.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkins = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["03"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex")) {
                this.mintedWineSkinShards = availableSkins - Number("0x" + Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex"));
                localStorage.setItem('mintedWineSkinShards', this.mintedWineSkinShards || 0)
            }
        },
        async getRemainingWineSkinShard() { // get the packs that the user can mint

            var rawMaxBuyablePerAddress = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyablePerAddress",
                    "args"      : ["03"],
                    "value"     : "0"
                }
            );

            this.remainingWineSkinShards = Number("0x" + Buffer.from(rawMaxBuyablePerAddress.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkinsperAddress = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getBoughtForAnAddress",
                    "args"      : ["03", this.$erd.walletAddress.valueHex],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex")) {
                this.remainingWineSkinShards -= Number("0x" + Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex"));
            }

            if(this.mintedWineSkinShards < this.remainingWineSkinShards) {
                this.remainingWineSkinShards = this.mintedWineSkinShards
            }
        },

         async mintSkinWineShard() { // just mint a skin!!
            try {
                this.loader = true
                
                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                let SCAddress = new Address(this.SCAddressStr);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)

                /* We create the data payload */
                var payload = new TransactionPayload(`ESDTTransfer@53484152442d643166303130@1dcd6500@6275794e4654@03@01`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: SCAddress,
                    gasLimit: new GasLimit(7000000),
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
                await this.pending(hashHex, 'skinWineShard')
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },

        // ---------------- wine skin wine token --------------------------

        async getMintedWineSkinWtoken() { // get the already minted Packs

            var rawMintedSkins = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyable",
                    "args"      : ["04"],
                    "value"     : "0"
                }
            );

            const availableSkins = Number("0x" + Buffer.from(rawMintedSkins.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkins = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getNbrNFTBought",
                    "args"      : ["04"],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex")) {
                this.mintedWineSkinWtoken = availableSkins - Number("0x" + Buffer.from(rawBoughtSkins.data.returnData[0], 'base64').toString("hex"));
                localStorage.setItem('mintedWineSkinWtoken', this.mintedWineSkinWtoken || 0)
            }
        },
        async getRemainingWineSkinWtoken() { // get the packs that the user can mint

            var rawMaxBuyablePerAddress = await axios.post(`${this.devApi}/query`, {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getTotalNFTBuyablePerAddress",
                    "args"      : ["04"],
                    "value"     : "0"
                }
            );

            this.remainingWineSkinWtoken = Number("0x" + Buffer.from(rawMaxBuyablePerAddress.data.returnData[0], 'base64').toString("hex"));

            var rawBoughtSkinsperAddress = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.SCAddressStr,
                    "funcName"  : "getBoughtForAnAddress",
                    "args"      : ["04", this.$erd.walletAddress.valueHex],
                    "value"     : "0"
                }
            );

            if (Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex")) {
                this.remainingWineSkinWtoken -= Number("0x" + Buffer.from(rawBoughtSkinsperAddress.data.returnData[0], 'base64').toString("hex"));
            }

            if(this.mintedWineSkinWtoken < this.remainingWineSkinWtoken) {
                this.remainingWineSkinWtoken = this.mintedWineSkinWtoken
            }
        },

         async mintSkinWineWtoken() { // just mint a skin!!
            try {
                this.loader = true
                
                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                let SCAddress = new Address(this.SCAddressStr);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)


                /* We create the data payload */
                var payload = new TransactionPayload(`ESDTTransfer@4752415045532d376331376334@1b1ae4d6e2ef500000@6275794e4654@04@01`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: SCAddress,
                    gasLimit: new GasLimit(7000000),
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
                await this.pending(hashHex, 'skinWineWtoken')
            } catch (err) { 
                this.loader= false
                console.log(err)
            }
        },
    },
    async beforeMount() {
        let waiting = 80
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(50)
            waiting-=1
        } 
        if(this.$erd.logged === true) {
            this.getRemainingPacks()
            this.getRemainingSkins()
            this.getRemainingWineSkinWtoken()
            this.getRemainingWineSkinShard()
            this.getRemainingWineSkin()
        }
    }
}

</script>