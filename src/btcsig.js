var bitcoin = require('bitcoinjs-lib');
var bitcoinMessage = require('bitcoinjs-message')


const createAccount = function() {
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  return {
    "privateKey": keyPair.privateKey,
    "publicKey": keyPair.publicKey,
    "address": address,
    "compressed": keyPair.compressed
  }
}

const checkBalance = async function(addr) {
  const result = await dhttp({
    method: 'GET',
    url: 'https://blockchain.info/rawaddr/' + addr,
  });
  return result.final_balance;
}

const sign = function(message, account) {
  var signature = bitcoinMessage.sign(message, account.privateKey, account.compressed)
  return signature.toString('base64')
}

const verify = function(message, addr, signature) {
  return bitcoinMessage.verify(message, addr, signature)
}

module.exports = {
  createAccount,
  checkBalance,
  sign,
  verify
}