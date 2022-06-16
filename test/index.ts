import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Mapping-Example", function () {
  it.only("#Test1 - Example-Library", async function () {

    // Deploy Library First
    const Lib1 = await ethers.getContractFactory("StringConcat");
    const lib1 = await Lib1.deploy();
    await lib1.deployed();

    const Lib2 = await ethers.getContractFactory("Uint");
    const lib2 = await Lib2.deploy();
    await lib2.deployed();


    // Deploy Contract and extend library in the contract factory.
    const Contract = await ethers.getContractFactory("LibExampleContract",{
      libraries:{
        StringConcat:lib1.address,
        Uint:lib2.address
      }
    });
    const contract = await Contract.deploy();
    await contract.deployed();

    // Assert
    let concatValue:string=await contract.stringConcat("Hello","World");
    console.log(`Concat Value => ${concatValue}`);

    // Test
    expect(concatValue).to.equal("HelloWorld");

    // Assert
    let getPow:number=await contract.getPow(2,2);
    console.log(getPow.toString());

    expect(getPow).to.equal(4);

  });

});