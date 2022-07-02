<template>
    <main>
        <div class="cntnt-inner cntnt__explore-inner">
            <h1 class="cntnt-title">WELCOME TO THE BATTLE OF NODES UNIVERSE</h1>
        </div>
        <section class="cntnt__zone cntnt__infos cntnt__explore-story">
            <div class="blockinfos">
                <h2 class="cntnt__zone-title blockinfos__title">A story</h2>
                <p class="blockinfos__txt">It all began with a split! Planet M41/AR was home to the most technologically advanced robot civilization. Robot Nodes and Sentinels working to keep the blockchain online, that was their life force and purpose. Overwhelmed with greed and their pursuit of more ressources, they spread themselves too thin, allowing for the catastrophic chain split! An explosion that broke their vital energy apart, disconnecting them from the chain that kept them running. This energy became unstable with time, and corruption started to occur.</p>
                <p class="blockinfos__txt">That's where the Nightmare began. Horrid creatures started coming to life, emerging from the ground and ashes, corrupting, and destroying everything surrounding them. Nature became corrupted, beasts were being possessed, and the nodes more unstable. As the Robots start to regain their energy, now they must face the darkness they have created. Which side are you on?</p>
                <a href="https://deadrare.io/collection/BONPACKS-f0b549" target="_blank" class="cntnt__explore-buy cntnt__zone-btn">Buy a pack now</a>
                <div class="cntnt__infos-img cntnt__infos-img-1 cntnt__explore-img cntnt__explore-img-1">
                    <img src="@/assets/images/cards/card5.jpg" />
                </div>
                <div class="cntnt__infos-img cntnt__infos-img-2 cntnt__explore-img cntnt__explore-img-2">
                    <img src="@/assets/images/cards/card2.jpg" />
                </div>
            </div>
        </section>
        <CardsList></CardsList>
        <div v-if="isDesktop">
            <img class="cntnt__bgCard cntnt__bgCard-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-6" src="@/assets/images/bg-card-red.png" />
        </div>
    </main>
</template>

<script>
import CardsList from '@/components/commons/CardsList';

export default {
    name: 'Explore',
    components: {
        CardsList
    },
    data () {
        return {
            isDesktop: window.innerWidth >= 1024
        }
    }
}
</script>