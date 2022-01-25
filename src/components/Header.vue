<template>
    <header class="header">
        <div class="header__inner">
            <h1 class="header__logo">
                <router-link
                    class="header__logo-link"
                    to="/">
                    About the game
                </router-link>
            </h1>
            <Menu></Menu>
        </div>
    </header>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    Menu,
  },
};
</script>