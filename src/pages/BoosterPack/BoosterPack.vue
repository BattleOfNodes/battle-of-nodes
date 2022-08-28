<template>
    <main>
        <h1 class="cntnt-title">Booster Packs</h1>
        <div class="cntnt__booster-content">
            <div class="cntnt__booster-pack cntnt__booster-pack-cardOne">
                <p class="cntnt__booster-text">1ST EDITION BOOSTER PACK - BASE SET</p>
                <div class="scene scene--card" :class="{ active: loaderRed }">
                    <div
                        class="card bg-transparent"
                        @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )"
                        v-bind:class="{ flipme: cardOne == 'flipped' }">
                        <div class="card__face card__faceOne--front">
                        </div>
                        <div class="card__face card__faceOne--back">
                            <p class="cntnt__booster-pack-text-title cntnt__booster-pack-text">Current Supply</p>
                            <p class="cntnt__booster-pack-boldText">{{ redBoosterSupply }}</p>
                            <p class="cntnt__booster-pack-text">Higher drop chance for rarer cards</p>
                            <p class="cntnt__booster-pack-text">6 random golden cards inside</p>
                            <p class="cntnt__booster-pack-text">1 Rare card guaranteed</p>
                            <p class="cntnt__booster-pack-text" style="margin-top: 3rem;">Packs opened</p>
                            <p class="cntnt__booster-pack-boldText">{{ redBoosterOpened }}</p>
                            <p class="cntnt__booster-pack-boldText cntnt__booster-pack-boldText-bottomText">SOLD OUT</p>
                        </div>
                    </div>
                </div>
                <router-link v-if="!this.$erd.logged" class="cntnt-btn cntnt__booster-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO OPEN
                </router-link>
                <div v-else>
                    <a v-if="this.redBoosterCount === 0" class="cntnt-btn cntnt__booster-btn" href="https://deadrare.io/collection/BONPACKS-f0b549?filters=%7B%22Edition%22%3A%5B%7B%22label%22%3A%221st+Edition%22%2C%22value%22%3A%221st+Edition%22%7D%5D%7D">
                        BUY 1ST EDITION PACK
                    </a>
                    <div v-else class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="if(!loaderRed && !loaderBlue) {handleSubmit('RED')}">
                        OPEN 1ST EDITION PACK
                    </div>
                </div>
            </div>
            <div class="cntnt__booster-pack cntnt__booster-pack-cardTwo">
                <p class="cntnt__booster-text">BASIC BOOSTER PACK - BASE SET</p>
                <div class="scene scene--card" :class="{ active: loaderBlue }">
                    <div
                        class="card bg-transparent"
                        @click="cardTwo == 'start' ? (cardTwo = 'flipped' ) : (cardTwo = 'start' )"
                        v-bind:class="{ flipme: cardTwo == 'flipped' }">
                        <div class="card__face card__faceTwo--front">
                        </div>
                        <div class="card__face card__faceTwo--back">
                            <p class="cntnt__booster-pack-text-title cntnt__booster-pack-text">Current Supply</p>
                            <p class="cntnt__booster-pack-boldText">{{ blueBooserSupply }}</p>
                            <p class="cntnt__booster-pack-text">Normal drop chance for rarer cards</p>
                            <p class="cntnt__booster-pack-text">6 random cards inside</p>
                            <p class="cntnt__booster-pack-text">1 Uncommon card guaranteed</p>
                            <p class="cntnt__booster-pack-text" style="margin-top: 3rem;">Packs opened</p>
                            <p class="cntnt__booster-pack-boldText">{{ blueBoosterOpened }}</p>
                            <p class="cntnt__booster-pack-boldText cntnt__booster-pack-boldText-bottomText">2800/6000 Minted</p>
                        </div>
                    </div>
                </div>
                <router-link v-if="!this.$erd.logged" class="cntnt-btn cntnt__booster-btn" to="/login" @click.native="moveUp()">
                    CONNECT TO OPEN
                </router-link>
                <div v-else>
                    <a v-if="this.blueBoosterCount === 0" class="cntnt-btn cntnt__booster-btn" href="https://deadrare.io/collection/BONPACKS-f0b549?filters=%7B%22Edition%22%3A%5B%7B%22label%22%3A%22Basic+Pack%22%2C%22value%22%3A%22Basic+Pack%22%7D%5D%7D">
                        BUY BASIC PACK
                    </a>
                    <div v-else class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="if(!loaderRed && !loaderBlue) {handleSubmit('BLUE')}">
                        OPEN BASIC PACK
                    </div>
                </div>
            </div>
        </div>
        <div v-if="this.$erd.logged && (this.blueBoosterCount !== 0 || this.redBoosterCount !== 0)">
            <h1 class="cntnt__booster-title-bottom">MY BOOSTER PACKS</h1>
            <div class="cntnt__booster-ownedPacks" v-if="this.redBoosterCount !== 0"> 
                <div class="cntnt__booster-ownedPacks-content">
                    <p class="cntnt__booster-ownedPacks-text">{{ redBoosterID }}</p>
                    <img class="cntnt__booster-ownedPacks-image" src="@/assets/images/1stEditionBoosterPack.png" />
                </div>
                <p class="cntnt__booster-ownedPacks-count">X{{ redBoosterCount }} PACKS OWNED</p>
            </div>
            <div class="cntnt__booster-ownedPacks" v-if="this.blueBoosterCount !== 0">
                <div class="cntnt__booster-ownedPacks-content">
                    <p class="cntnt__booster-ownedPacks-text">{{ blueBoosterID }}</p>
                    <img class="cntnt__booster-ownedPacks-image" src="@/assets/images/BaseSetBoosterPack.png" /> 
                </div>
                <p class="cntnt__booster-ownedPacks-count">X{{ blueBoosterCount }} PACKS OWNED</p>
            </div>
        </div>
        <div v-if="loaderRed || loaderBlue" class="blur-screen">
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
    @import "./BoosterPack.scss";
</style>

<script>

import { Account, Transaction, TransactionPayload, Balance, GasLimit } from "@elrondnetwork/erdjs";
import axios from "axios";

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

function stringToHex(string) {
    return string.split('').map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')) .join('');
}

import boosterModal from "./modal/boosterModal";

export default {
    name: 'BoosterPack',
    Components: {
        boosterModal
    },
    data () {
        return {
            loaderBlue: false,
            loaderRed: false,
            allCards: [],
            cardOne: "start",
            cardTwo: "start",
            isDesktop: window.innerWidth >= 1024,
            /* ACCOUNT DATAS */
            redBoosterCount : 0,
            blueBoosterCount : 0,
            redBoosterSupply : 0,
            blueBooserSupply : 0,
            cardsObtained : [],
            /* DEVNET DATAS */
            SCFunctionHex : "6275726e426f6f73746572",

            // devApi : "https://api.elrond.com",
            // SCAddressHex : "00000000000000000500eb9c542033a0f3e48b2a6aea6fc1e60e2e753597a1e0",
            // redBoosterID : "BONPACKS-f0b549-01",
            // blueBoosterID : "BONPACKS-f0b549-02",
            // SCAddress: "erd1qqqqqqqqqqqqqpgqaww9ggpn5re7fze2dt4xls0xpch82dvh58sqpu76dr",
            devApi : "https://devnet-api.elrond.com",
            SCAddressHex : "00000000000000000500679c7b8d348a83feddbe2e1a439d64c3a0df8f64cb1f",
            SCAddress : "erd1qqqqqqqqqqqqqpgqv7w8hrf532plahd79cdy88tycwsdlrmyev0swdhkzp",
            redBoosterID : "BONPACKS-1de767-01",
            blueBoosterID : "BONPACKS-1de767-02",

            redBoosterIDHex : null,
            blueBoosterIDHex : null,
            redBoosterOpened: 0,
            blueBoosterOpened: 0
        }
    },
    methods: {
        openModal() {
            const options = { cards: this.cardsObtained };
            const style = {top: '5%', margin: 'auto', width: '80%', height: '90%'};
            const events = {'before-close': () => {
                this.updateSupply()
                this.updateIsBoostersOwner()
                }}
            this.$modal.show(boosterModal, options, style, events);
        },
        moveUp() {
           window.scrollTo(0,0);
        },
        /***************************************
         * initComponent                       *
         * -------------                       *
         * Used by the dApp to setup variables *
         * that require functions calls        *
         ***************************************/
        initComponent() {
            /* We set Boosters ID hex */
            this.blueBoosterIDHex = stringToHex(this.blueBoosterID);
            this.redBoosterIDHex  = stringToHex(this.redBoosterID);
        },
        /*************************************************
         * getRedBoosterID                               *
         * ----------------                              *
         * Used by the dApp to return the red Booster ID *
         * @param (bool) hex : if true, return the       *
         *                     red BoosterID in hex      *
         **************************************************/
        getRedBoosterID(hex = false) {
            if (hex)
                return this.redBoosterIDHex;
            return this.redBoosterID;
        },
        /**************************************************
         * getBlueBoosterID                               *
         * ----------------                               *
         * Used by the dApp to return the blue Booster ID *
         * @param (bool) hex : if true, return the        *
         *                     blue BoosterID in hex      *
         **************************************************/
        getBlueBoosterID(hex = false) {
            if (hex)
                return this.blueBoosterIDHex;
            return this.blueBoosterID;
        },
        /***********************************************************
         * updateIsBoostersOwner                                   *
         * ---------------------                                   *
         * Used by the dApp to update the boosters owner variables *
         ***********************************************************/
        async updateSupply() {
            await axios.get(`${this.devApi}/nfts/${this.redBoosterID}/supply`)
            .then(res => {
                if(res?.data?.supply)
                    this.redBoosterSupply = res?.data?.supply
                else
                    this.redBoosterSupply = 0
            })
            .catch(err => {
                console.log(err)
                this.redBoosterSupply = 0
            })

            await axios.get(`${this.devApi}/nfts/${this.blueBoosterID}/supply`)
            .then(res => {
                if(res?.data?.supply)
                    this.blueBooserSupply = res?.data?.supply
                else
                    this.blueBooserSupply = 0
            })
            .catch(err => {
                console.log(err)
                this.blueBooserSupply = 0
            })

            await axios.get(`${this.devApi}/accounts/${this.SCAddress}/nfts?identifiers=${this.redBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.redBoosterOpened = res?.data[0]?.balance
                else
                    this.redBoosterOpened = 0
            })
            .catch(err => {
                console.log(err)
                this.redBoosterOpened = 0
            })

            await axios.get(`${this.devApi}/accounts/${this.SCAddress}/nfts?identifiers=${this.blueBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.blueBoosterOpened = res?.data[0]?.balance
                else
                    this.blueBoosterOpened = 0
            })
            .catch(err => {
                console.log(err)
                this.blueBoosterOpened = 0
            })
        },
        async updateIsBoostersOwner() {
            /* If the user isn't logged
               in, the function returns */
            if (this.$erd.logged === false)
                return
            /*     If the user's wallet address is
               still null (but the user is logged in),
                 or any boosterID isn't defined yet,
                    we just have to wait for it       */
            if(this.$erd.walletAddress === null || this.blueBoosterID === undefined )// || this.redBoosterID === undefined)
            {
                /* We call the function again after
                    50ms and the function returns   */
                await sleep(50)
                await this.updateIsBoostersOwner()
                return;
            }

            await axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/nfts?identifiers=${this.redBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.redBoosterCount = res?.data[0]?.balance
                else
                    this.redBoosterCount = 0
            })
            .catch(err => {
                console.log(err)
                this.redBoosterCount = 0
            })

            await axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/nfts?identifiers=${this.blueBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.blueBoosterCount = res?.data[0]?.balance      
                else 
                    this.blueBoosterCount = 0
            })
            .catch(err => {
                console.log(err)
                this.blueBoosterCount = 0
            })

            await axios.get('/cards_BON.json')
            .then(res => this.allCards = res.data)
            .catch(err => console.log(err))
            await axios.get('/cards_golden_BON.json')
            .then(res => this.allCards =[...res.data,...this.allCards])
            .catch(err => console.log(err))

        },
        /*****************************************************************
         * handleSubmit                                                  *
         * ------------                                                  *
         * Used by the dApp to handle a booster burning                  *
         * @param (str) boosterID : the booster ID of te booster to burn *
         *****************************************************************/
        async handleSubmit(boosterType) {
            try {
                let boosterID
                if(boosterType == 'BLUE') {
                    this.loaderBlue = true
                    boosterID = await this.getBlueBoosterID()
                } else {
                    this.loaderRed = true
                    boosterID = await this.getRedBoosterID()
                }
                /*   If the user is not connected,
                we redirect him to the login page */
                if (!this.$erd.logged) {
                    /* We redirect the user to the login
                        page and the function returns   */
                    this.$router.push('/login')
                    return;
                }
                /*   We get both booster collection
                ID and booster nonce from boosterID */
                var splittedBoosterID = boosterID?.split('-');
                var boosterCollectionID = stringToHex(splittedBoosterID?.slice(0, splittedBoosterID.length - 1).join('-'));
                var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

                /* We create an account object */
                let account = new Account(this.$erd.walletAddress);

                /* We wait for the account's
                nonce to be sync (got it :3) */
                await account.sync(this.$erd.providers.proxy)

                /* We create the data payload */
                var payload = new TransactionPayload(`ESDTNFTTransfer@${boosterCollectionID}@${boosterNonce}@01@${this.SCAddressHex}@${this.SCFunctionHex}`);

                /* We create the transaction */
                var transaction = new Transaction({
                    sender: this.$erd.walletAddress,
                    receiver: this.$erd.walletAddress,
                    gasLimit: new GasLimit(20000000),
                    value: Balance.egld(0),
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
                this.loaderBlue= false
                this.loaderRed= false
                console.log(err) }
        },
        /***************************************************************
         * pending                                                     *
         * -------                                                     *
         * Used by the dApp to wait for the transaction to be over,    *
         * get its result and redirect to the burn booster result page *
         * @param (str) hashHex : transaction hash in hex              *
         ***************************************************************/
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
                    await this.getObtainedCards(hashHex)
                    let waiting = 35
                    while(!this.cardsObtained.length && waiting !=0) {
                        await sleep(1000)
                        await this.getObtainedCards(hashHex)
                        waiting--
                    }
                    this.loaderBlue = false
                    this.loaderRed = false
                } 
            } catch (err) {
                console.log(err)
                this.loaderBlue= false
                this.loaderRed= false
                /* We need to wait a little bit more time, because the transaction
                   is not reachable yet so we call this function again 250ms later */
                await sleep(250)
                await this.pending(hashHex)
            }
        },
        /**********************************************************************
         * getObtainedCards                                                   *
         * ----------------                                                   *
         * Used by the dApp to get the cards obtained after opening a Booster *
         * @param (str) hashHex : transaction hash in hex                     *
         **********************************************************************/
        async getObtainedCards(hashHex) {
            /*   We try to access to the
            transaction through the API */
            try {
                /* We get the raw request result */
                var rawRequest = await axios.get(`${this.devApi}/transactions/${hashHex}`);
                /* We get the result's operations except the
                first one, which is the Booster transfer  */
                var operations = rawRequest?.data?.operations?.slice(1);
                this.cardsObtained = []
                /* For each NFTs transfer */
                for (const i in operations) {
                    if (operations[i].action === "transfer") {
                        /*   We add the NFT obtained
                        to the ~cardsObtained~ array */
                        this.cardsObtained.push(...this.allCards.filter(card=> card.identifier === operations[i].identifier.substr(-2)));
                    }
                }
                if(this.cardsObtained.length) {
                    this.loaderBlue = false
                    this.loaderRed = false
                    this.openModal()
                }
            } catch (error) {
                this.loaderBlue= false
                this.loaderRed= false
                console.log("Unable to call elrond API", error);
            }
        },
    },
    async beforeMount() {
        this.initComponent()
        this.updateSupply()
        this.updateIsBoostersOwner()

        let waiting = 5
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(1000)
            await this.updateIsBoostersOwner()
            waiting-=1
        }

        if(this.$route.query.status === 'success') {
            this.loaderBlue = true
            this.loaderRed = true
            await this.getObtainedCards(this.$route.query.txHash)
            let waiting = 10
            while(!this.cardsObtained.length && waiting !=0) {
                await sleep(1000)
                await this.getObtainedCards(this.$route.query.txHash)
                waiting--
            }
            this.loaderBlue = false
            this.loaderRed = false
        }
    },
}
</script>