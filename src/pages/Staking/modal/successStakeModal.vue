<template>
  <main class="h-100">
    <div class="modalBox justify-content-around">
      <p class="successModalStakeTitle">{{ actionType === 'stake' ? 'STAKED!' : 'UNSTAKED!'}}</p>
      <img v-if="packType === 'red'" class=" successModalImage modalImage mt-3 mb-3" src="@/assets/images/1stEditionBoosterPack.png" />
      <img v-else class="successModalImage modalImage mt-3 mb-3" src="@/assets/images/BaseSetBoosterPack.png" />
      <p class="successModalStakeText">YOU SUCCESFULLY {{ actionType === 'stake' ? 'STAKED' : 'UNSTAKED'}} {{ amount > 1 ? amount : 'A'}} {{ packType === 'red' ? '1ST EDITION' : 'BASIC' }} BOOSTER PACK</p>
      <button class="modalBtn modalBtnSuccess" v-on:click="$emit('close')">
        OK
      </button>
    </div>
  </main>
</template>

<style lang="scss">
    @import "./stakeModal.scss";
</style>

<script>
export default {
  name: "successStakeModal",
  props: {
    packType: {
      type: String,
      default: "blue"
    },
    amount: {
      type: Number,
      default: 1
    },
    actionType: {
      type: String,
      default: "stake"
    }
  }
}
</script>