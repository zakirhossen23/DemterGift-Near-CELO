require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x73e6d3c8393221a8424e4def114864f756763f3bb406c4c0869e5d104ff58d33`],
      chainId: 1313161555,
      gasPrice: 1000000000
    },
    local_aurora: {
      url: 'http://localhost:8545',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 3,
      live: true,
      gasPrice: 50000000000,
      gasMultiplier: 2,
    },
  },
	solidity: {
		compilers: [
			{
				version: '0.7.6',
			},
			{
				version: '0.8.6',
			},
		],
	},
	ovm: {
		solcVersion: '0.7.6+commit.3b061308', // Currently, we only support 0.5.16, 0.6.12, and 0.7.6 of the Solidity compiler
		optimizer: true,
		runs: 20,
	},
	namedAccounts: {
		deployer: 0,
	},
};

