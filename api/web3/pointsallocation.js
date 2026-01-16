import { BrowserProvider, Contract, formatUnits, parseEther } from 'ethers';
import { contractABI, contractAddress } from './constants/pointsallocation';
import { getIsConnected, getProvider } from './walletconnect' 
import { updateUserHasClaimedPoints } from '../profile'


async function getEthereumContract() {
  if (!getIsConnected()) return;

  const walletProvider = getProvider();
  const ethersProvider = new BrowserProvider(walletProvider);
  const signer = await ethersProvider.getSigner();
  const transactionContract = new Contract(contractAddress, contractABI, signer);

  return transactionContract;
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
        amount_points: parseInt(item.points) / (10 ** 18),
        amount_eth: parseInt(item.amount) / (10 ** 18)
      }))
      resolve(structuredTransactions);

    } catch (error) {
      console.log(error);
      resolve([])
    }
  })

} 





async function claimFunds(points) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!getIsConnected()) reject({reason: 'Wallet not connected'});
      const contract = await getEthereumContract();
      await contract.claimFunds(points);
      await updateUserHasClaimedPoints();

      resolve();
    } catch (error) {
      console.log("Claim funds error")
      console.log(error);
      reject(error)
    }
      
  })
  
}






export {
  getAllTransactions,
  claimFunds
}