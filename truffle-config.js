require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
console.log("cheeeeeecking eeeeenv => ", mnemonic)
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    polygonTestnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com/v1/${process.env.API_KEY}`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    dashboard: {
      port: 24012
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.13"
    }
  },
  db: {
    enabled: false
  }
};
