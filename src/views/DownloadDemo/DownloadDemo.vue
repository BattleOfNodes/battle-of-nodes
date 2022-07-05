<template>
    <main>
        <h1 class="cntnt-title">Downloads</h1>
        <div class="cntnt-content">
            <p class="cntnt-textTitle">Demo Event Prerequisites:</p>
            <p class="cntnt-text">⦁Windows </p>
            <p class="cntnt-text">⦁Own a Elrond Wallet</p>
            <p class="cntnt-text">⦁Own a&nbsp;<a style="color:white;" href="https://www.google.com/" target="_blank">1st edition booster pack</a></p>
            <p class="cntnt-textTitle">HOW TO DOWNLOAD & PLAY</p>
            <p class="cntnt-textBold">STEP 1</p>
            <p class="cntnt-text">&emsp; Press the&nbsp;<a style="color:white;" href="https://www.google.com/" target="_blank">DOWNLOAD DEMO link</a></p>
            <p class="cntnt-textBold">STEP 2</p>
            <p class="cntnt-text">&emsp; Extract the .RAR file on your computer</p>
            <p class="cntnt-textBold">STEP 3</p>
            <p class="cntnt-text">&emsp; Launch the “Battle of Nodes” game launcher</p>
            <p class="cntnt-textBold">STEP 4</p>
            <p class="cntnt-text">&emsp; Click on Login (You will be redirected to your main browser)</p>
            <p class="cntnt-textBold">STEP 5</p>
            <p class="cntnt-text">&emsp; Connect with your Elrond wallet using the 4 methods of connection (make sure to not click on the game window before successfully connecting, otherwise you will need to connect again)</p>
            <p class="cntnt-textBold">STEP 6</p>
            <p class="cntnt-text">&emsp; Start playing! Create a deck, search for an opponent, and duel!</p>
            <a style="margin-top:1rem;margin-bottom:2rem;" href="https://deadrare.io/collection/BONPACKS-f0b549" target="_blank" class="cntnt-btn cntnt__intro-btn">DOWNLOAD DEMO</a>
            <p class="cntnt-text">For more information or help feel free to join our discord server! We will help and guide during the Demo event.</p>
        </div>
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
export default {
    name: 'Download',
    data () {
        return {
            isDesktop: window.innerWidth >= 1024
        }
    }
}
</script>
