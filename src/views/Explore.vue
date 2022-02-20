<template>
    <main 
        class="cntnt__home"
        :class="{ loading: isLoading, loaded: isLoaded }">
        <ExploreIntro></ExploreIntro>
        <ExploreStory></ExploreStory>
        <!-- <template v-if="isDesktop">
            <img class="cntnt__home-card cntnt__home-card-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-6" src="@/assets/images/bg-card-red.png" />
        </template> -->
    </main>
</template>

<script>
import ExploreIntro from '@/components/explore/ExploreIntro';
import ExploreStory from '@/components/explore/ExploreStory';

export default {
    name: 'Explore',
    components: {
        ExploreIntro,
        ExploreStory
    },
    data () {
        return {
            isLoading: true,
            isLoaded: false,
            isDesktop: window.innerWidth >= 1024
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