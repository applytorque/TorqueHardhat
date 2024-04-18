require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// The RPC creds
const IPSPROTOCOL_API_KEY = vars.get("IPSPROTOCOL_API_KEY");

// Add your IPSChain account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// IPSPROTOCOL_PRIVATE_KEY
const IPSPROTOCOL_PRIVATE_KEY = vars.get("IPSPROTOCOL_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.24",
  networks: {
    ipschain: {
      url: `https://${IPSPROTOCOL_API_KEY}:${IPSPROTOCOL_API_KEY}@ipschain.ipsprotocol.xyz`,
      accounts: [IPSPROTOCOL_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      ipschain: "123456789"
    },
     customChains: [
      {
        network: "ipschain",
        chainId: 8337,
        urls: {
          apiURL: "https://explorer.ipsprotocol.xyz/api",
          browserURL: "https://explorer.ipsprotocol.xyz"
        }
      }
    ]
  }
};
