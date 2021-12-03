// scripts/upgrade_dao.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Dao = await ethers.getContractFactory('DAOMembership');
  console.log('Upgrading Contract...');

  // paste the V1 address into the ""
  const mydao = await upgrades.upgradeProxy("0xA0F565a99aC2EB0FA1b8B9eb55Ef1a7Ab577d84C", Dao);
  console.log('Contract upgraded');
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});