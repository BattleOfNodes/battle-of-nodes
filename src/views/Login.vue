<template>
    <section class="cntnt__login">
        <div class="cntnt__login-inner">
            <h2 class="cntnt__login-title">Connect{{ $erd.logged ? 'ed' : '' }}</h2>
            <vue-erdjs-connect :qrcodeHandler="customQrcodeHandler"></vue-erdjs-connect>
        </div>
    </section>
</template>

<script>
import CustomQRCodeHandler from "../components/qrcode/CustomQRCodeHandler";

export default {
    name: 'Login',
    data() {
        return {
            customQrcodeHandler: new CustomQRCodeHandler()
        }
    }
};
</script>