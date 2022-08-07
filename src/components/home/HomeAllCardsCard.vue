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
import singleCardModal from "@/components/modals/singleCardModal";

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
            if(this.myColection) {
                this.openModalCard()
            } else {
                this.isActive = !this.isActive;
                this.$emit('activate-card', this.cardIndex);
            }
        },
        openModalCard() {
            const options = { card: this.card};
            const style = {margin: 'auto', width: '90%', height: '90%'};
            this.$modal.show(singleCardModal, options, style);
        },
    }
}
</script>