<template>
  <main class="modalMint-content">
      <p class="modalMint-message" v-if="remaining-packs === 0">You minted {{packs}} pack{{packs > 1 ? 's' : ''}}, you can mint no more.</p>
      <p class="modalMint-message mb-1" v-else>You minted {{packs}} pack{{packs > 1 ? 's' : ''}}, you can mint {{remaining-packs}} more.</p>
      <div class="cntnt__mint-buttons">
        <div class="cntnt-btn cntnt__booster-btn pointerCursor" v-on:click="$emit('close')">
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
     type: {
      type: String,
      default: "packs"
    }
  },
  methods: {
    moveUp() {
      window.scrollTo(0,0);
    }
  }
};
</script>

