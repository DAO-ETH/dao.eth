// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAOMembership is ERC721Upgradeable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint public totalSupply;
    address constant public daoAddress = 0x603a37FebE72d5540AE64Fb486a64C4C83938B3f;
//    address constant public daoAddress = 0x2c8a7fE54782D63a4a5B0F1677C0D65A33421F60;

    function initialize() initializer public {
        __ERC721_init("DAO Membership", "DAO");
    }

    mapping(uint => string) tokenURIs;

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      return tokenURIs[tokenId];
    }
 
    function create(address player, string memory mytokenURI) public returns (uint256){
        require(msg.sender == daoAddress, "DAO owners should only be able to mint");
 
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        tokenURIs[newItemId] = mytokenURI;
        _tokenIds.increment();
        totalSupply = _tokenIds.current();
        return newItemId;
    }

    function contractURI() public pure returns (string memory) {
        return "https://raw.githubusercontent.com/DAO-ETH/dao-metadata/main/contract-metadata.json";
    }
}