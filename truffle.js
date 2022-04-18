const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "cbc62d5af91146aeafc46617b71e4849";
const mnemonic = "exit baby admit practice own road muffin slot kind bless chase roof"
const localMnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster"

module.exports = {
  networks: {
    development: {
      //provider: () => new HDWalletProvider(localMnemonic, `http://127.0.0.1:8545/`, 0, 20),
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      //gas: 4500000,
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};