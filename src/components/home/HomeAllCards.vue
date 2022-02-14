<template>
    <section class="cntnt__zone cntnt__allcards">
        <div class="cntnt__zone-inner">
            <h2 class="cntnt__allcards-title">Meet the 4 civilizations</h2>
            <div class="cntnt__allcards-filters">

            </div>
            <div 
                class="cntnt__allcards-cards"
                @mousedown="mouseDown($event)"
                @mouseup="mouseUp()"
                @mouseleave="mouseLeave()"
                @mousemove="mouseMove($event)">
                <div
                    class="cntnt__allcards-list"
                    :class="{ active: isMouseDown }"
                    ref="list">
                    <figure
                        class="cntnt__allcards-img"
                        v-for="(card, index) in cards"
                        :key="index">
                        <img :src="'./cards/' + card.img" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            cards: [],
            isMouseDown: false,
            startX: null,
            scrollLeft: null
        }
    },
    mounted () {
        axios.get('/cards_BON.json')
            .then( success => {
                this.cards = success.data;
            })
            .catch( error => {
                console.log('error : ', error)
            });
    },
    methods: {
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
        },
        mouseMove (e) {
            if (!this.isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.list.offsetLeft;
            const walk = (x - this.startX) * 3;
            this.$refs.list.scrollLeft = this.scrollLeft - walk;
        }
    }
}
</script>