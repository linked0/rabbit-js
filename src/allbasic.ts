import {
  Contract, Signer
} from "ethers";
import * as fs from "fs";
import * as path from "path";
import hre from "hardhat";

import type {
  AllBasicContract,
} from "./types";
import { AllBasicInterface } from "./types";

import {
  abi as AllBasicABI,
} from "../artifacts/web/ex/contracts/AllBasic.sol/AllBasic.json";

export class AllBasic {
  public contract: AllBasicContract;

  public constructor(signer: Signer, address: string) {
    console.log(address)
    this.contract = new Contract(address, AllBasicABI, signer) as unknown as AllBasicContract;
  }

  public async getValue(): Promise<bigint> {
    const value = await this.contract.getValue();
    return value;
  }
}