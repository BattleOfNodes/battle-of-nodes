<template>
    <main>
        <h1 class="cntnt-title">Connect{{ $erd.logged ? 'ed' : '' }}</h1>
        <vue-erdjs-connect :qrcodeHandler="customQrcodeHandler"></vue-erdjs-connect>
        <template v-if="isDesktop">
            <img class="cntnt__bgCard cntnt__bgCard-1" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-2" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-3" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-4" src="@/assets/images/bg-card-red.png" />
            <img class="cntnt__bgCard cntnt__bgCard-5" src="@/assets/images/bg-card-blue.png" />
            <img class="cntnt__bgCard cntnt__bgCard-6" src="@/assets/images/bg-card-red.png" />
        </template>
    </main>
</template>

<style lang="scss">
    @import "./Login.scss";
</style>

<script>
import CustomQRCodeHandler from "@/components/qrcode/CustomQRCodeHandler";
import axios from "axios";

export default {
    name: 'Login',
    data() {
        return {
            customQrcodeHandler: new CustomQRCodeHandler(),
            isDesktop: window.innerWidth >= 1024
        }
    },
    methods: {
        async sendUserToServer() {
            if(this.$erd.logged && this.$erd?.walletAddress && (this.$route?.query?.game || this.$route?.query?.address)) {
                const token = Math.random().toString(32).slice(2);
                let id
                await axios.post(`${window.location.origin}/api/v1/sendToken/${this.$erd.walletAddress}/${token}`)
                .then(res =>{
                    id = res.data.id
                })
                .catch(err => {
                    console.log(err)
                })

                // game call
                await axios.post(`http://localhost:3000/callback/${id}/${token}`)
                .catch(err => {
                    console.log(err)
                })
            }
        }
    },
    async updated(){
        await this.sendUserToServer()
    }
};
</script>