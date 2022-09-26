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
            <div class="marketPacks marketSection" v-if="bluePackCount || redPackCount">
                <p class="marketText ms-lg-4">AVAILABLE PACKS</p>
                <div class="packsContainer ms-lg-4 mt-3">
                    <div v-if="bluePackCount" class="marketBooster">
                        <img class="cntnt__mint-booster w-100" src="@/assets/images/BaseSetBoosterPack.png" />
                        <div v-if="bluePackCount > 1"  class="marketBoosterCounter">X{{ bluePackCount }}</div>
                    </div>
                    <div v-if="redPackCount" class="marketBooster">
                        <img class="cntnt__mint-booster w-100 ms-lg-2" src="@/assets/images/1stEditionBoosterPack.png" />
                        <div v-if="redPackCount > 1" class="marketBoosterCounter">X{{ redPackCount }}</div>
                    </div>
                </div>
            </div>
            <!-- staked packs -->
            <div v-if="stackedBluePack || stackedRedPack" class="marketStaked marketSection">
                <p class="marketText">STAKED PACKS</p>
                <div v-if="stackedBluePack">
                </div>
                <div v-if="stackedRedPack">
                </div>
            </div>
            <!-- unbounding -->
            <div v-if="unbounding" class="marketUnbound marketSection">
                <p class="marketText">UNBOUNDING</p>
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
    </main>
</template>

<style lang="scss">
    @import "./staking.scss";
</style>

<script>
import axios from "axios";

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


export default {
    name: 'Staking',
    data() {
        return {
            myStakedPacks: 0,
            bluePackCount: 0,
            redPackCount: 0,

            loader: false,

            stackedBluePack: 0,
            stackedRedPack: 0,
            shards: 0,
            shardsPerDay: 0,
            claimableShards: 0,
            globalPacksStacked: 0,

            unbounding: 0,

            devApi : "https://api.elrond.com",
            redBoosterID : "BONPACKS-f0b549-01",
            blueBoosterID : "BONPACKS-f0b549-02",
            scAddress: "erd1qqqqqqqqqqqqqpgqwvnz0w26mdjld0vgsvgvd70tkq0wpz4sfg8ssys4p4",
            shardsId: "SHARD-d1f010",
            
            // devApi : "https://devnet-api.elrond.com",
            // redBoosterID : "BONPACKS-1de767-01",
            // blueBoosterID : "BONPACKS-1de767-02",
            // scAddress: "erd1qqqqqqqqqqqqqpgqwvnz0w26mdjld0vgsvgvd70tkq0wpz4sfg8ssys4p4",
            // shardsId: "XSH-edf3d3",
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
                    this.shards = parseInt(res?.data?.balance/1000000)
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
                    "args"      : [await encodeStackedTokenKey(this.$erd.walletAddress, this.blueBoosterID, 0)]
                }
            );
            this.stackedBluePack = Buffer.from(rawStackedBluePacks.data.returnData[0], 'base64').toString("hex") || 0
        },
        async getStackedRedPack() {
            var rawStackedRedPacks = await axios.post(`${this.devApi}/query`,
                {
                    "scAddress" : this.scAddress,
                    "funcName"  : "getAddressStackedTokens",
                    "args"      : [await encodeStackedTokenKey(this.$erd.walletAddress, this.redBoosterID, 0)]
                }
            );
            this.stackedRedPack = Buffer.from(rawStackedRedPacks.data.returnData[0], 'base64').toString("hex") || 0
        },
        // UNBOUND TIME
        async getUnboundTimeBlue(){
            // var rawStackedRedPacks = await axios.post(`${this.devApi}/query`,
            //     {
            //         "scAddress" : this.scAddress,
            //         "funcName"  : "getTimestampRewardsLastClaim",
            //         "args"      : []
            //     }
            // );            
        },
        async getUnboundTimeRed(){
            // var rawStackedRedPacks = await axios.post(`${this.devApi}/query`,
            //     {
            //         "scAddress" : this.scAddress,
            //         "funcName"  : "getTimestampRewardsLastClaim",
            //         "args"      : []
            //     }
            // );            
        },
        // STAKE ACTION
        async stakeBluePack() {

        },
        async stakeRedPack() {
            
        },
        // UNSTAKE ACTION
        async unStakeBluePack() {
            
        },
        async unStakeRedPack() {
            
        },
        async getClaimableShards() {

        },
        async getGlobalStackedPacks() {

        },
        async calculateShardsPerDay() {
            this.shardsPerDay = this.stackedBluePack * 10 + this.stackedRedPack * 20
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
        }
    }
}
</script>
