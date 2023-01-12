<template>
    <nav class="menu">
        <div class="menu__phone">
            <input type="checkbox" id="checkMenu" class="menu__phone-check" />
            <span class="menu__phone-span"></span>
            <span class="menu__phone-span"></span>
            <span class="menu__phone-span"></span>
            <ul class="menu__links">
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/">About the game</router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/explore">Explore</router-link>
                </li>
                <li class="menu__item">
                    <router-link ref="fetch" class="menu__item-link" to="/my-collection">My Collection</router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__item-link" to="/booster-pack">Booster Pack</router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/login">
                        <span v-if="this.$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
                        <span v-else>Connect</span>
                    </router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/mint-page">
                        <span :class="{glow: isMint}">MINT</span>
                    </router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/download">
                        <span>Download DEMO</span>
                    </router-link>
                </li>
                <li class="menu__item connectPhone">
                    <router-link class="menu__item-link" to="/staking">
                        <span>Staking</span>
                    </router-link>
                </li>
                <div class="d-flex mt-auto">
                    <ul class="d-flex flex-row">
                        <li class="menu__item connectPhone">
                            <a href="https://twitter.com/BattleOfNodeNFT" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/twitterWhite.png" alt="Twitter Logo" /></a>
                        </li>
                        <li class="menu__item connectPhone">
                            <a href="https://discord.gg/6X2FN6BRKz" target="_blank" class="menu__item-link"><img class="thumbnailLogo" src="@/assets/images/discordWhite.png" alt="Discord Logo" /></a>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return{
            isMint: localStorage.getItem("mintedPacks") || localStorage.getItem("mintedSkins") || 0,
        }
    },
    watch:{
        $route (){
            document.getElementById('checkMenu').checked = false
        }
    }
};
</script>
