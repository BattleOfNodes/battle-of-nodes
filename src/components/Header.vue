<template>
    <header class="header">
        <div class="header__inner">
            <h1 class="header__logo">
                <router-link
                    class="header__logo-link"
                    to="/">
                    <img
                        class="mt-3"
                        alt="Battle of Nodes - Logo"
                        src="@/assets/images/battle-of-nodes-logo.png">
                </router-link>
            </h1>
            <Menu></Menu>
            <SubMenu></SubMenu>
        </div>
    </header>
</template>

<script>
import Menu from "./Menu";
import SubMenu from "./SubMenu";
export default {
    components: {
        Menu,
        SubMenu
    },
};
</script>