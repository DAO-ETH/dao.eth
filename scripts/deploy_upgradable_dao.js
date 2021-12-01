// scripts/deploy_upgradeable_dao.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Dao = await ethers.getContractFactory('DAOMembership');
  console.log('Deploying Contract...');
  const mydao = await upgrades.deployProxy(Dao,{initializer:"initialize"});
  await mydao.deployed();
  console.log('Contract deployed to:', mydao.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});