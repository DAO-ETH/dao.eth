# dao.eth smart contract

## TO DO
- [x] Set up ERC721 Upgradeable
- [x] Set up metadata files
- [x] Implement minting permissions for dao.eth
- [ ] Add burn function
- [ ] Test all functions
- [ ] Test upgrade
- [x] Update Readme

## Contract Addresses currently deployed
Upgradable DAO cotract:
https://rinkeby.etherscan.io/address/0xA0F565a99aC2EB0FA1b8B9eb55Ef1a7Ab577d84C

Proxy contract:
https://rinkeby.etherscan.io/address/0xE4ad7B2157d6f6ecC29f7E1Bf181EEc75c0d83Bb

## How to upgrade the contract
1. Add your modifications to contracts/dao.sol following [Upgrading Smart Contracts](https://docs.openzeppelin.com/learn/upgrading-smart-contracts)

2. Fill in the contract address in scripts/upgrade_dao.js 
Instructions on how to identify your contract address are in the "deploy" section of this readme. 

Then run the upgrade:
```
npx hardhat run --network rinkeby scripts/upgrade_dao.js
```

## How to deploy
1. Clone the repo
```
git clone https://github.com/DAO-ETH/dao.eth.git
```

2. Create .secrets.json file in the top level folder using the template below. Substitute with your own API Keys. 
```
{
    "alchemyAPIKey" : "https://eth-rinkeby.alchemyapi.io/v2/<rinkeby_private_key>",
    "ethereumAccount" : "<rinkeby_account_secret_key>",
    "etherscanAPIKey" : "<etherscan_api_key>"
}
```

3. Install packages
```
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
```

4. Deploy the contract
```
npx hardhat run --network rinkeby scripts/deploy_upgradable_dao.js
```
5. Verify the contract
Note that this is upgradable contract. The deployment will deploy two contracts - first our upgradable contract and second a proxy contract. 

To identify the address of our contract, one can search https://rinkeby.etherscan.io/ for the address that deployed the contract. Then in the transaction list find the transactions for the two newly created contracts - our upgradable contract as well as the proxy contract.

```
npx hardhat verify --network rinkeby <address_of_our_upgradable_contract>
```


