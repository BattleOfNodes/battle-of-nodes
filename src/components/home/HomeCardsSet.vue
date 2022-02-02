<template>
    <section
        class="cardsset"
        :class="{ scrolling: scrolling }">
        <div class="cardsset__cards">
            <div class="cardsset__card cardsset__card-1">
                <div class="cardsset__card-card">
                    <img src="@/assets/images/cards/card1.jpg" />
                </div>
            </div>
            <div class="cardsset__card cardsset__card-2">
                <div class="cardsset__card-card">
                    <img src="@/assets/images/cards/card2.jpg" />
                </div>
            </div>
            <div class="cardsset__card cardsset__card-3">
                <div class="cardsset__card-card">
                    <img src="@/assets/images/cards/card3.jpg" />
                </div>
            </div>
            <div class="cardsset__card cardsset__card-4">
                <div class="cardsset__card-card">
                    <img src="@/assets/images/cards/card4.jpg" />
                </div>
            </div>
            <div class="cardsset__card cardsset__card-5">
                <div class="cardsset__card-card">
                    <img src="@/assets/images/cards/card5.jpg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            scrolling: true
        }
    },
    mounted () {
        // const cardsSet = document.querySelector('.cardsset');

        // setTimeout(() => {
        //     this.scrolledToElement(cardsSet);
        // }, 1000);

        // if ( this.scrolling ) {
        //     document.addEventListener('scroll', () => {
        //         this.scrolledToElement(cardsSet);
        //     });
        // }
    },
    methods: {
        // scrolledToElement (element) {
        //     if ( this.scrolling && window.innerHeight - element.getBoundingClientRect().top >= 180 ) {
        //         this.scrolling = false;
        //     }
        // }
    }
}
</script>