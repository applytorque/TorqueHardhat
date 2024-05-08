# Amoy Hardhat

This repository provides a comprehensive boilerplate for developing, testing, and deploying smart contracts on the [amoy network](https://ipsprotocol.xyz/) using Hardhat. It is designed to offer developers a quick start with [Hardhat](https://hardhat.org/docs) framework.

## Features

- **Basic Sample Contract**: Includes a simple smart contract to demonstrate the structure and deployment process.
- **Contract Testing**: Features tests for the smart contract to ensure correctness and reliability.
- **Hardhat Ignition Module**: Utilizes the Hardhat Ignition module for efficient contract deployment.
- **Local and Network Deployment**: Instructions for both local testing and deployment to the amoy.

## Prerequisites

Before you begin, ensure you have installed [Node.js](https://nodejs.org/en/) (version 18.x or higher) and [npm](https://www.npmjs.com/). This project requires these to run the Hardhat environment and other dependencies.

## Installation

1. Install the necessary dependencies:

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

### Deploying to the amoy

To deploy your contract to the amoy network, follow these steps:

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
npx hardhat vars set PRIVATE_KEY
# your rpc credentials
npx hardhat vars set AMOY_API_KEY
```

Deploy your contract to the amoy:

```shell
npx hardhat ignition deploy ./ignition/modules/Token.js --network amoy
```

Check deployment status:

```shell
npx hardhat ignition status chain-80002
```

Verify your contract on the network:

```shell
npx hardhat verify --network amoy <CONTRACT_ADDRESS>
```
#   T o r q u e H a r d h a t  
 