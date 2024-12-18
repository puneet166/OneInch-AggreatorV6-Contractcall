import fetch from 'node-fetch';
import Web3 from 'web3';
import yesno from 'yesno';
// require('dotenv').config(); // Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Configuration and constants
const chainId = 137; // Polygon Mainnet chain ID
const web3RpcUrl = "https://polygon-mainnet.infura.io/v3/" + process.env.INFURA_PROJECT_ID; // Secure RPC URL using INFURA
const walletAddress = process.env.WALLET_ADDRESS; // Use environment variable for wallet address
const privateKey = process.env.PRIVATE_KEY; // Use environment variable for private key
const oneInchAgg= "0x111111125421ca6dc452d289314280a0f8842a65"
const swapParams = {
  src: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // Token address of 1INCH
  dst: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // Token address of DAI
  amount: "100", // Amount to swap in smallest unit (1 token = 1 * 10^18)
  from: walletAddress,
  slippage: 1, // Maximum acceptable slippage percentage (e.g., 1%)
  disableEstimate: false, // Enable estimation of swap details
  allowPartialFill: false, // Allow partial fill of the swap order
  fee:1, // 1 mean 1% of SRC amount
  referrer:process.env.WALLET_ADDRESS // fees reciveraddress
};
const abi = [
    {
      "constant": false,
      "inputs": [
        { "name": "spender", "type": "address" },
        { "name": "value", "type": "uint256" }
      ],
      "name": "approve",
      "outputs": [
        { "name": "", "type": "bool" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const apiBaseUrl = `https://api.1inch.dev/swap/v6.0/${chainId}`;
const broadcastApiUrl = `https://api.1inch.dev/tx-gateway/v1.1/${chainId}/broadcast`;

// Initialize Web3 instance
const web3 = new Web3(web3RpcUrl);

// Headers for API requests
const headers = {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`, // Authorization using environment variable
    accept: 'application/json'
  }
};

// Utility function to construct API request URL
function apiRequestUrl(methodName, queryParams) {
  return `${apiBaseUrl}${methodName}?${new URLSearchParams(queryParams).toString()}`;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
// Function to post raw transaction to 1inch API and return transaction hash
async function broadCastRawTransaction(rawTransaction) {
    // await sleep(10000);
  try {
    const response = await fetch(broadcastApiUrl, {
      method: 'POST',
      body: JSON.stringify({ rawTransaction }),
      headers: { 'Content-Type': 'application/json' ,Authorization: `Bearer ${process.env.API_KEY}` }
    });

    const result = await response.json();
    // console.log("----------------------line no 53--------------",result);
    if (result.transactionHash) {
      return result.transactionHash;
    } else {
      throw new Error('Failed to broadcast transaction');
    }
  } catch (error) {
    console.error('Error broadcasting transaction:', error);
    throw error;
  }
}

// Function to sign and send a transaction, then return the transaction hash
async function signAndSendTransaction(transaction) {
  try {
    const nonce = await web3.eth.getTransactionCount(walletAddress);
    // transaction.nonce = nonce;
    // console.log("-------------------------line no 68---------------",transaction)

    const { rawTransaction } = await web3.eth.accounts.signTransaction(transaction, privateKey);

    return await broadCastRawTransaction(rawTransaction);
  } catch (error) {
    console.error('Error signing and sending transaction:', error);
    throw error;
  }
}

// Function to fetch the swap transaction details
async function buildTxForSwap(swapParams) {
  const url = apiRequestUrl('/swap', swapParams);

  try {
    const response = await fetch(url, headers);
    // console.log("---------------line n ",await response.json())
    const result = await response.json();
    // console.log("---------line no 89-----------------",result);
    if (result.tx) {
      return result.tx;
    } else {
      throw new Error('Failed to fetch swap transaction');
    }
  } catch (error) {
    console.error('Error fetching swap transaction:', error);
    throw error;
  }
}
async function buildTxForApproveTradeWithRouter(tokenAddress, amount) {
    const url = apiRequestUrl("/approve/transaction", amount ? { tokenAddress, amount } : { tokenAddress });
  
    const transaction = await fetch(url, headers).then((res) => res.json());
  
    const gasLimit = await web3.eth.estimateGas({
      ...transaction,
      from: walletAddress
    });
  
    return {
      ...transaction,
      gas: gasLimit
    };
  }
  
  const approveToken = async (amount) => {
    try {
      // Get the contract instance
      const contract = new web3.eth.Contract(abi, swapParams.src);
  
      // Prepare the transaction data
      const data = contract.methods.approve(oneInchAgg, amount).encodeABI();
  
      // Get the transaction count (nonce)
      const nonce = await web3.eth.getTransactionCount(walletAddress);
  
      // Create the transaction object
      const tx = {
        from: walletAddress,
        to: swapParams.src,
        gas: 200000, // Estimate or adjust based on token contract
        gasPrice: await web3.eth.getGasPrice(),
        nonce: nonce,
        data: data
      };
  
      // Sign the transaction
      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  
      // Send the transaction
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
      console.log("Transaction successful! Hash:", receipt.transactionHash);
    } catch (error) {
      console.error("Error while approving tokens:", error);
    }
  };
  
// Main function to initiate the swap process
async function initiateSwap() {
  try {
    // approveToken();
    const swapTransaction = await buildTxForSwap(swapParams);
    console.log('Transaction details for swap:', swapTransaction);

    // const swapTxHash = await signAndSendTransaction(swapTransaction);
    // console.log('Swap transaction hash:', swapTxHash);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// await approveToken(100);
// Execute the swap
initiateSwap();

