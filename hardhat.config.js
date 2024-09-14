require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["28b3592cc1cc7e4e1ac9f059fc33373c24e77cfaa55d8a0b6f11184b4c7b9dbf"],
    },
  },
};
