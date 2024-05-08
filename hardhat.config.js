require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// The RPC creds
const AMOY_API_KEY = vars.get("AMOY_API_KEY");

// Add your amoy account private key to the configuration variables
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: `https://rpc-amoy.polygon.technology/`,
      accounts: [PRIVATE_KEY],
      gasPrice: 10000000000, // 10 Gwei, adjust this value as necessary
    },
  },
  etherscan: {
    apiKey: {
      amoy: "364892..."
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com/"
        }
      }
    ]
  }
};
