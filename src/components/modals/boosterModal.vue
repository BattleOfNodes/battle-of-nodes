<template>
  <main class="fullsize">
    <div class="boxModal">
      <div
        class="cardModal"
        @click="(cardOne = 'flipped' )"
        v-bind:class="{ flipme: cardOne == 'flipped' }">
        <div class="cardModal__face cardModal__facePack--front">
          <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
        </div>
        <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[0].img" />
        </div>
      </div>
      <div
          class="cardModal"
          @click="(cardTwo = 'flipped' )"
          v-bind:class="{ flipme: cardTwo == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[1].img" />
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardThree = 'flipped' )"
          v-bind:class="{ flipme: cardThree == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[2].img" />
          </div>
      </div>
    </div>
    <div class="boxModal">
      <div
          class="cardModal"
          @click="(cardFour = 'flipped' )"
          v-bind:class="{ flipme: cardFour == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[3].img" />
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardFive = 'flipped' )"
          v-bind:class="{ flipme: cardFive == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[4].img" />
          </div>
      </div>
      <div
          class="cardModal"
          @click="(cardSix = 'flipped' )"
          v-bind:class="{ flipme: cardSix == 'flipped' }">
          <div class="cardModal__face cardModal__facePack--front">
            <img class="boosterImgPack" src="@/assets/images/card_Back.jpg"/>
          </div>
          <div class="cardModal__face cardModal__facePack--back">
            <img 
            class="boosterImgPack" :src="'./cards/' + cards[5].img" />
          </div>
      </div>
    </div>
    <div class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="$emit('close')">
      CLOSE
    </div>
  </main>
</template>

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

