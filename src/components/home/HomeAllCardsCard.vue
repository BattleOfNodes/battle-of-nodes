<template>
    <figure
        class="cntnt__allcards-img"
        :class="{ active: isActive }"
        @click="activateCard()">
        <img 
            :src="'./cards/' + card.img" />
    </figure>
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