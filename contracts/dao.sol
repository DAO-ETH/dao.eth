// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DAOMembership is ERC721Upgradeable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

//    constructor() public ERC721Upgradeable("DAO Membership", "DAOM") {}
    function initialize() initializer public {
        __ERC721_init("DAO Membership", "DAOM");
    }

    mapping(uint => string) tokenURIs;

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      return tokenURIs[tokenId];
    }
 
    function create(address player, string memory mytokenURI)
        public
        returns (uint256)
    {
       _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        tokenURIs[newItemId] = mytokenURI;
        //_setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}