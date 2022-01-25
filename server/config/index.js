const elrondNetwork = process.env.ELROND_NETWORK || 'devnet';
const envConfig = require("./" + elrondNetwork + '-config.json');

module.exports = envConfig;