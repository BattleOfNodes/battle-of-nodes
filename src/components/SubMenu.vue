<template>
    <nav class="menu menu__submenu">
        <ul class="menu__links menu__submenu-links">
            <li class="menu__item">
                <router-link class="menu__item-link" to="/login">
                    <span v-if="logged">{{ $erd.obfuscatedWalletAddress }}</span>
                    <span v-else>Connect</span>
                </router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__item-link" to="/my-collection">FAQ</router-link>
            </li>
            <li class="menu__item">
                <a href="" class="menu__item-link">Twitter</a>
            </li>
            <li class="menu__item">
                <a href="" class="menu__item-link">Discord</a>
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