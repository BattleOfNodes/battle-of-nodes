<template>
    <section class="cntnt__zone cntnt__infos">
        <div class="blockinfos">
            <h2 class="cntnt__zone-title blockinfos__title">Battle <br>of nodes</h2>
            <p class="blockinfos__txt">Battle of Nodes is an original Trading Card Game powered by the Elrond Network. Assemble a deck of powerful creatures & spells and duel away in a competitive, fun & rewarding gameplay. Inspired by the genesis of the blockchain, you can collect cards from 4 different civilizations. In a war between machines and the underworld, you must choose which side to take.</p>
            <a :href="link" target="_blank" class="cntnt-btn">Buy a pack now</a>
            <div class="cntnt__infos-img cntnt__infos-img-1">
                <img src="@/assets/images/cards/card2.jpg" />
            </div>
            <div class="cntnt__infos-img cntnt__infos-img-2">
                <img src="@/assets/images/cards/card5.jpg" />
            </div>
        </div>
        <div class="cntnt__infos-infos">
            <h2 class="cntnt__infos-title">Blockchain implementation</h2>
            <p class="cntnt__infos-txt">The blockchain implementation allows players and collectors to own their cards. Each card, booster pack, tournament ticket, skin, or other game asset is fully owned by the players for the player. With the innovation of the Elrond Blockchain players will directly own their in-game items inside their wallets (not via a 3rd party Smart Contract).</p>
            <p class="cntnt__infos-txt">This gives the players full control over their experience, allowing them to send, trade, sell, swap, collect their NFTs as they please at an insignificant TX cost. We believe true ownership will be the path forward that will tie games, and the world economy, bringing new and uncharted frontiers.</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return{
            link: (localStorage.getItem("mintedPacks") || localStorage.getItem("mintedSkins")) ? '/mint-page' : 'https://deadrare.io/collection/BONPACKS-f0b549',
        }
    }
};
</script>