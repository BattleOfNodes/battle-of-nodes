<template>
    <figure v-if="!myColection"
        class="cntnt__allcards-img" 
        :class="{ active: isActive }"
        @click="activateCard()">
        <img 
            :src="'./cards/' + card.img" />
    </figure>
    <div v-else>
        <div>
            <figure
                class="cntnt__allcards-imgCollection" 
                :class="{ active: isActive }">
                <img 
                @click="activateCard()"
                :src="'./cards/' + card.img" />
                <div class="cntnt__allcards-cardBalance" v-if="card.balance>1"> 
                <p class="cntnt__allcards-cardBalanceText">{{ card.balance }}X</p>
            </div>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: false
        }
    },
    props: {
        card: {
            type: Object,
            default () {
                return {}
            }
        },
        cardIndex: {
            type: Number,
            default: 0
        },
        activeCard: {
            type: Number,
            default: null
        },
        myColection: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        activeCard ( activeCard ) {
            if ( activeCard !== this.cardIndex ) {
                this.isActive = false;
            }
        }
    },
    methods: {
        activateCard () {
            this.isActive = !this.isActive;
            this.$emit('activate-card', this.cardIndex);
        }
    }
}
</script>