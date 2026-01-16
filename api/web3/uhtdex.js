import { BrowserProvider, Contract, formatUnits, parseEther } from 'ethers';
import { contractABI, contractAddress } from './constants/pncaolympix';
// import { contractABI as tokenContractABI, contractAddress as tokenContractAddress } from './constants/uhtpresale';
import { contractABI as mintContractABI, contractAddress as mintContractAddress } from './constants/uhtmint';
import { contractABI as uhtContractABI, contractAddress as uhtContractAddress } from './constants/uht';
import { getIsConnected, getProvider } from './walletconnect' 


async function getEthereumContract(address, abi) {
  if (!getIsConnected()) return;

  const walletProvider = getProvider();
  const ethersProvider = new BrowserProvider(walletProvider);
  const signer = await ethersProvider.getSigner();
  const transactionContract = new Contract(address, abi, signer);

  return transactionContract;
}



async function transferTokens(amount) {
  return new Promise(async (resolve, reject) => {
      try {
        if (!getIsConnected()) {
          reject({reason: 'Wallet not connected'})
          return;
        };
        const tokenContract = await getEthereumContract(uhtContractAddress, uhtContractABI);

        const parsedAmount = parseEther(amount.toString())
        await tokenContract.transfer(uhtContractAddress, parsedAmount)
        resolve();
      } catch (error) {
        console.log(error);
        reject(error)
      }
  })
}



async function mintTokens(amount, gas) {
  return new Promise(async (resolve, reject) => {
      try {
        if (!getIsConnected()) {
          reject({reason: 'Wallet not connected'})
          return;
        };

        const tokenContract = await getEthereumContract(mintContractAddress, mintContractABI);

        console.log(tokenContract)
        const options = {value: parseEther(gas.toString())}
        const parsedTokens = parseEther(amount.toString())
        await tokenContract.mintTokens(parsedTokens, options)

        resolve();
      } catch (error) {
        console.log(error);
        reject(error)
      }
  })
}









export {
  mintTokens,
  transferTokens
}