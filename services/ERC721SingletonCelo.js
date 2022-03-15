import { ethers } from 'ethers';

import erc721Celo from '../contractsCelo/deployments/celo_alfajores/CeloERC721.json';


export default function ERC721SingletonCelo(signer) {
	if (!ERC721SingletonCelo._instance) {
		ERC721SingletonCelo._instance = new ethers.Contract(
			erc721Celo.address,
			erc721Celo.abi,
			signer
		);
	}

	return ERC721SingletonCelo._instance;
}

