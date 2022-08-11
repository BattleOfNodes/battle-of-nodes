<template>
    <footer class="footer">
        <router-link to="/" @click.native="moveUp()">
            <img
                class="footer__img"
                alt="Battle of Nodes"
                src="@/assets/images/battle-of-nodes-logo.png">
        </router-link>
        <p>Copyright © 2022 Battle of Nodes LLC</p>
    </footer>
</template>

<script>
export default {
    methods:{
        moveUp(){
           window.scrollTo(0,0);
        }
    }
}
</script>