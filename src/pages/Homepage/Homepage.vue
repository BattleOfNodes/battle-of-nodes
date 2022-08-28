<template>
    <main>
        <div class="cntnt-inner cntnt__intro-inner">
            <div class="cntnt__intro-power">
                Powered by
                <img src="@/assets/images/elrond-logo.png" alt="Elrond Logo" />
            </div>
            <h2 class="cntnt__intro-title">A trading card game project</h2>
            <p class="cntnt__intro-txt">Collect cards, Trade, Battle</p>
            <router-link class="cntnt-btn" to="/download">
                <span>Play the DEMO</span>
            </router-link>
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

<style lang="scss">
    @import "./Homepage.scss";
</style>

<script>
import HomeCardsSet from './comps/HomeCardsSet';
import HomeInfos from './comps/HomeInfos';
import HomeRoadmap from './comps/HomeRoadmap';
import HomeAllCards from './comps/HomeAllCards';

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