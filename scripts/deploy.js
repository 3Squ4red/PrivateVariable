async function main() {
  const PrivacyTest = await ethers.getContractFactory("PrivacyTest");
  const privacyTest = await PrivacyTest.deploy();
  await privacyTest.deployed();

  console.log(`PrivacyTest deployed at ${privacyTest.address}`);

  // Getting the password
  let password = await ethers.provider.getStorageAt(privacyTest.address, 0);
  password = ethers.utils.parseBytes32String(password);

  console.log("Your 'private' password: ", password);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
