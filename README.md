# IPSChain Hardhat Boilerplate

This repository provides a comprehensive boilerplate for developing, testing, and deploying smart contracts on the [IPSChain network](https://ipsprotocol.xyz/) using Hardhat. It is designed to offer developers a quick start with [Hardhat](https://hardhat.org/docs) framework.

## Features

- **Basic Sample Contract**: Includes a simple smart contract to demonstrate the structure and deployment process.
- **Contract Testing**: Features tests for the smart contract to ensure correctness and reliability.
- **Hardhat Ignition Module**: Utilizes the Hardhat Ignition module for efficient contract deployment.
- **Local and Network Deployment**: Instructions for both local testing and deployment to the IPSChain.

## Prerequisites

Before you begin, ensure you have installed [Node.js](https://nodejs.org/en/) (version 18.x or higher) and [npm](https://www.npmjs.com/). This project requires these to run the Hardhat environment and other dependencies.

## Installation

1. Clone this repository to your local machine:

    ```shell
    git clone https://github.com/paulgg-code/ipschain-boilerplate.git
    ```

2. Navigate into the cloned directory:

    ```shell
    cd ipschain-boilerplate
    ```

3. Install the necessary dependencies:

    ```shell
    npm install
    ```

## Usage

### For Local Deployment

To start, you can run various Hardhat tasks to compile, test, and deploy your contracts locally:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Token.js
```

### Deploying to the IPSChain

To deploy your contract to the IPSChain network, follow these steps:

Install the Hardhat verify plugin:

```shell
npm install --save-dev @nomicfoundation/hardhat-verify
```
Compile your contracts:

```shell
npx hardhat compile
```
List available networks:

```shell
npx hardhat verify --list-networks
```

Setup environment variables (e.g., private keys) found in `hardhat.config.js`:
```shell
npx hardhat vars setup
# your wallet private key
npx hardhat vars set IPSPROTOCOL_PRIVATE_KEY
# your rpc credentials
npx hardhat vars set IPSPROTOCOL_API_KEY
```

Deploy your contract to the IPSChain:

```shell
npx hardhat ignition deploy ./ignition/modules/Token.js --network ipschain
```

Check deployment status:

```shell
npx hardhat ignition status chain-8337
```

Verify your contract on the network:

```shell
npx hardhat verify --network ipschain <CONTRACT_ADDRESS>
```


## IPSChain Layer 2
The IPSChain, an EVM-compatible Layer 2 solution, is pioneering in securing decentralized applications (dApps) against smart contract exploits. With its emphasis on hack prevention and minimal impact on transaction costs, IPSChain offers a unique framework that enables dApps to proactively protect their operations. Its decentralized approach ensures transparency, decentralization, and scalability while maintaining compatibility with existing Ethereum smart contracts. Through innovative mechanisms like the decentralized firewall and invariant-based approach, IPSChain is set to redefine Web3 security, offering a robust platform for deploying and managing secure dApps.

For more detailed information, please visit [IPSProtocol](https://ipsprotocol.xyz/).