<template>
    <figure
        class="cntnt__allcards-imgCollection">
        <img
        @click="activateCard()"
        :src="'./cards/' + card.img" />
        <div class="cntnt__allcards-cardBalance" v-if="card.balance>1"> 
            <p class="cntnt__allcards-cardBalanceText">{{ card.balance }}X</p>
        </div>
    </figure>
</template>

<script>
import singleCardModal from "./../modal/singleCardModal";

export default {
    props: {
        card: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        activateCard () {
            this.openModalCard()
        },
        openModalCard() {
            const options = { card: this.card};
            const style = {margin: 'auto', width: '90%', height: '90%'};
            this.$modal.show(singleCardModal, options, style);
        },
    }
}
</script>