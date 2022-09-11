<template>
    <div class="stake">
        <!-- menu section -->
        <div class="marketplaceMenu">
            <div class="marketMenuUpp">
                <div class="marketplaceLogo">
                    <router-link
                    to="/">
                    <img
                        alt="Battle of Nodes - Logo"
                        src="@/assets/images/battle-of-nodes-logo.png">
                    </router-link>
                </div>
                <ul class="marketMenu">
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>MY COLLECTION</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>EXPLORE</p>
                    </li>
                    <li class="marketMenuItem-selected">
                        <p>STAKING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>LENDING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>CRAFTING</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>ACTIVITY</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <!-- comming soon -->
                        <p>WALLET</p>
                    </li>
                </ul>
            </div>
            <div class="marketMenuDown">
                <ul class="marketMenu">
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>RESSOURCES</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>COMPANY</p>
                    </li>
                    <li class="marketMenuItem noPointerCursor" data-toggle="tooltip" data-placement="top" title="Comming soon">
                        <p>GAME</p>
                    </li>
                </ul>
                <div class="marketMenuLinks">
                    <a href="https://twitter.com/BattleOfNodeNFT" target="_blank"><img class="thumbnailMarket" src="@/assets/images/twitterWhite.png" alt="Twitter Logo" /></a>
                    <a href="https://discord.gg/6X2FN6BRKz" target="_blank"><img class="thumbnailMarket" src="@/assets/images/discordWhite.png" alt="Discord Logo" /></a>
                </div>
            </div>
        </div>
        <!-- content section -->
        <div class="marketplaceContent">
            <!-- login and shard section -->
            <div class="marketLoginShards">
                <router-link
                    to="/">
                    <p class="marketLink">Back to main site</p>
                </router-link>
                <div class="marketShards">
                </div>
                <div class="marketLogin">
                </div>
            </div>
            <!-- info panels -->
            <div class="marketInfo">
            </div>
            <!-- available packs -->
            <div class="marketPacks">
            </div>
            <!-- staked packs -->
            <div class="marketStaked">
            </div>
            <!-- unbounding -->
            <div class="marketUnbound">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "./staking.scss";
</style>

<script>
function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

export default {
    name: 'Staking',
    data() {
        return {
            myStakedPacks: 0,
            bluePackCount: 0,
            redPackCount: 0,

            stackedBluePack: 0,
            stackedRedPack: 0,
            shards: 0,
        }
    },
    methods: {
        async getBlueCount() {
            
        },
        async getRedCount() {
            
        },
        async getShardsCount() {
            
        },
        async getStackedBluePacks() {
            
        },
        async getStackedRedPack() {
            
        }
    },
    async beforeMount() {
        let waiting = 40
        while(this.$erd.logged !== true && waiting !=0) {
            await sleep(100)
            waiting-=1
        }
        if(this.$erd.logged === true) {
            await this.getBlueCount()
            await this.getRedCount()
            await this.getShardsCount()
            await this.getStackedBluePacks()
            await this.getStackedRedPack()
        }
    }
}
</script>
