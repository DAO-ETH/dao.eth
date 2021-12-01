//require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

const { alchemyAPIKey, ethereumAccount, etherscanAPIKey} = require('./.secrets.json');
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    rinkeby: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    },
    polygon: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    }
  },
  etherscan: {
    apiKey: etherscanAPIKey
  }
};
