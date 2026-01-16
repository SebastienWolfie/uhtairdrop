import { BrowserProvider, Contract, formatUnits, parseEther } from 'ethers';
import { contractABI, contractAddress } from './constants/uhtnftpresale';
import { list } from '../NftDatabase'
import { getIsConnected, getAddress, getProvider, getChainID } from './walletconnect';



async function getEthereumContract() {
  if (!getIsConnected()) return;

  const walletProvider = getProvider();
  const ethersProvider = new BrowserProvider(walletProvider);
  const signer = await ethersProvider.getSigner();
  const transactionContract = new Contract(contractAddress, contractABI, signer);

  return transactionContract;
}



async function mintNft(nftID, tokenId) {
  return new Promise(async (resolve, reject) => {

    try {
      if (!getIsConnected()) reject({reason: 'Wallet not connected'});
      const item = list.find(a => a.id === nftID);
      console.log('minntingNft', item)

      const contract = await getEthereumContract();
      const transactionHash = await contract.safeMintTokenID(item.uri, item.title, tokenId);

      
      console.log("Loading started");
      console.log("Loading - ", transactionHash.hash);
      await transactionHash.wait();
      console.log("Loading successful - ", transactionHash.hash);
      resolve(transactionHash.hash);
    } catch (error) {
      console.log(error);
      if (error?.info?.error?.code == -32000) {
          reject(new Error("Insufficient funds"))
      }
      else if (error?.info?.error?.code == 4001) {
          reject(new Error("Transaction rejected"))
      } else reject(new Error("Minting Error"))
      reject(error)
    }
      
  })
}


async function getAllTransactions() {
  return getOwnedNFTs();
} 



async function getOwnedNFTs() {
  return new Promise(async(resolve, reject) => {
    const ownerAddress = getAddress(); // Get connected wallet
    const chainID = getChainID();

    let alchemyURL = (chainID==1) ? 'https://eth-mainnet.g.alchemy.com/v2/Y8ew7o5gjdFDCO698pASWL1GgPGasOmj' : (chainID == 10143) ? 'https://monad-testnet.g.alchemy.com/v2/Y8ew7o5gjdFDCO698pASWL1GgPGasOmj' : 'https://eth-sepolia.g.alchemy.com/v2/Y8ew7o5gjdFDCO698pASWL1GgPGasOmj'


    let url = alchemyURL + '/getNFTs?owner=' + ownerAddress;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', chainID, data)

      let list = data.ownedNfts?.map(item => {
        return {
          address: ownerAddress,
          colletionAddress: item.contract.address,
          tokenId: BigInt(item.id.tokenId).toString(),
          dateCreated: new Date(item.timeLastUpdated).toJSON(),
          nft_name: item.metadata.name
        }
      })

      resolve(list || [])
    } catch (error) {
      console.error("Error fetching NFTs:", error);
      reject(error)
    }
  })
  
}



export {
  mintNft,
  getAllTransactions
}