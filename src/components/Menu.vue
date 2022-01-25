<template>
    <nav class="menu">
        <ul class="menu__links">
            <li class="menu__item">
                <router-link class="menu__item-link" to="/explore">Explore</router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/my-collection">My Collection</router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/login">
                    <span v-if="logged">{{ $erd.obfuscatedWalletAddress }}</span>
                    <span v-else>Connect</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/booster-pack">Booster Pack</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        logged() {
            return this.$erd.logged;
        }
    },
};
</script>