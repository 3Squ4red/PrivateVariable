# Solidity state variables are public! Even the private ones

This is a hardhat project which shows how to get state variables from a contract *even the private ones!*

### Contract
The Solidity smart contract in this project is probably the shortest one that you might have ever seen

```Solidity
contract PrivacyTest {
    bytes32 private password = "p5ffwork90";
}
```
It contains just a private `bytes32` password which will be read by using the
```JS
ethers.provider.getStorageAt(<contract-address>, <slot-number>)
```

State variables in Solidity are stored in 32 bytes *slots* which starts from 0. Irrespective of the access modifier specified in the contract, every variable in a contract's storage can be read by using their *slot* number.

### Try it out
1. Clone the repo
```git clone https://github.com/bytecode-velocity/PrivateVariable.git```

2. Change directory
```cd PrivateVariable```

3. Install the dependencies
```npm i```

4. Test it out
```npx hardhat test```

5. Or deploy the contract locally
```npx hardhat run scripts/deploy.js```
