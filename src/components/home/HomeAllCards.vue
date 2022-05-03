<template>
    <section class="cntnt__zone cntnt__allcards">
        <div class="cntnt__zone-inner">
            <h2 class="cntnt__zone-title cntnt__allcards-title">Meet the 4 civilizations</h2>
            <p class="cntnt__allcards-txt">Assemble powerful decks from 4 vibrant and fun civilizations. Discover new synergies and have fun collecting!</p>
            <div
                class="cntnt__allcards-filters"
                :class="{ active: cardFilter !== '' }">
                <div
                    class="cntnt__allcards-filter"
                    :class="{ active: cardFilter === 'Robot' }"
                    @click="setFilter('Robot')">Robots</div>
                <div
                    class="cntnt__allcards-filter"
                    :class="{ active: cardFilter === 'Nightmare' }"
                    @click="setFilter('Nightmare')">Nightmare</div>
                <div
                    class="cntnt__allcards-filter"
                    :class="{ active: cardFilter === 'Nature' }"
                    @click="setFilter('Nature')">Nature</div>
                <div
                    class="cntnt__allcards-filter"
                    :class="{ active: cardFilter === 'Beast' }"
                    @click="setFilter('Beast')">Beasts</div>
            </div>
            <div 
                class="cntnt__allcards-cards"
                @mousedown="mouseDown($event)"
                @mouseup="mouseUp()"
                @mouseleave="mouseLeave()"
                @mousemove="mouseMove($event)"
                ref="cards">
                <div
                    class="cntnt__allcards-list"
                    ref="list">
                    <template v-for="(card, index) in filteredCards">
                        <HomeAllCardsCard
                            :card="card"
                            :active-card="activeCard"
                            :card-index="index"
                            @activate-card="activeCard = index"
                            :key="index"
                            ></HomeAllCardsCard>
                    </template>
                    <p
                        class="cntnt__allcards-coming"
                        v-if="!filteredCards.length">Coming soon</p>
                </div>
            </div>
            <div class="cntnt__allcards-check">
                <router-link class="cntnt__zone-btn" @click.native="moveUp()" to="/explore">Explore</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import HomeAllCardsCard from '@/components/home/HomeAllCardsCard';

export default {
    components: {
        HomeAllCardsCard
    },
    data () {
        return {
            cards: [],
            cardFilter: '',
            isMouseDown: false,
            activeCard: null,
            startX: null,
            scrollLeft: null
        }
    },
    computed: {
        filteredCards () {
            return this.cards.filter( card => {
                return card.civilisation === this.cardFilter || this.cardFilter === '';
            });
        }
    },
    mounted () {
        axios.get('/cards_BON.json')
            .then( success => {
                this.cards = success.data;
                console.log(this.cards)
            })
            .catch( error => {
                console.log('error : ', error)
            });

        this.$refs.cards.addEventListener('scroll', () => {
            this.activeCard = null;
        });
    },
    methods: {
        setFilter (filter) { 
            this.cardFilter = this.cardFilter === filter ? '' : filter;
        },
        mouseDown (e) {
            this.isMouseDown = true;
            this.startX = e.pageX - this.$refs.list.offsetLeft;
            this.scrollLeft = this.$refs.list.scrollLeft;
        },
        mouseUp () {
            this.isMouseDown = false;
        },
        mouseLeave () {
            this.isMouseDown = false;
            this.activeCard = null;
        },
        mouseMove (e) {
            if (!this.isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.list.offsetLeft;
            const walk = (x - this.startX) * 3;
            this.$refs.list.scrollLeft = this.scrollLeft - walk;
            this.activeCard = null;
        },
        moveUp (){
           window.scrollTo(0,0);
        }
    }
}
</script>