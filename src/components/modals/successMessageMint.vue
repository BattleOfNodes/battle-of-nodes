<template>
  <main class="modalMint-content">
      <p class="modalMint-message">You minted {{packs}} packs, you can mint {{remaining-packs}} more.</p>
      <div class="cntnt__mint-buttons">
        <div class="cntnt__zone-btn cntnt__booster-btn pointerCursor" v-on:click="$emit('close')">
          CLOSE
        </div>
      </div>
  </main>
</template>


<script>
export default {
  name: "boosterModal",
  data() {
    return {};
  },
  props: {
    packs: {
      type: Number,
      default: 0
    },
    remaining: {
      type: Number,
      default: 0
    },
  },
  methods: {
    moveUp() {
      window.scrollTo(0,0);
    },
  }
};
</script>

