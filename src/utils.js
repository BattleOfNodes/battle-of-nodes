

const sleep = (n) => { return new Promise(resolve=>setTimeout(resolve,n)); }

const hashArrayToHex = (hashArray) => {
    /* We convert the hash
        char array to hex  */
    var hashHex = ""
    for (const i in hashArray)
        hashHex = hashHex.concat(intToHex(hashArray[i], 10));
    return hashHex.substring(0, 64);
}

const intToHex = (string) => {
    let hex = Number(string).toString(16);
    if (hex.length % 2 !== 0) {
        hex = `0${hex}`;
    }
    return hex;
}

const stringToHex = (string) => {
    return string.split('').map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')) .join('');
}

module.exports = {
    sleep,
    hashArrayToHex,
    intToHex,
    stringToHex
}