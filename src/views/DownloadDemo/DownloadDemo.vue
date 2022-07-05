<template>
    <main>
        <h1 class="cntnt-title">Downloads</h1>
        <div class="cntnt-content">
            <a style="margin-bottom:5rem;transform: scale(1.3);" href="https://drive.google.com/uc?export=download&id=1Q0FCuZZ2kbjsg4Oa3E1sIke2Sf45sE7k" target="_blank" class="cntnt-btn cntnt__intro-btn">DOWNLOAD DEMO</a>
            <p class="cntnt-textTitle">Demo Event Prerequisites:</p>
            <p class="cntnt-text">⦁Windows </p>
            <p class="cntnt-text">⦁Own a Elrond Wallet</p>
            <p class="cntnt-text">⦁Own a&nbsp;<a style="color:white;" href="https://deadrare.io/collection/BONPACKS-f0b549?filters=%7B%22Edition%22%3A%5B%7B%22label%22%3A%221st+Edition%22%2C%22value%22%3A%221st+Edition%22%7D%5D%7D" target="_blank">1st edition booster pack</a></p>
            <p class="cntnt-textTitle" style="margin-top: 5rem;">HOW TO DOWNLOAD & PLAY</p>
            <p class="cntnt-textBold">STEP 1</p>
            <p class="cntnt-text">&emsp; Press the&nbsp;<a style="color:white;" href="https://drive.google.com/uc?export=download&id=1Q0FCuZZ2kbjsg4Oa3E1sIke2Sf45sE7k" target="_blank">DOWNLOAD DEMO link</a></p>
            <p class="cntnt-textBold">STEP 2</p>
            <p class="cntnt-text">&emsp; Extract the .RAR file on your computer</p>
            <p class="cntnt-textBold">STEP 3</p>
            <p class="cntnt-text">&emsp; Launch the “Battle of Nodes” game launcher</p>
            <p class="cntnt-textBold">STEP 4</p>
            <p class="cntnt-text">&emsp; Click on Login (You will be redirected to your main browser)</p>
            <img class="cntnt-border" alt="Battle of Nodes - Logo" src="@/assets/images/demoPreview.png">
            <p class="cntnt-textBold">STEP 5</p>
            <p class="cntnt-text">&emsp; Connect with your Elrond wallet using the 4 methods of connection (make sure to not click on the game window before successfully connecting, otherwise you will need to connect again)</p>
            <img class="cntnt-border" alt="Battle of Nodes - Logo" src="@/assets/images/loginPreview.png">
            <p class="cntnt-textBold">STEP 6</p>
            <p class="cntnt-text">&emsp; Start playing! Create a deck, search for an opponent, and duel!</p>
            <a style="margin-top:3rem;margin-bottom:3rem;transform: scale(1.3);" href="https://drive.google.com/uc?export=download&id=1Q0FCuZZ2kbjsg4Oa3E1sIke2Sf45sE7k" target="_blank" class="cntnt-btn cntnt__intro-btn">DOWNLOAD DEMO</a>
            <p class="cntnt-text">For more information or help feel free to join our <a style="color:white;" href="https://discord.gg/6X2FN6BRKz" target="_blank">discord</a> server! We will help and guide during the Demo event.</p>
            <a style="margin-top:7rem;margin-bottom:1rem;" href="https://forms.gle/Za9xmPmJFUJMRTFx8" target="_blank" class="cntnt-btn cntnt__intro-btn">Report a bug</a>
            <p class="cntnt-text" style="font-size:1.7rem;text-align:center;">Do not report any UI or visual effects bugs</p>
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
