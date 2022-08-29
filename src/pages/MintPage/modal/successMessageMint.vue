<template>
  <main class="modalMint-content">
      <p class="modalMint-message" v-if="remaining-packs === 0">You minted {{packs}} pack{{packs > 1 ? 's' : ''}}, you can mint no more.</p>
      <p class="modalMint-message mb-1" v-else>You minted {{packs}} pack{{packs > 1 ? 's' : ''}}, you can mint {{remaining-packs}} more.</p>
      <div class="modalMint-buttons">
        <div class="cntnt-btn" v-on:click="$emit('close')">
          CLOSE
        </div>
      </div>
  </main>
</template>

<style lang="scss">
    @import "./successMessageMint.scss";
</style>

<script>
export default {
  name: "mintMessage",
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
  }
};
</script>

