<template>
    <main>
        <h1 class="cntnt-title">My collection</h1>
        <div v-if="!this.$erd.logged">
            <p class="cntnt__contentCollection">Connect your Elrond Wallet in order to see you collection</p>
            <router-link class="cntnt-btn" to="/login">Connect Wallet</router-link>
        </div>
        <div v-else>
            <div v-if="this.usersCards.length === 0 ">
                <p class="cntnt__contentCollection">You don't have any cards yet.</p>
                <router-link class="cntnt-btn" style="margin-right: 1rem;" to="/booster-pack">Open a pack</router-link>
                <a class="cntnt-btn" style="margin-left: 1rem;" href="https://deadrare.io/collection/BONCARDS-d1fb64">Buy some cards</a>
            </div>
            <div v-else>
                <div class="cntnt__collectionBlock">
                    <div class="cntnt__collectionBlock-filters">
                        <select class="cntnt__contentCollection-filter pointerCursor" v-model="filterCiv" @change="setfilterCards()">
                            <option value="CIVILIZATION" selected disabled hidden>CIVILIZATION</option>
                            <option v-for="filter in filterCivArray" :key="filter"  v-bind="filter">{{filter}}</option>
                        </select>
                        <select class="cntnt__contentCollection-filter pointerCursor" v-model="filterClass" @change="setfilterCards()">
                            <option value="TYPE" selected disabled hidden>TYPE</option>
                            <option v-for="filter in filterClassArray" :key="filter" v-bind="filter">{{filter}}</option>
                        </select>
                        <select class="cntnt__contentCollection-filter pointerCursor" v-model="filterType" @change="setfilterCards()">
                            <option value="CARD TYPE" selected disabled hidden>CARD TYPE</option>
                            <option v-for="filter in filterTypeArray" :key="filter" v-bind="filter">{{filter}}</option>
                        </select>
                        <select class="cntnt__contentCollection-filter pointerCursor" v-model="filterRarity" @change="setfilterCards()">
                            <option value="RARITY" selected disabled hidden>RARITY</option>
                            <option v-for="filter in filterRarityArray" :key="filter" v-bind="filter">{{filter}}</option>
                        </select>
                        <select class="cntnt__contentCollection-filter pointerCursor" v-model="filterEdition" @change="setfilterCards()">
                            <option value="EDITION" selected disabled hidden>EDITION</option>
                            <option v-for="filter in filterEditionArray" :key="filter" v-bind="filter">{{filter}}</option>
                        </select>
                        <div class="cntnt-btn cntnt__contentCollection-btn cntnt__booster-btn pointerCursor" v-on:click="resetFilters()">
                            RESET FILTERS
                        </div>
                    </div>
                    <div class="cntnt__collectionBlock-cards"
                        @mousedown="mouseDown($event)"
                        @mouseup="mouseUp()"
                        @mousemove="mouseMove($event)"
                        ref="cards">
                        <div class="box" ref="list">
                            <template v-for="(card, index) in filteredCard">
                                <CollectionCards
                                    :card="card"
                                    :key="index"
                                    />
                            </template>
                        </div>
                    </div>
                </div>
            </div>  
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
    @import "./MyCollection.scss";
</style>

<script>
import axios from "axios";
import CollectionCards from './comps/CollectionCards';
import { sleep } from "../../utils"

export default {
    components: {
        CollectionCards
    },
    name: 'MyCollection',
    data() {
        return {
            normalCards: [],
            goldenCards: [],
            allCards: [],
            usersCards: [],
            filterCiv: 'CIVILIZATION',
            filterClass: 'TYPE',
            filterType: 'CARD TYPE',
            filterRarity: 'RARITY',
            filterEdition: 'EDITION',
            filterCivArray: [],
            filterClassArray: [],
            filterTypeArray: [],
            filterRarityArray: [],
            filterEditionArray: [],
            filteredCard: [],
            isDesktop: window.innerWidth >= 1024,
            isMouseDown: false,
            startX: null,
            scrollLeft: null
        }
    },
    methods: {
        async resetFilters() {
            try {
                this.filterCiv = 'CIVILIZATION'
                this.filterClass = 'TYPE'
                this.filterType = 'CARD TYPE'
                this.filterRarity = 'RARITY'
                this.filterEdition = 'EDITION'
                await this.getUserCards()
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
        async getJSONCards () {
            this.normalCards = await axios.get('/cards_BON.json')
            this.goldenCards = await axios.get('/cards_golden_BON.json')

            this.allCards = [...this.goldenCards?.data,...this.normalCards?.data]
        },
        async getUserCards () {
            const res = await axios.get(`https://devnet-api.multiversx.com/accounts/${this.$erd.walletAddress}/nfts?size=10000&collection=BONCARDS-d326b4`) // change identifier for live and api endpoint
            // const res = await axios.get(`https://api.multiversx.com/accounts/${this.$erd.walletAddress}/nfts?size=10000&collection=BONCARDS-d1fb64`)

            this.usersCards = this.allCards.filter((card) => {
                return res.data.find((userCard) => {
                    card.balance = userCard.balance
                    return card.identifier === userCard.identifier.substr(-2) })
            })

            this.setfilterCards()

            this.CivFilters(this.usersCards)
            this.TypeFilters(this.usersCards)
            this.CardTypeFilters(this.usersCards)
            this.RarityFilters(this.usersCards)
            this.EditionFilters(this.usersCards)
        },
        setfilterCards() {
            try {
                let filteredCards = this.usersCards
                filteredCards = this.filterByCivilization(filteredCards)
                filteredCards = this.filterByType(filteredCards)
                filteredCards = this.filterByCardType(filteredCards)
                filteredCards = this.filterByRarity(filteredCards)
                filteredCards = this.filterByEdition(filteredCards)
                this.filteredCard = filteredCards       
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
        filterByCivilization(filteredCards) {
            return filteredCards.filter( card => {
                return card.civilisation.toUpperCase() === this.filterCiv || this.filterCiv === 'CIVILIZATION' || this.filterCiv === 'ALL CIVILIZATIONS';
            });
        },
        filterByType(filteredCards) {
            return filteredCards.filter( card => {
                return card.class.toUpperCase() === this.filterClass || this.filterClass === 'TYPE' || this.filterClass === 'ALL TYPES';
            });
        },
        filterByCardType(filteredCards) {
            return filteredCards.filter( card => {
                return card.type.toUpperCase() === this.filterType || this.filterType === 'CARD TYPE' || this.filterType === 'ALL CARD TYPES';
            });
        },
        filterByRarity(filteredCards) {
            return filteredCards.filter( card => {
                return card.rarity.toUpperCase() === this.filterRarity || this.filterRarity === 'RARITY' || this.filterRarity === 'ALL RARITYS';
            });
        },
        filterByEdition(filteredCards) {
            return filteredCards.filter( card => {
                return card.edition.toUpperCase() === this.filterEdition || this.filterEdition === 'EDITION' || this.filterEdition === 'ALL EDITIONS';
            });
        },
        CivFilters(filteredCards) {
            this.filterCivArray = [...new Set(filteredCards.map(card => card.civilisation.toUpperCase()))]
        },
        TypeFilters(filteredCards) {
            this.filterClassArray = [...new Set(filteredCards.map(card => card.class.toUpperCase()))]
        },
        CardTypeFilters(filteredCards) {
            this.filterTypeArray = [...new Set(filteredCards.map(card => card.type.toUpperCase()))]
        },
        RarityFilters(filteredCards) {
            this.filterRarityArray = [...new Set(filteredCards.map(card => card.rarity.toUpperCase()))]
        },
        EditionFilters(filteredCards) {
            this.filterEditionArray = [...new Set(filteredCards.map(card => card.edition.toUpperCase()))]
        },
        mouseDown (e) {
            this.isMouseDown = true;
            this.startX = e.pageX - this.$refs.list.offsetLeft;
            this.scrollLeft = this.$refs.list.scrollLeft;
        },
        mouseUp () {
            this.isMouseDown = false;
        },
        mouseMove (e) {
            if (!this.isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.list.offsetLeft;
            const walk = (x - this.startX) * 3;
            this.$refs.list.scrollLeft = this.scrollLeft - walk;
        },
    },
    async beforeMount () {
        try {
            let waiting = 80
            while(this.$erd.logged !== true && waiting !=0) {
                await sleep(50)
                waiting-=1
            }
            if(this.$erd.logged === true) {
                await this.getJSONCards()
                this.getUserCards()
            }
        } catch(e) {
            console.log(e)
            this.$toast.open({
                message: 'Something went wrong! Please try again later!',
                type: 'error',
                dismissible: true,
                position: 'top-right',
                duration: 5000,
            });
        }
    }
}
</script>
