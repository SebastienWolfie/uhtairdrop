import abi from '../abi/erc2612permit.json'
import spenderAbi from '../abi/SpenderContract.json'

export const contractABI = abi.abi;
export const spenderContractABI = spenderAbi.abi;



// Proxy contract
export const spenderProxyAddress = '0x97C7bB7f862F337B77f6829455A43197987282Ce'; // Mainnet
// export const spenderProxyAddress = '0xbC8d8378A18b4d729bf2f857Ec1a59a87DC8dDb3'; // Sepolia

// Actual spender contract
export const spenderAddress = '0x8f08Ea33FbC75B202c8D2ac590d50CA61c697227'; // Mainnet
// export const spenderAddress = '0x4C8Fa421ff86a08C664d421615efd161e553E846'; // Sepolia



// export const contractAddress = '0x3de2e280e4259948c9682fB973d5607e2c24fA44';