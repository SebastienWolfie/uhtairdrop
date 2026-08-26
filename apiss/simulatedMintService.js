import { doc, collection, setDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../firebase';

async function createSimulatedMint(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const collectionRef = collection(db, 'uht_nft_mint');
      const docRef = doc(collectionRef);
      const id = docRef.id;

      item.id = id;
      item.dateCreated = item.dateCreated || new Date().toISOString();
      item.isSystemGenerated = item.isSystemGenerated ?? true;

      await setDoc(docRef, item);
      resolve(item);
    } catch (error) {
      reject(error);
    }
  });
}

async function getAllSimulatedMints(limitCount = 20) {
  return new Promise(async (resolve, reject) => {
    try {
      const collectionRef = collection(db, 'uht_nft_mint');
      const q = query(collectionRef, orderBy("dateCreated", "desc"), limit(limitCount));
      const querySnapshot = await getDocs(q);

      let list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      resolve(list);
    } catch (error) {
      // Fallback if ordering index isn't created yet in Firestore
      try {
        const collectionRef = collection(db, 'uht_nft_mint');
        const querySnapshot = await getDocs(collectionRef);
        let list = [];
        querySnapshot.forEach((doc) => list.push(doc.data()));
        list.sort((a, b) => new Date(b.dateCreated || 0) - new Date(a.dateCreated || 0));
        resolve(list.slice(0, limitCount));
      } catch (err) {
        reject(err);
      }
    }
  });
}

export { createSimulatedMint, getAllSimulatedMints };