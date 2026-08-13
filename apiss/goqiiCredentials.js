import Date from '../utils/Date';
import { doc, collection, getDocs, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function getAllCredentials() {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionRef = collection(db, 'uht_goqii_credentials');
            const querySnapshot = await getDocs(collectionRef);

            let list = [];
            querySnapshot.forEach((doc) => {
                list.push(doc.data());
            });
            resolve(list);
        } catch (error) {
            reject(error);
        }
    });
}

async function getCredentials(address) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_goqii_credentials', address);
            const querySnapshot = await getDoc(docRef);

            if (querySnapshot.exists()) {
                resolve(querySnapshot.data());
            } else {
                resolve(null);
            }
        } catch (error) {
            reject(error);
        }
    });
}

// Saves credentials and sets status (Default: 0 - Pending/Connecting)
async function saveCredentials(address, firstName, lastName, status = 0) {
    return new Promise(async (resolve, reject) => {
        try {
            const collectionRef = collection(db, 'uht_goqii_credentials');
            const docRef = doc(collectionRef, address);
            const item = {
                address,
                firstName,
                lastName,
                status, // 0 = pending, 1 = connected, -1 = failed
                dateUpdated: new Date().toJSON()
            };

            setDoc(docRef, item, { merge: true })
                .then(() => {
                    resolve(item);
                })
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
}

// Helper function to update just the status (e.g. after backend verification)
async function updateCredentialStatus(address, status) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, 'uht_goqii_credentials', address);
            setDoc(docRef, { status, dateUpdated: new Date().toJSON() }, { merge: true })
                .then(() => resolve({ address, status }))
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
}

async function deleteCredentials(address) {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'uht_goqii_credentials', address);
        deleteDoc(docRef).then(resolve).catch(reject);
    });
}

export { 
    getAllCredentials, 
    getCredentials, 
    saveCredentials, 
    updateCredentialStatus, 
    deleteCredentials 
};