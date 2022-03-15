// Just a standard hardhat-deploy deployment definition file!


const func = async () => {
	const hre = require("hardhat");
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	
	const name = 'Aurora';
	const symbol = 'NEAR';

	await deploy('AuroraERC721', {
		from: deployer,
		args: [name, symbol],
		log: true,
	});
};

func.tags = ['AURORA'];
module.exports = func;
