<template>
    <div class="cntnt">
        <div class="cntnt__zone cntnt__login">
            <div class="cntnt__zone-inner cntnt__login-inner">
                <h2 class="cntnt__zone-title">Connect{{ $erd.logged ? 'ed' : '' }}</h2>
                <vue-erdjs-connect :qrcodeHandler="customQrcodeHandler"></vue-erdjs-connect>
            </div>
        </div>
    </div>
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