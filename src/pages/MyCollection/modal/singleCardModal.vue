<template>
  <div class="h-100" v-on:click="$emit('close')">
    <img v-on:click="$emit('close')" class="w-auto mh-100" :src="'./cards/' + card.img" />
  </div>
</template>

<script>
export default {
  name: "cardModal",
  props: {
    card: {
      type: Object,
      default () {
        return {}
      }
    }
  }
};
</script>

