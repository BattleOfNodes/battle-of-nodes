<template>
    <main class="stake">
        <!-- menu section -->
        <div class="marketplaceMenu">
            <div class="marketMenuUpp">
                <div class="marketplaceLogo">
                    <router-link
                    to="/">
                    <img
                        alt="Battle of Nodes - Logo"
                        src="@/assets/images/battle-of-nodes-logo.png">
                    </router-link>
                </div>
                <ul class="marketMenu">
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>MY COLLECTION</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>EXPLORE</p>
                    </li>
                    <li class="marketMenuItem-selected">
                        <p>STAKING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>LENDING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>CRAFTING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>ACTIVITY</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>WALLET</p>
                    </li>
                </ul>
            </div>
            <div class="marketMenuDown">
                <ul class="marketMenu">
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>RESSOURCES</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>COMPANY</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>GAME</p>
                    </li>
                </ul>
                <div class="marketMenuLinks">
                    <a href="https://twitter.com/BattleOfNodeNFT" target="_blank"><img class="thumbnailMarket" src="@/assets/images/twitterWhite.png" alt="Twitter Logo" /></a>
                    <a href="https://discord.gg/6X2FN6BRKz" target="_blank"><img class="thumbnailMarket" src="@/assets/images/discordWhite.png" alt="Discord Logo" /></a>
                </div>
            </div>
        </div>
        <!-- content section -->
        <div class="marketplaceContent">
            <!-- login and shard section -->
            <div class="marketLoginShards">
                <router-link
                    to="/">
                    <p class="marketUpperText">Back to main site</p>
                </router-link>
                <div class="marketShards">
                    <p class="marketUpperText">{{ shards }}</p>
                    <img class="shardImage" src="@/assets/images/shard.png" alt="shard" />
                </div>
                <router-link class="marketLink" to="/login">
                    <span v-if="this.$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
                    <span v-else>Connect</span>
                </router-link>
            </div>
            <!-- info panels -->
            <div class="marketInfo marketSection">
                <!-- my stacked packs -->
                <div class="infoBlock">
                    <p class="marketSmallText mb-3">My staked packs</p>
                    <p class="marketText mb-3">{{ stackedBluePack + stackedRedPack }} PACKS</p>
                    <button class="marketButton" @click="unStakeAll()">UNSTAKE ALL</button>
                </div>
                <!-- shards earning -->
                <div class="infoBlock">
                    <p class="marketSmallText mb-3">Shards Earning</p>
                    <p class="marketText">{{ shardsPerDay }}/DAY</p>
                </div>
                <!-- claimable shards -->
                <div class="infoBlock">
                    <p class="marketSmallText mb-3">Claimable Shards</p>
                    <div class="claimableShards mb-3">
                        <p class="marketText ">{{ claimableShards }}</p>
                        <img class="shardImage w-50" src="@/assets/images/shard.png" alt="shard" />
                    </div>
                    <button class="marketButton" @click="claimAllShards()">CLAIM ALL</button>
                </div>
                <!-- global packs stacked -->
                <div class="infoBlock">
                    <p class="marketSmallText mb-3">Global Packs Stacked</p>
                    <p class="marketText">{{ globalPacksStacked }} PACKS</p>
                </div>
            </div>
            <!-- available packs -->
            <div class="marketPacks marketSection">
                <p class="marketText ms-lg-4">AVAILABLE PACKS</p>
                <div class="packsContainer ms-lg-4 mt-3">
                    <div v-if="redPackCount" class="marketBooster">
                        <img class="cntnt__mint-booster w-100 ms-lg-2" src="@/assets/images/1stEditionBoosterPack.png" />
                    <div v-if="redPackCount > 1" class="marketBoosterCounter">X{{ redPackCount }}</div>
                    </div>
                    <div v-if="bluePackCount" class="marketBooster">
                        <img class="cntnt__mint-booster w-100" src="@/assets/images/BaseSetBoosterPack.png" />
                        <div v-if="bluePackCount > 1"  class="marketBoosterCounter">X{{ bluePackCount }}</div>
                    </div>
                </div>
            </div>
            <!-- staked packs -->
            <div class="marketStaked marketSection">
                <p class="marketText ms-lg-4 mb-4">STAKED PACKS</p>
                <div class="stakedPacks">
                    <div class="marketStakedBox infoBlock d-flex flex-row justify-content-start">
                        <img style="width:50%;border-radius:25px;" src="@/assets/images/1stEditionBoosterPack.png" />
                        <div class="marketStakedBox-text w-100 align-items-baseline">
                            <div class="d-flex flex-column align-items-baseline">
                                <p class="marketSmallText">Packs stacked</p>
                                <p class="marketText mb-3">{{ stackedRedPack }} PACKS</p>
                            </div>
                            <div class="d-flex flex-column align-items-baseline">
                                <p class="marketSmallText">Shards earning</p>
                                <p class="marketText mb-3">{{ stackedRedPack * redEarning }}/DAY</p>
                            </div>
                            <div class="w-100 justify-content-around d-flex">
                                <button class="marketButton" @click="unStakeAll()">CLAIM</button>
                                <button class="marketButton" @click="unStakeAll()">UNSTAKE</button>
                            </div>
                        </div>
                    </div>
                    <div class="marketStakedBox infoBlock d-flex flex-row justify-content-start">
                        <img style="width:50%;border-radius:25px;" src="@/assets/images/BaseSetBoosterPack.png" />
                        <div class="marketStakedBox-text w-100 align-items-baseline">
                            <div class="d-flex flex-column align-items-baseline">
                                <p class="marketSmallText">Packs stacked</p>
                                <p class="marketText mb-3">{{ stackedBluePack }} PACKS</p>
                            </div>
                            <div class="d-flex flex-column align-items-baseline">
                                <p class="marketSmallText">Shards earning</p>
                                <p class="marketText mb-3">{{ stackedBluePack * blueEarning }}/DAY</p>
                            </div>

                            <div class="w-100 justify-content-around d-flex">
                                <button class="marketButton" @click="unStakeAll()">CLAIM</button>
                                <button class="marketButton" @click="unStakeAll()">UNSTAKE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- unbounding -->
            <div v-if="unbounding" class="marketUnbound marketSection">
                <p class="marketText ms-lg-4">UNBOUNDING</p>
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
        <button @click="claimRewards()">claimRewards</button>
    </main>
</template>

<style lang="scss">
    @import "./staking.scss";
</style>

<script>
import { Account, Address, Transaction, TransactionPayload, Balance, GasLimit } from "@elrondnetwork/erdjs";
import axios from "axios";
import {Buffer} from 'buffer';

function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

function stringToHex(string) {
    return string.split('').map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')) .join('');
}

function encode(data, bits) {
    while (data.length < bits) {
        data = '0' + data
    }
    return data
}

function encodeStackedTokenKey(address_bech32, token_identifier, token_nonce) 
{
    return address_bech32
        + encode(token_identifier.length.toString(16), 8)
        + stringToHex(token_identifier)
        + encode(token_nonce.toString(16), 16)
}

function formatXBits(str, x)
{
  while (str.length < x)
    str = "0" + str
   return str
}

// function formatU64(str) {
//   if (str.length % 2)
//   {
//     return '0'+str
//   }
//   return str
// }

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

function formatString(str, size) {
  let output = ""
  if (size)
  {
    output = formatXBits(Number(str.length).toString(16), 8)
  }
  return output + stringToHex(str)
}

function formatBigUint(str) {
  let output = formatXBits(Number(Math.ceil(str.length/2)).toString(16), 8) + (str.length%2)*"0" + str
  return output
}

function encodeEgldOrEsdtTokenPayment(collectionId, nonce, quantity) {
  return formatString(collectionId, true) + formatXBits(Number(nonce).toString(16), 16) + formatBigUint(Number(quantity).toString(16), 16)
}

function hexToStr(hex) {
    hex = hex.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function decodeTimestamp(datas) {
    return new Date(1000*parseInt(datas, 16))
}

function decodeString(datas) {
    return hexToStr(datas)
}

function decodeQueuePendingEgldOrEsdtTokenPayment(datas) {
    let date = decodeTimestamp(datas.substring(0, 16))
    datas = datas.substring(16, datas.length)
    
    let token_id_size = parseInt(datas.substring(0, 8), 16)
    datas = datas.substring(8, datas.length)
    
    let token_id = decodeString(datas.substring(0, 2*token_id_size))
    datas = datas.substring(2*token_id_size, datas.length)
    
    let token_nonce = parseInt(datas.substring(0, 16), 16)
    datas = datas.substring(16, datas.length)
    
    let amount = parseInt(datas.substring(8, datas.length), 16)

    return {
        "date": date,
        "token_id": token_id,
        "token_nonce": token_nonce,
        "amout": amount
    }
}

function findUnboundingTime(datas, token_id, token_nonce) {
    for (let i = 0; i < datas.length; i++) {
        let actualPendingToken = decodeQueuePendingEgldOrEsdtTokenPayment(Buffer.from(datas[i], 'base64').toString("hex"))
        if (actualPendingToken["token_id"] == token_id && actualPendingToken["token_nonce"] == token_nonce)
        {
            return parseInt((Date.now() - actualPendingToken["date"])/1000)
        }
    }
    return 0
}


export default {
    name: 'Staking',
    data() {
        return {
            myStakedPacks: 0,
            bluePackCount: 0,
            redPackCount: 0,

            loader: false,
            transaction: null,

            blueEarning: 10,
            redEarning: 20,

            stackedBluePack: 0,
            stackedRedPack: 0,
            shards: 0,
            shardsPerDay: 0,
            claimableShards: 0,
            globalPacksStacked: 0,

            claimingTimeSec: 432000,

            unbounding: 0,
            SCFunctionHex: "7374616B65",

            // collection: 'BONPACKS-f0b549',
            // devApi : "https://api.elrond.com",
            // redBoosterID : "BONPACKS-f0b549-01",
            // blueBoosterID : "BONPACKS-f0b549-02",
            // shardsId: "SHARD-d1f010",
            // scAddress: "",
            // SCAddressHex: "",

            collection: 'BONPACKS-1de767',
            devApi : "https://devnet-api.elrond.com",
            redBoosterID : "BONPACKS-1de767-01",
            blueBoosterID : "BONPACKS-1de767-02",
            scAddress: "erd1qqqqqqqqqqqqqpgq5uuxj062z7efyefdua7zrtedr0klu7p5fg8sa475jk",
            SCAddressHex: "00000000000000000500a738693f4a17b292652de77c21af2d1bedfe78344a0f",
            shardsId: "XDAO-d9b260",
        }
    },
    methods: {
        // PACKS AND SHARDS
        async getBlueCount() {
            await axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/nfts?identifiers=${this.blueBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.bluePackCount = res?.data[0]?.balance      
                else 
                    this.bluePackCount = 0
            })
            .catch(err => {
                console.log(err)
                this.bluePackCount = 0
            })
        },
        async getRedCount() {
            axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/nfts?identifiers=${this.redBoosterID}`)
            .then(res => {
                if(res?.data?.length)
                    this.redPackCount = res?.data[0]?.balance
                else
                    this.redPackCount = 0
            })
            .catch(err => {
                console.log(err)
                this.redPackCount = 0
            })
        },
        async getShardsCount() {
            axios.get(`${this.devApi}/accounts/${this.$erd.walletAddress}/tokens/${this.shardsId}`)
            .then(res => {
                if(res?.data)
                    // this.shards = parseInt(res?.data?.balance/1000000)
                    this.shards = parseInt(res?.data?.balance)
                else 
                    this.shards = 0
            })
            .catch(err => {
                console.log(err)
                this.shards = 0
            })
        },
        // STAKED PACKS
        async getStackedBluePacks() {
            var rawStackedBluePacks = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getAddressStackedTokens",
                    "args"      : [await encodeStackedTokenKey(this.$erd.walletAddress.valueHex, this.collection, 2)]
                }
            );
            this.stackedBluePack = parseInt(Buffer.from(rawStackedBluePacks.data.returnData[0], 'base64').toString("hex")) || 0
        },
        async getStackedRedPack() {
            var rawStackedRedPacks = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getAddressStackedTokens",
                    "args"      : [await encodeStackedTokenKey(this.$erd.walletAddress.valueHex, this.collection, 1)]
                }
            );
            this.stackedRedPack = parseInt(Buffer.from(rawStackedRedPacks.data.returnData[0], 'base64').toString("hex")) || 0
        },
        // UNBOUND TIME
        async getUnboundTimeBlue(){
            var rawtime = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getPendingTokensQueue",
                    "args"      : [this.$erd.walletAddress.valueHex]
                }
            );
            console.log('rawtime')
            console.log(await findUnboundingTime(rawtime.data.returnData,"BONPACKS-1de767",2))  
            console.log(await findUnboundingTime(rawtime.data.returnData,"BONPACKS-1de767",1))      
        },
        async getUnboundTimeRed(){
            var rawtime = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getPendingTokensQueue",
                    "args"      : [this.$erd.walletAddress.valueHex]
                }
            );
            console.log(findUnboundingTime(rawtime,"BONPACKS-1de767",1))          
        },
        // STAKE ACTION
        async stakeBluePack() {
            var splittedBoosterID = this.blueBoosterID?.split('-');
            var boosterCollectionID = stringToHex(splittedBoosterID?.slice(0, splittedBoosterID.length - 1).join('-'));
            var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

            let account = new Account(this.$erd.walletAddress);

            // /* We wait for the account's
            // nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`MultiESDTNFTTransfer@${this.SCAddressHex}@01@${boosterCollectionID}@${boosterNonce}@01@${this.SCFunctionHex}`);
            // /* We create the transaction */
            var transaction = new Transaction({
                sender: this.$erd.walletAddress,
                receiver:  this.$erd.walletAddress,
                gasLimit: new GasLimit(20000000),
                value: Balance.egld(0),
                data: payload,
            });

            //* We set the transaction's nonce
            // which is the account's one   */
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
                    await this.checkTranzaction(hashHex)
                    let waiting = 35
                    while(!this.transaction && waiting !=0) {
                        await sleep(1000)
                        await this.checkTranzaction(hashHex)
                        waiting--
                    }
                } 
            } catch (err) {
                console.log(err)
                /* We need to wait a little bit more time, because the transaction
                   is not reachable yet so we call this function again 250ms later */
                await sleep(250)
                await this.pending(hashHex)
            }
        },
        async checkTranzaction(hashHex) {
            /*   We try to access to the
            transaction through the API */
            try {
                /* We get the raw request result */
                var rawRequest = await axios.get(`${this.devApi}/transactions/${hashHex}`);
                /* We get the result's operations except the
                first one, which is the Booster transfer  */
                this.transaction = null
                /* For each NFTs transfer */
                if(rawRequest.data.status === 'success') {
                    this.transaction = true
                }
            } catch (error) {
                console.log("Unable to call elrond API", error);
            }
        },
        async stakeRedPack() {
            var splittedBoosterID = this.redBoosterID?.split('-');
            var boosterCollectionID = stringToHex(splittedBoosterID?.slice(0, splittedBoosterID.length - 1).join('-'));
            var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

            let account = new Account(this.$erd.walletAddress);

            /* We wait for the account's
            nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`MultiESDTNFTTransfer@${this.SCAddressHex}@01@${boosterCollectionID}@${boosterNonce}@01@${this.SCFunctionHex}`);

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
        },
        // UNSTAKE ACTION
        async unStakeBluePack() {
            var splittedBoosterID = this.blueBoosterID?.split('-');
            var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

            let account = new Account(this.$erd.walletAddress);

            let SCAddress = new Address(this.scAddress);

            /* We wait for the account's
            nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`unstake@${encodeEgldOrEsdtTokenPayment(this.collection, boosterNonce, 1)}`);

            /* We create the transaction */
            var transaction = new Transaction({
                sender: this.$erd.walletAddress,
                receiver: SCAddress,
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
        },
        async unStakeRedPack() {
            var splittedBoosterID = this.redBoosterID?.split('-');
            var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

            let account = new Account(this.$erd.walletAddress);

            let SCAddress = new Address(this.scAddress);

            /* We wait for the account's
            nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`unstake@${encodeEgldOrEsdtTokenPayment(this.collection, boosterNonce, 1)}`);

            /* We create the transaction */
            var transaction = new Transaction({
                sender: this.$erd.walletAddress,
                receiver: SCAddress,
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
        },
        async getClaimableShards() {
            var rawShards = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getClaimableRewards",
                    "args"      : [this.$erd.walletAddress.valueHex]
                }
            );
            this.claimableShards = parseInt(Buffer.from(rawShards.data.returnData[0], 'base64').toString("hex"), 16) || 0
        },
        async getGlobalStackedPacks() {
            var rawGlobalStacked = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getTotalStackedToken",
                    "args"      : [stringToHex(this.collection)]
                }
            );
            this.globalPacksStacked = parseInt(Buffer.from(rawGlobalStacked.data.returnData[0], 'base64').toString("hex")) || 0
        },
        async calculateShardsPerDay() {
            this.shardsPerDay = this.stackedBluePack * this.blueEarning + this.stackedRedPack * this.redEarning
        },
        // info panel button actions
        async unStakeAll() {
            this.loader = true
            await sleep(1000)
            this.loader = false
        },
        async claimAllShards() {
            this.loader = true
            await sleep(1000)
            this.loader = false
        },
        async claimAll() {
            let account = new Account(this.$erd.walletAddress);

            /* We wait for the account's
            nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`claimPending`);

            let SCAddress = new Address(this.scAddress);

            /* We create the transaction */
            var transaction = new Transaction({
                sender: this.$erd.walletAddress,
                receiver: SCAddress,
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
        },
        async claimRewards() {
            let account = new Account(this.$erd.walletAddress);

            /* We wait for the account's
            nonce to be sync (got it :3) */
            await account.sync(this.$erd.providers.proxy)

            /* We create the data payload */
            var payload = new TransactionPayload(`claimRewards`);

            let SCAddress = new Address(this.scAddress);

            /* We create the transaction */
            var transaction = new Transaction({
                sender: this.$erd.walletAddress,
                receiver: SCAddress,
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
        }
    },
    async beforeMount() {
        let waiting = 40
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(100)
            waiting-=1
        }
        if(this.$erd.logged === true) {
            await this.getBlueCount()
            await this.getRedCount()
            await this.getShardsCount()
            await this.getStackedBluePacks()
            await this.getStackedRedPack()
            await this.calculateShardsPerDay()
            await this.getUnboundTimeBlue()
            await this.getClaimableShards()
            await this.getGlobalStackedPacks()
        }
    }
}
</script>
