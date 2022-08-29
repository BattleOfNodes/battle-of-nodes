const elrondNetwork = process.env.ELROND_NETWORK || 'mainnet';
const envConfig = require("./" + elrondNetwork + '-config.json');

module.exports = envConfig;