import hre from "hardhat";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import * as fs from "fs";
import * as path from "path";
import { AllBasic } from "../../src/allbasic";

export async function fullSuiteFixture() {
  const [owner] = await hre.ethers.getSigners();

  // get contract factory with abi and bytecode
  const contract = await ethers.deployContract("AllBasic");
  const allBasic = new AllBasic(owner, contract.target);

  return {
    accounts: {
      owner,
    },
    suiteBasic: { allBasic },
  };
}