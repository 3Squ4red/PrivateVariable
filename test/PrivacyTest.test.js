const { expect } = require("chai");

describe("PrivacyTest", () => {
  let privacyTest;
  before(async () => {
    const PrivacyTest = await ethers.getContractFactory("PrivacyTest");
    privacyTest = await PrivacyTest.deploy();
  });
  it("Should print the 'private' password", async () => {
    // Get the data at 0 slot
    let password = await ethers.provider.getStorageAt(privacyTest.address, 0);

    password = ethers.utils.parseBytes32String(password);

    expect(password).to.equal("p5ffwork90");
    console.log("Your 'private' password: ", password);
  });
});
