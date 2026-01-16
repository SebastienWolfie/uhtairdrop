import { doc, collection, updateDoc, setDoc, deleteDoc, getDocs, query, where, and } from 'firebase/firestore';
import { db } from '../firebase';
import Date from '../utils/Date'


async function update(id, item) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_staking', id);
            const result = await updateDoc(docRef, item)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
  }

async function getAllStakeByAddress(address) {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_staking');
        const q = query(collectionRef, where("address", "==", address));

        const querySnapshot = await getDocs(q);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list || []);
    })
}




async function create(item) {
    return new Promise(async(resolve, reject) => {
        try {
             const collectionRef = collection(db, 'uht_staking');
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
        const collectionRef = collection(db, 'uht_staking');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
    })
}

  async function deleteStake(id) {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'uht_staking', id)
        deleteDoc(docRef).then(resolve).catch(reject)
    })
  }


export { update,
         create,
         getAll,
         getAllStakeByAddress,
         deleteStake
        }