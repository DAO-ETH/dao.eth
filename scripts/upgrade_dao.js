// scripts/upgrade_dao.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Dao = await ethers.getContractFactory('DAOMembership');
  console.log('Upgrading Contract...');

  // paste the V1 address into the ""
  const mydao = await upgrades.upgradeProxy("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", Dao);
  console.log('Contract upgraded');
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});