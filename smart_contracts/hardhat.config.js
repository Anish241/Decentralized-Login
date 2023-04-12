
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
   
    sepolia:{

      url: "https://eth-sepolia.g.alchemy.com/v2/xBvJj47Jimmn3mPIKMUPAPLM5Oqxle8x",
      accounts: ['fb73b019d829c6573354ce61aaf0244b9a677115d148a5692adf90241fa0ea61'],


    }
  }
};
