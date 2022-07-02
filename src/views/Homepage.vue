<template>
    <main 
        class="cntnt__home">
        <HomeIntro></HomeIntro>
        <HomeCardsSet></HomeCardsSet>
        <HomeInfos></HomeInfos>
        <HomeRoadmap></HomeRoadmap>
        <HomeAllCards></HomeAllCards>
        <template v-if="isDesktop">
            <img class="cntnt__bgCard cntnt__bgCard-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-6" src="@/assets/images/bg-card-red.png" />
        </template>
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
            isDesktop: window.innerWidth >= 1024
        }
    }
}
</script>