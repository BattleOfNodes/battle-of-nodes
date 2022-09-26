<template>
    <nav class="menu menu__submenu">
        <ul class="menu__links menu__submenu-links">
            <!-- <li class="menu__item">
                <router-link class="menu__item-link" to="/staking">
                    <span>Staking</span>
                </router-link>
            </li> -->
            <li class="menu__item">
                <router-link class="menu__item-link" to="/download">
                    <span>Download</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/mint-page">
                    <span :class="{glow: isMint}">MINT</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/login">
                    <span v-if="this.$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
                    <span v-else>Connect</span>
                </router-link>
            </li>
            <li class="menu__item">
                <a href="https://twitter.com/BattleOfNodeNFT" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/twitterWhite.png" alt="Twitter Logo" /></a>
            </li>
            <li class="menu__item">
                <a href="https://discord.gg/6X2FN6BRKz" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/discordWhite.png" alt="Discord Logo" /></a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            isMint: localStorage.getItem("mintedPacks") || localStorage.getItem("mintedSkins") || 0,
        }
    }
};
</script>