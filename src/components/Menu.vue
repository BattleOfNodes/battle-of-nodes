<template>
    <nav class="menu">
        <div class="menu__phone">
            <input type="checkbox" class="menu__phone-check" />
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
            </ul>
        </div>
    </nav>
</template>
