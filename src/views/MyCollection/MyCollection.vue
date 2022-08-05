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
                                <HomeAllCardsCard
                                    :card="card"
                                    :active-card="activeCard"
                                    :card-index="index"
                                    @activate-card="activeCard = index"
                                    :key="index"
                                    :myColection="true"
                                    ></HomeAllCardsCard>
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

<script>
import axios from "axios";
import HomeAllCardsCard from '@/components/home/HomeAllCardsCard';
function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

export default {
    components: {
        HomeAllCardsCard
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
            activeCard: null,
            startX: null,
            scrollLeft: null
        }
    },
    methods: {
        async resetFilters() {
            this.filterCiv = 'CIVILIZATION'
            this.filterClass = 'TYPE'
            this.filterType = 'CARD TYPE'
            this.filterRarity = 'RARITY'
            this.filterEdition = 'EDITION'
            await this.getUserCards()
        },
        async addScrollEvent() {
            this.$refs.cards.addEventListener('scroll', () => {
                this.activeCard = null;
            });
        },
        async getJSONCards () {
            if(this.$erd.logged) { 
                await axios.get('/cards_BON.json')
                .then(res => this.normalCards = res.data)
                .catch(err => console.log(err))
                await axios.get('/cards_golden_BON.json')
                .then(res => this.goldenCards = res.data)
                .catch(err => console.log(err))

                this.allCards = [...this.goldenCards,...this.normalCards]
            }
        },
        async getUserCards () {
            if(this.$erd.logged) { 
                // await axios.get(`https://devnet-api.elrond.com/accounts/${this.$erd.walletAddress}/nfts?size=10000&collection=BONCARDS-d326b4`) // change identifier for live and api endpoint
                await axios.get(`https://api.elrond.com/accounts/${this.$erd.walletAddress}/nfts?size=10000&collection=BONCARDS-d1fb64`)
                .then(async res => {
                    this.usersCards = this.allCards.filter((card) => {
                        return res.data.find((userCard) => {
                            card.balance = userCard.balance
                            return card.identifier === userCard.identifier.substr(-2) })
                    })
                    this.setfilterCards()

                    await this.CivFilters(this.usersCards)
                    await this.TypeFilters(this.usersCards)
                    await this.CardTypeFilters(this.usersCards)
                    await this.RarityFilters(this.usersCards)
                    await this.EditionFilters(this.usersCards)
                })
                .catch(err => console.log(err))
            }
        },
        async setfilterCards() {
            let filteredCards = this.usersCards
            filteredCards = await this.filterByCivilization(filteredCards)
            filteredCards = await this.filterByType(filteredCards)
            filteredCards = await this.filterByCardType(filteredCards)
            filteredCards = await this.filterByRarity(filteredCards)
            filteredCards = await this.filterByEdition(filteredCards)
            this.filteredCard = filteredCards            
        },
        async filterByCivilization(filteredCards) {
            return filteredCards.filter( card => {
                return card.civilisation.toUpperCase() === this.filterCiv || this.filterCiv === 'CIVILIZATION' || this.filterCiv === 'ALL CIVILIZATIONS';
            });
        },
        async filterByType(filteredCards) {
            return filteredCards.filter( card => {
                return card.class.toUpperCase() === this.filterClass || this.filterClass === 'TYPE' || this.filterClass === 'ALL TYPES';
            });
        },
        async filterByCardType(filteredCards) {
            return filteredCards.filter( card => {
                return card.type.toUpperCase() === this.filterType || this.filterType === 'CARD TYPE' || this.filterType === 'ALL CARD TYPES';
            });
        },
        async filterByRarity(filteredCards) {
            return filteredCards.filter( card => {
                return card.rarity.toUpperCase() === this.filterRarity || this.filterRarity === 'RARITY' || this.filterRarity === 'ALL RARITYS';
            });
        },
        async filterByEdition(filteredCards) {
            return filteredCards.filter( card => {
                return card.edition.toUpperCase() === this.filterEdition || this.filterEdition === 'EDITION' || this.filterEdition === 'ALL EDITIONS';
            });
        },
        async CivFilters(filteredCards) {
            this.filterCivArray = [...new Set(filteredCards.map(card => card.civilisation.toUpperCase()))]
        },
        async TypeFilters(filteredCards) {
            this.filterClassArray = [...new Set(filteredCards.map(card => card.class.toUpperCase()))]
        },
        async CardTypeFilters(filteredCards) {
            this.filterTypeArray = [...new Set(filteredCards.map(card => card.type.toUpperCase()))]
        },
        async RarityFilters(filteredCards) {
            this.filterRarityArray = [...new Set(filteredCards.map(card => card.rarity.toUpperCase()))]
        },
        async EditionFilters(filteredCards) {
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
            this.activeCard = null;
        },
    },
    async beforeMount () {
        this.getJSONCards()
        this.getUserCards()

        let waiting = 4
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(500)
            await this.getJSONCards()
            await this.getUserCards()
            waiting-=1
        }
    }
}
</script>
