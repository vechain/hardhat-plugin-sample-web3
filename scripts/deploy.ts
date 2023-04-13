const CONTRACT_NAME = "Storage"; // Declare a global variable for the contract name
const Storage = artifacts.require(CONTRACT_NAME);
const { expect } = require('chai');


async function main() {
  const storage = await Storage.new();

  console.log(
    `${CONTRACT_NAME} deployed to ${storage.address}` // Use the global variable
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
