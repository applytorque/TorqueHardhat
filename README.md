# Amoy Hardhat Project

## Overview

This repository is developed by applytorque.io which offers a robust foundation for developing, testing, and deploying smart contracts on the [Amoy Network](https://amoy.polygonscan.com/) using the Hardhat framework. Aimed at accelerating the setup process, this project simplifies the interaction with the blockchain using the well-documented [Hardhat](https://hardhat.org/docs) tools.

### What is Hardhat?

Hardhat is an Ethereum development environment designed for professionals. It facilitates managing, testing, and deploying smart contracts and brings the Ethereum toolchain closer to developers.

## Features

### Comprehensive Tooling

- **Basic Sample Contract**: Demonstrates a basic ERC20 token contract setup and deployment process.
- **Contract Testing**: Includes testing setups using Hardhat's native functionalities to ensure the contract operates correctly under various conditions.
- **Hardhat Ignition Module**: Implements the Hardhat Ignition module to optimize and streamline contract deployments.
- **Local and Network Deployment**: Detailed instructions for both local testing environments and actual deployment on the Amoy Network.

## Prerequisites

### System Requirements

Ensure your system meets the following requirements:

- [Node.js](https://nodejs.org/en/) (version 18.x or higher) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [npm](https://www.npmjs.com/) - A package manager for JavaScript, essential for managing project dependencies.

These applications are necessary to set up and run the Hardhat environment effectively.

## Installation

### Getting Started

Follow these steps to install all necessary dependencies and prepare your development environment:

```shell
npm install
```

## Development and Testing

```shell
npx hardhat help
npx hardhat test REPORT_GAS=true
npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Token.js
```

## Deployment Instructions

```shell
npx hardhat compile
npx hardhat verify --list-networks
npx hardhat vars setup # Set your wallet private key
npx hardhat vars set PRIVATE_KEY # Set your RPC credentials
npx hardhat vars set AMOY_API_KEY
npx hardhat ignition deploy ./ignition/modules/Token.js --network amoy
npx hardhat ignition status chain-80002
npx hardhat verify --network amoy CONTRACT_ADDRESS