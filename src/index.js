var btc = require('./btcsig')

let dummy = btc.createAccount();
console.log(dummy.address);
/*//console.log("balance = " + await checkBalance(dummy.address));
let signature = sign("olakeaseboloa", dummy)
console.log("signature = " + signature)
console.log("verify = " + verify("olakeaseboloa", dummy.address, signature))*/