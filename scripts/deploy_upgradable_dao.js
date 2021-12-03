// scripts/deploy_upgradeable_dao.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Dao = await ethers.getContractFactory('DAOMembership');
  console.log('Deploying Contract...');
  const mydao = await upgrades.deployProxy(Dao,{initializer:"initialize"});
  await mydao.deployed();
  console.log('Proxy contract deployed to:', mydao.address);
  console.log('Search on https://rinkeby.etherscan.io/ for the address of the upgradable contract.');
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});