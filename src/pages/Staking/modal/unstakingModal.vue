<template>
  <main class="h-100">
    <div class="modalBoxGray">
      <div class="modalBox">
        <img class="closeModal" v-on:click="$emit('close')" src="@/assets/images/modalXButton.png" />
        <p v-if="packType === 'red'" class="modalText">STAKE - 1ST EDITION PACK</p>
        <p v-else class="modalText">UNSTAKE - BASIC PACK</p>
        <img v-if="packType === 'red'" class="modalImage mt-3 mb-3" src="@/assets/images/1stEditionBoosterPack.png" />
        <img v-else class="modalImage mt-3 mb-3" src="@/assets/images/BaseSetBoosterPack.png" />
        <div class="amountSection d-flex justify-content-center">
          <input class="amountToStake" type="number" min="1" :max="amountLeft" v-model="numberOfPacks" @change="changeNumberOfPacks()" />
          <p class="amountOwned">x{{amountLeft}} packs staked</p>
        </div>
        <button  v-if="packType==='red'" class="modalBtn" @click="unStakeRedPack(numberOfPacks)">
          UNSTAKE NFT
        </button>
        <button  v-else class="modalBtn" @click="unStakeBluePack(numberOfPacks)">
          UNSTAKE NFT
        </button>
        <p class="redModalText">UNSTAKING PERIOD IS 72 HOURS</p>
      </div>
    </div>
    <div v-if="loader" class="blur-screen">
      <svg class="loader-box" viewBox="0 0 100 100">
          <defs>
              <filter id="shadow">
                  <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
                  flood-color="#fc6767"/>
              </filter>
          </defs>
          <circle class="loader-spinner" cx="50" cy="50" r="45"/>
      </svg>
    </div>
  </main>
</template>

<style lang="scss">
    @import "./stakeModal.scss";
</style>

<script>
import successStakeModal from "./successStakeModal";
import { Account, Address, Transaction, TransactionPayload, Balance, GasLimit } from "@elrondnetwork/erdjs";
import axios from "axios";

function sleep(n) { return new Promise(resolve=>setTimeout(resolve,n)); }

function hashArrayToHex(hashArray) {
    /* We convert the hash
        char array to hex  */
    var hashHex = ""
    for (const i in hashArray)
        hashHex = hashHex.concat(intToHex(hashArray[i], 10));
    return hashHex.substring(0, 64);
}

function intToHex(string) {
    let hex = Number(string).toString(16);
    if (hex.length % 2 !== 0) {
        hex = `0${hex}`;
    }
    return hex;
}

function formatString(str, size) {
  let output = ""
  if (size)
  {
    output = formatXBits(Number(str.length).toString(16), 8)
  }
  return output + stringToHex(str)
}

function formatBigUint(str) {
  let output = formatXBits(Number(Math.ceil(str.length/2)).toString(16), 8) + (str.length%2)*"0" + str
  return output
}

function encodeEgldOrEsdtTokenPayment(collectionId, nonce, quantity) {
  return formatString(collectionId, true) + formatXBits(Number(nonce).toString(16), 16) + formatBigUint(Number(quantity).toString(16), 16)
}

function formatXBits(str, x)
{
  while (str.length < x)
    str = "0" + str
   return str
}

function stringToHex(string) {
    return string.split('').map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')) .join('');
}

export default {
  name: "unstakingModal",
  props: {
    packType: {
      type: String,
      default: "01"
    },
    amountLeft: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      numberOfPacks: 1,
      loader: false,

      SCFunctionHex: "7374616B65",

      collection: 'BONPACKS-f0b549',
      devApi : "https://api.multiversx.com",
      redBoosterID : "BONPACKS-f0b549-01",
      blueBoosterID : "BONPACKS-f0b549-02",
      shardsId: "SHARD-d1f010",
      scAddress: "erd1qqqqqqqqqqqqqpgqpympqqtk8efg7xszlw3gu2z5fjj688dj58sque0kcr",
      SCAddressHex: "0000000000000000050009361001763e528f1a02fba28e28544ca5a39db2a1e0",

      // collection: 'BONPACKS-1de767',
      // devApi : "https://devnet-api.multiversx.com",
      // redBoosterID : "BONPACKS-1de767-01",
      // blueBoosterID : "BONPACKS-1de767-02",
      // scAddress: "erd1qqqqqqqqqqqqqpgq5uuxj062z7efyefdua7zrtedr0klu7p5fg8sa475jk",
      // SCAddressHex: "00000000000000000500a738693f4a17b292652de77c21af2d1bedfe78344a0f",
      // shardsId: "XDAO-d9b260",
    }
  },
  Components: {
    successStakeModal
  },
  methods:{
    changeNumberOfPacks() {
      if(parseInt(this.numberOfPacks) > parseInt(this.amountLeft)) {
        this.numberOfPacks = this.amountLeft
      }
      if(this.numberOfPacks <= 0) {
        this.numberOfPacks = 1
      }
    },
    openModalSuccess(packType, amount, actionType) {
      const options = { packType, amount, actionType };
      const style = {margin: 'auto', width: '70%', height: '70%'};
      this.$modal.show(successStakeModal, options, style);
    },
    addBooster() {
      if(this.numberOfPacks < this.amountLeft)
          this.numberOfPacks++
    },
    removeBooster() {
      if(this.numberOfPacks > 1)
          this.numberOfPacks--
    },
    async pending(hashHex) {
    /* We try to get the
        transaction status */
    try {
        /* we request the transaction
              status through the API   */
        var rawRequest = await axios.get(`${this.devApi}/transactions/${hashHex}?fields=status`);

        /* If the transaction is pending */
        if (rawRequest.data.status === "pending") {
            /* We call this function
                  again 250ms later   */
            await sleep(1000)
            await this.pending(hashHex)
        /* Otherwise */
        } else {
            /*   The transaction is over, we redirect
                  the user to the burn booster result
                page with the status and the transaction
                        hash as url parameters          */
            await sleep(1500)
            await this.checkTranzaction(hashHex)
            let waiting = 35
            while(!this.transaction && waiting !=0) {
                await sleep(3000)
                await this.checkTranzaction(hashHex)
                waiting--
            }
            this.loader = false
        } 
      } catch (err) {
        console.log(err)
        this.loader = false
        /* We need to wait a little bit more time, because the transaction
            is not reachable yet so we call this function again 250ms later */
        await sleep(250)
        await this.pending(hashHex)
      }
    },
    async checkTranzaction(hashHex) {
        /*   We try to access to the
        transaction through the API */
        try {
            /* We get the raw request result */
            var rawRequest = await axios.get(`${this.devApi}/transactions/${hashHex}`);
            /* We get the result's operations except the
            first one, which is the Booster transfer  */
            this.transaction = null
            /* For each NFTs transfer */
            if(rawRequest.data.status === 'success') {
                this.transaction = true
            }
        } catch (error) {
            console.log("Unable to call elrond API", error);
        }
    },
     // UNSTAKE ACTION
    async unStakeBluePack(number = 1) {
        this.loader = true
        var splittedBoosterID = this.blueBoosterID?.split('-');
        var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

        let account = new Account(this.$erd.walletAddress);

        let SCAddress = new Address(this.scAddress);

        /* We wait for the account's
        nonce to be sync (got it :3) */
        await account.sync(this.$erd.providers.proxy)

        /* We create the data payload */
        var payload = new TransactionPayload(`unstake@${encodeEgldOrEsdtTokenPayment(this.collection, boosterNonce, number)}`);

        /* We create the transaction */
        var transaction = new Transaction({
            sender: this.$erd.walletAddress,
            receiver: SCAddress,
            gasLimit: new GasLimit(20000000),
            value: Balance.egld(0),
            data: payload,
        });

        /* We set the transaction's nonce
            which is the account's one   */
        await transaction.setNonce(account?.nonce);
        /*  We send the transaction and
        get its transaction hash array */
        const hashArray = await this.$erd?.providers?.signAndSend(transaction).then((result) => {return result?.hash?.hash;});
        /* We convert the hash
            array to hex     */
        var hashHex = hashArrayToHex(hashArray);

        /* We're pending for the
        status to be defined  */
        await sleep(250)
        await this.pending(hashHex)
        this.loader = false
        this.openModalSuccess('blue', number, 'unstake')
        this.$emit('close')
    },
    async unStakeRedPack(number = 1) {
        this.loader = true
        var splittedBoosterID = this.redBoosterID?.split('-');
        var boosterNonce = splittedBoosterID[splittedBoosterID.length - 1];

        let account = new Account(this.$erd.walletAddress);

        let SCAddress = new Address(this.scAddress);

        /* We wait for the account's
        nonce to be sync (got it :3) */
        await account.sync(this.$erd.providers.proxy)

        /* We create the data payload */
        var payload = new TransactionPayload(`unstake@${encodeEgldOrEsdtTokenPayment(this.collection, boosterNonce, number)}`);

        /* We create the transaction */
        var transaction = new Transaction({
            sender: this.$erd.walletAddress,
            receiver: SCAddress,
            gasLimit: new GasLimit(20000000),
            value: Balance.egld(0),
            data: payload,
        });

        /* We set the transaction's nonce
            which is the account's one   */
        await transaction.setNonce(account?.nonce);
        /*  We send the transaction and
        get its transaction hash array */
        const hashArray = await this.$erd?.providers?.signAndSend(transaction).then((result) => {return result?.hash?.hash;});
        /* We convert the hash
            array to hex     */
        var hashHex = hashArrayToHex(hashArray);

        /* We're pending for the
        status to be defined  */
        await sleep(250)
        await this.pending(hashHex)
        this.loader = false
        this.openModalSuccess('blue', number, 'unstake')
        this.$emit('close')
    }
  }
}
</script>

