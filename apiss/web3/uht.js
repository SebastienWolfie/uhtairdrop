import { BrowserProvider, Contract, formatUnits, parseEther } from 'ethers';
import { contractABI, contractAddress } from './constants/uht';
import { getIsConnected, getAddress, getProvider } from './walletconnect' 


async function getEthereumContract() {
  if (!getIsConnected()) return;

  const walletProvider = getProvider();
  const ethersProvider = new BrowserProvider(walletProvider);
  const signer = await ethersProvider.getSigner();
  const transactionContract = new Contract(contractAddress, contractABI, signer);

  return transactionContract;
}



async function getBalance() {
  return new Promise(async (resolve, reject) => {
    try {
      if (!getIsConnected()) reject({reason: 'Wallet not connected'});;
      const contract = await  getEthereumContract();
      let balance = await contract.balanceOf(getAddress());
      balance = parseInt(balance) / (10 ** 18)
      console.log('Balance:  ', balance)
      resolve(balance);
    } catch (error) {
      console.log(error);
      reject(error)
    }  
  })
}



async function buyToken(amount) {
  return new Promise(async (resolve, reject) => {
      try {
          if (!getIsConnected()) reject({reason: 'Wallet not connected'});
      
          const parsedAmount = parseEther(amount.toString())
    
          const contract = await  getEthereumContract();

          const options = {value: parsedAmount}
          const buyHash = await contract.buyTokens(options)
      
          console.log("Loading started");
          console.log("Loading - ", buyHash.hash);
          await buyHash.wait();
          console.log("Loading successful - ", buyHash.hash);

          resolve({hash: buyHash}) 
      } catch (error) {
          console.log(error);
          reject(error)
      }

  })
}


async function getAllTransactions() {
  return new Promise(async (resolve, reject) => {
    try {

      if (!getIsConnected()) reject({reason: 'Wallet not connected'});
      const contract = await getEthereumContract();
      const transactions = await contract.getAllTransactions();
  
      const structuredTransactions = transactions?.map(item => ({
        address: item.purchaser,
        dateCreated: new Date(parseInt(item.timestamp) * 1000).toLocaleString(),
        amount_eth: parseInt(item.value) / (10 ** 18),
        amount_token: parseInt(item.amount) / (10 ** 18),
        token_name: "EstateX"
      }))
      resolve(structuredTransactions);

    } catch (error) {
      console.log(error);
      resolve([])
    }
  })

} 





async function claimReferralToken() {
  return new Promise(async (resolve, reject) => {
    try {
      if (!getIsConnected()) reject({reason: 'Wallet not connected'});
      const contract = await getEthereumContract();
      const parsedAmount = parseEther('1000');
      await contract.claimReferralTokens(parsedAmount);
      resolve();
    } catch (error) {
      console.log(error);
      reject(error)
    } 
  })
}






export {
  getBalance,
  buyToken,
  getAllTransactions,
  claimReferralToken
}