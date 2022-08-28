<template>
  <main class="fullsize">
    <div class="boxModal">
      <div
        class="cardModal"
        @click="(cardOne = 'flipped' )"
        v-bind:class="{ flipme: cardOne == 'flipped' }">
        <div class="cardModal__face cardModal__facePack--front">
          <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
        </div>
        <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[0].rarity" :style="'background-image: url(./cards/' + cards[0].img + ')'" />
        </div>
      </div>
      <div
          class="cardModal"
          @click="(cardTwo = 'flipped' )"
          v-bind:class="{ flipme: cardTwo == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[1].rarity" :style="'background-image: url(./cards/' + cards[1].img + ')'"/>
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardThree = 'flipped' )"
          v-bind:class="{ flipme: cardThree == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[2].rarity" :style="'background-image: url(./cards/' + cards[2].img + ')'" />
          </div>
      </div>
    </div>
    <div class="boxModal">
      <div
          class="cardModal"
          @click="(cardFour = 'flipped' )"
          v-bind:class="{ flipme: cardFour == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[3].rarity" :style="'background-image: url(./cards/' + cards[3].img + ')'" />
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardFive = 'flipped' )"
          v-bind:class="{ flipme: cardFive == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[4].rarity" :style="'background-image: url(./cards/' + cards[4].img + ')'" />
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardSix = 'flipped' )"
          v-bind:class="{ flipme: cardSix == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <div class="boosterImgPack" style="background-image: url(./card_Back.jpg)"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <div 
            class="boosterImgPack" :class="cards[5].rarity" :style="'background-image: url(./cards/' + cards[5].img + ')'" />
          </div>
      </div>
    </div>
    <div class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="$emit('close')">
      CLOSE
    </div>
  </main>
</template>

<style lang="scss">
    @import "./../BoosterPack.scss";
</style>

<script>
export default {
  name: "boosterModal",
  data() {
    return {
      cardOne: "start",
      cardTwo: "start",
      cardThree: "start",
      cardFour: "start",
      cardFive: "start",
      cardSix: "start",
    };
  },
  props: {
    cards: {
        type: Object,
        default () {
            return {}
        }
    },
  }
};
</script>

