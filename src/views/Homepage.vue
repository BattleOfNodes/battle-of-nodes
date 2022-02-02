<template>
    <main 
        class="cntnt__home"
        :class="{ loading: isLoading, loaded: isLoaded }">
        <HomeIntro></HomeIntro>
        <HomeCardsSet></HomeCardsSet>
    </main>
</template>

<script>
import HomeIntro from '@/components/home/HomeIntro';
import HomeCardsSet from '@/components/home/HomeCardsSet';

export default {
    name: 'Homepage',
    components: {
        HomeIntro,
        HomeCardsSet
    },
    data () {
        return {
            isLoading: true,
            isLoaded: false
        }
    },
    mounted () {
        setTimeout(() => {
            this.isLoading = false;

            setTimeout(() => {
                this.isLoaded = true;
            }, 2400)
        }, 1000);
    }
}
</script>