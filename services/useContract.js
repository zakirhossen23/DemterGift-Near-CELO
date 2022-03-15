import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import ERC721Singleton from './ERC721Singleton';
import ERC721SingletonCelo from './ERC721SingletonCelo';

export default function useContract(contractName) {
	const [contractInstance, setContractInstance] = useState({
		contract: null,
		contractCelo: null,
		signerAddress: null,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const signer = provider.getSigner();
				const contract = { contract: null,contractCelo: null, signerAddress: null };

				// Sets a single instance of a specific contract per application
				// Useful for switching across multiple contracts in a single application
				switch (contractName) {
					case 'ERC721':
						contract.contract = ERC721Singleton(signer);
						contract.contractCelo = ERC721SingletonCelo(signer);
						break;
					default:
						console.log('Invalid contract');
						break;
				}

				contract.signerAddress = await signer.getAddress();

				setContractInstance(contract);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

		window.ethereum.on('accountsChanged', fetchData);
		window.ethereum.on('chainChanged', fetchData);

		return () => {
			window.ethereum.removeListener('accountsChanged', fetchData);
			window.ethereum.removeListener('chainChanged', fetchData);
		};
	}, []);

	return contractInstance;
}
