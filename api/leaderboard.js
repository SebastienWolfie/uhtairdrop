import Date from '../utils/Date';
import { doc, collection, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function getAll() {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_leaderboard');
        const querySnapshot = await getDocs(collectionRef);
  
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        })
        resolve(list);
        // resolve(getDummyList())
    })
}


async function getLeaderboard(id) {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uht_leaderboard', id)
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
    })
}




export { getAll, getLeaderboard }