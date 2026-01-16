import { doc, collection, updateDoc, setDoc, getDoc, getDocs, query, where, and } from 'firebase/firestore';
import { db } from '../firebase';
import Date from '../utils/Date'

async function getClaimerNFT(address) {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uht_claimer_nft', address)
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
    })
}


async function update(address, item) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_claimer_nft', address);
            const result = await updateDoc(docRef, item)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
  }


async function create(address, item) {
    return new Promise(async(resolve, reject) => {
        try {
             const docRef = doc(db, 'uht_claimer_nft', address);
             await setDoc(docRef, item)
             resolve(item);
         } catch (error) {
             reject(error)
         }
    })
}


async function getAll() {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_claimer_nft');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
    })
}


export { getClaimerNFT,
         update,
         create,
         getAll
        }