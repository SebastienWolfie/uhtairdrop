import { doc, collection, updateDoc, setDoc, getDoc, getDocs, query, where, and } from 'firebase/firestore';
import { db } from '../firebase';
import Date from '../utils/Date'

async function getNomination(address) {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_nominations');
        const q = query(collectionRef, where("address", "==", address));

        const querySnapshot = await getDocs(q);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        if (list.length<=0) resolve(null)
        resolve(list[0] || null);
    })
}


async function update(id, item) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_nominations', id);
            const result = await updateDoc(docRef, item)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
  }

async function getAllNominatedByAddress(address) {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_nominations');
        const q = query(collectionRef, where("owner", "==", address));

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
             const collectionRef = collection(db, 'uht_nominations');
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
        const collectionRef = collection(db, 'uht_nominations');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
    })
}


export { getNomination,
         update,
         create,
         getAll,
         getAllNominatedByAddress
        }