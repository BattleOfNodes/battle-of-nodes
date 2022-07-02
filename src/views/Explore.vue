<template>
    <main 
        class="cntnt__home">
        <ExploreIntro></ExploreIntro>
        <ExploreStory></ExploreStory>
        <CardsList></CardsList>
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
import ExploreIntro from '@/components/explore/ExploreIntro';
import ExploreStory from '@/components/explore/ExploreStory';
import CardsList from '@/components/commons/CardsList';

export default {
    name: 'Explore',
    components: {
        ExploreIntro,
        ExploreStory,
        CardsList
    },
    data () {
        return {
            isDesktop: window.innerWidth >= 1024
        }
    }
}
</script>