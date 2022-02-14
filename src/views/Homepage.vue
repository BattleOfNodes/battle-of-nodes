<template>
    <main 
        class="cntnt__home"
        :class="{ loading: isLoading, loaded: isLoaded }">
        <HomeIntro></HomeIntro>
        <HomeCardsSet></HomeCardsSet>
        <HomeInfos></HomeInfos>
        <HomeRoadmap></HomeRoadmap>
        <HomeAllCards></HomeAllCards>
    </main>
</template>

<script>
import HomeIntro from '@/components/home/HomeIntro';
import HomeCardsSet from '@/components/home/HomeCardsSet';
import HomeInfos from '@/components/home/HomeInfos';
import HomeRoadmap from '@/components/home/HomeRoadmap';
import HomeAllCards from '@/components/home/HomeAllCards';

export default {
    name: 'Homepage',
    components: {
        HomeIntro,
        HomeCardsSet,
        HomeInfos,
        HomeRoadmap,
        HomeAllCards
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