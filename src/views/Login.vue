<template>
    <section class="cntnt__login">
        <div class="cntnt__login-inner">
            <h2 class="cntnt__login-title">Connect{{ $erd.logged ? 'ed' : '' }}</h2>
            <vue-erdjs-connect :qrcodeHandler="customQrcodeHandler"></vue-erdjs-connect>
        </div>
        <template v-if="isDesktop">
            <img class="cntnt__home-card cntnt__home-card-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__home-card cntnt__home-card-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__home-card cntnt__home-card-6" src="@/assets/images/bg-card-red.png" />
        </template>
    </section>
</template>

<script>
import CustomQRCodeHandler from "../components/qrcode/CustomQRCodeHandler";

export default {
    name: 'Login',
    data() {
        return {
            customQrcodeHandler: new CustomQRCodeHandler(),
            isDesktop: window.innerWidth >= 1024
        }
    }
};
</script>