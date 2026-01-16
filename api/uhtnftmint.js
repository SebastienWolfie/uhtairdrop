import { doc, collection, updateDoc, setDoc, getDoc, getDocs, query, where, and } from 'firebase/firestore';
import { db } from '../firebase';
import Date from '../utils/Date'

async function getNftData(id) {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uht_nft_mint', id)
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
    })
}


async function getAllNftsForAddress(address) {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_nft_mint');
        const q = query(collectionRef, where("address", "==", address));

        const querySnapshot = await getDocs(q);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list || []);
    })
}

async function update(id, item) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_nft_mint', id);
            const result = await updateDoc(docRef, item)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
  }




async function create(item) {
    return new Promise(async(resolve, reject) => {
        try {
             const collectionRef = collection(db, 'uht_nft_mint');
             const docRef = doc(collectionRef)
             const id = docRef.id;
             item.id = id;
             item.dateCreated= new Date().toJSON();
 
             await setDoc(docRef, item)
             resolve(item);
         } catch (error) {
             reject(error)
         }
    })
}


async function getAll() {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_nft_mint');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
    })
}


export { getNftData,
         update,
         create,
         getAll,
         getAllNftsForAddress
        }