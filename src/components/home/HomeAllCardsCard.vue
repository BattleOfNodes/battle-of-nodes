<template>
    <figure
        class="cntnt__allcards-img"
        :class="{ active: isActive }"
        @click="isActive = !isActive">
        <img 
            :src="'./cards/' + card.img" />
    </figure>
</template>

<script>
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
        isMouseDown: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        isMouseDown () {
            this.isActive = false;
        }
    }
}
</script>