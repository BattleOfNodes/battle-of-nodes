<template>
    <main>
        <div class="cntnt-inner cntnt__intro-inner">
            <div class="cntnt__intro-power">
                Powered by
                <img src="@/assets/images/elrond-logo.png" alt="Elrond Logo" />
            </div>
            <h2 class="cntnt__intro-title">A trading card game project</h2>
            <p class="cntnt__intro-txt">Collect cards, Trade, Battle</p>
            <a href="https://deadrare.io/collection/BONPACKS-f0b549" target="_blank" class="cntnt-btn cntnt__intro-btn">Buy a pack now</a>
        </div>

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
import HomeCardsSet from '@/components/home/HomeCardsSet';
import HomeInfos from '@/components/home/HomeInfos';
import HomeRoadmap from '@/components/home/HomeRoadmap';
import HomeAllCards from '@/components/home/HomeAllCards';

export default {
    name: 'Homepage',
    components: {
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