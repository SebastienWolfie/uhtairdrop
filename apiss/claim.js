import Date from '../utils/Date';
import { doc, collection, getDocs, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function getAll() {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_claim_address');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
    })
}


async function getClaimedAddress(id) {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uht_claim_address', id)
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
    })
}


async function create(address) {
    return new Promise(async(resolve, reject) => {
        try {
             const collectionRef = collection(db, 'uht_claim_address');
             const docRef = doc(collectionRef, address)
             const item = {
                address,
                dateCreated: new Date().toJSON()
             }

             setDoc(docRef, item)
                 .then(result => {
                     resolve(item);
                 })
                 .catch(reject)
         } catch (error) {
             reject(error)
         }
    })
}






  async function deleteClaimedAddress(address) {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'uht_claim_address', id)
        deleteDoc(docRef).then(resolve).catch(reject)
    })
  }


export { getAll, getClaimedAddress, create }