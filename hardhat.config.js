require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.5",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_MUMBAI_URL,
      accounts: process.env.PRIVATE_KEY_MUMBAI
    },
  },
};
