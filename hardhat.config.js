
require("@nomicfoundation/hardhat-toolbox");
require("@makischristou/hardhat-plugin-web3");
require('@nomiclabs/hardhat-truffle5');

module.exports = {
  solidity: {
    version: "0.8.17",
  },
  networks: {
    vechain: {
      url: "http://127.0.0.1:8669",
      accounts: {
        mnemonic: "denial kitchen pet squirrel other broom bar gas better priority spoil cross",
        count: 10,
      },
      restful: true,
      gas: 10000000,
    },
  },
};