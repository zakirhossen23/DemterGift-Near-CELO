// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AuroraERC721 is ERC721  {

	uint256 private _tokenIds;
	uint256 private _bidIds;
	uint256 private _eventIds;
	mapping(uint256 => string) private _tokenURIs;
	mapping(uint256 => string) private _eventURIs;
	mapping(uint256 => string[2]) private AllTokensBids;
	mapping(uint256 => string[2]) private AllEventTokens;

constructor(string memory name, string memory symbol)
		ERC721(name, symbol)
	{}

   
	function claimToken(address _claimer,uint256 eventId,uint256 tokentId,
		string memory _tokenURI) public  returns (uint256) {
		_mint(_claimer, _tokenIds);
		_setTokenEvent(tokentId,eventId, _tokenURI);
		_tokenIds++;
		return _tokenIds;
	}
	function _setTokenEvent(
		uint256 TokenId,
		uint256 EventId,
		string memory _tokenURI
	) public virtual {
		AllEventTokens[TokenId] = [
			Strings.toString(EventId),
			string(_tokenURI)
		];
	}

	function createEvent( string memory _eventURI) public returns (uint256) {
		_setEventURI(_eventIds, _eventURI);
		_eventIds++;
		return _eventIds;
	}
	function _setEventURI(uint256 eventId, string memory _eventURI) public virtual {
		_eventURIs[eventId] = _eventURI;
	}

	function eventURI(uint256 eventId) public view returns (string memory) {
		return _eventURIs[eventId];
	}

	function latestTokenID() public view returns ( uint256) {
		return _tokenIds;
	}
	function createBid(uint256 tokenId, string memory _bidURI) public returns (uint256) {
		AllTokensBids[_bidIds] = [
			Strings.toString(tokenId),
			string(_bidURI)
		];
		_bidIds++;
		return _bidIds;
	}	
}


