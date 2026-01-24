import { doc, updateDoc, where, getDoc, increment, setDoc, getDocs, query, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Date from '../utils/Date'
import { markReferralsClaimed, getAll as getAllReferrals } from './referral';

async function updateSurveyAnswer(questionID, answerID, answeredCorrectly) {
    return new Promise(async (resolve, reject) => {
        try {
            const id = useAuth().value.walletAddress; 
            const docRef = doc(db, 'uht_crypto_profile', id);

            const item = {
                lastAnsweredQuestionID: questionID,
                lastAnswerID: answerID
            }
            if (answeredCorrectly) item.points = increment(50)
            updateDoc(docRef, item).then(() => {
                useAuth().value.lastAnsweredQuestionID= questionID;
                useAuth().value.lastAnswerID= answerID;
                if (answeredCorrectly) useAuth().value.points= (useAuth().value.points) ? useAuth().value.points + 50 : 50;
                resolve();
            })
            .catch(reject)
            
        } catch (error) {
            reject(error)
        }
    })
}


async function updateUserHasClaimedPoints() {
    return new Promise(async (resolve, reject) => {
        try {
            const id = useAuth().value.walletAddress; 
            const docRef = doc(db, 'uht_crypto_profile', id);

            await updateDoc(docRef, {
                hasClaimedPoints: true,
                points: 0
            })
            
            await markReferralsClaimed(id);
            const referrals = await getAllReferrals(id)
            useAuth().value.hasClaimedPoints = true;
            useAuth().value.points = 0;
            useAuth().value.referrals = referrals || []
            resolve();
            
        } catch (error) {
            reject(error)
        }
    })
}

async function getUser(address) {
  const normalized = address.toLowerCase()

  const q = query(
    collection(db, 'uht_crypto_profile'),
    where("walletAddressLower", "==", normalized)
  )

  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty) return null

  return querySnapshot.docs[0].data()
}


async function addWalletAddressLowerField() {
  try {
    const colRef = collection(db, "uht_crypto_profile");
    const snapshot = await getDocs(colRef);

    console.log("Total docs found:", snapshot.size);

    if (snapshot.empty) {
      console.log("No documents found in uht_crypto_profile");
      return;
    }

    for (const document of snapshot.docs) {
      const data = document.data();
      console.log("Processing:", document.id);

      const address = data.address;
      if (!address) {
        console.log("No walletAddress field for", document.id);
        continue;
      }

      await updateDoc(doc(db, "uht_crypto_profile", document.id), {
        walletAddressLower: address.toLowerCase(),
      });

      console.log(`Updated: ${document.id}`);
    }

    console.log("walletAddressLower field added successfully!");
  } catch (error) {
    console.error("Migration error:", error);
  }
}



async function create(address) {
    return new Promise(async(resolve, reject) => {
        try {
             const docRef = doc(db, 'uht_crypto_profile', address);
             const item = {
                address: address,
                walletAddressLower: address.toLowerCase(),
                points: 0,
                dateCreated: new Date().toJSON()
             }

             await setDoc(docRef, item)
             resolve(item);
         } catch (error) {
             reject(error)
         }
    })
}


async function updateUser(item) {
    return new Promise(async (resolve, reject) => {
        try {
            const id = useAuth().value.walletAddress; 
            const docRef = doc(db, 'uht_crypto_profile', id);

            await updateDoc(docRef, {
                ...item
            })
            
            const auth = useAuth();
            const user = await getUser(auth.value.walletAddress);

            auth.value.points = user?.points || 0
            auth.value.hasClaimedPoints = user?.hasClaimedPoints || false
            auth.value.lastAnsweredQuestionID = user?.lastAnsweredQuestionID || null
            auth.value.lastAnswerID = user?.lastAnswerID || null
            auth.value.email = user?.email || ""
            auth.value.username = user?.username || ""
            resolve();
            
        } catch (error) {
            reject(error)
        }
    })
}




async function updateAddressProfile(address, item) {
    return new Promise(async (resolve, reject) => {
        try {
            const id = address;
            const docRef = doc(db, 'uht_crypto_profile', id);

            await updateDoc(docRef, {
                ...item
            })
            
            resolve();
            
        } catch (error) {
            reject(error)
        }
    })
}

async function addUserPoints(amountToAdd) {
    return new Promise(async (resolve, reject) => {
        try {
            const id = useAuth().value.walletAddress; 
            const docRef = doc(db, 'uht_crypto_profile', id);

            const item = {}
            item.points = increment(amountToAdd)
            updateDoc(docRef, item).then(() => {
                useAuth().value.points= (useAuth().value.points) ? useAuth().value.points + amountToAdd : amountToAdd;
                resolve();
            })
            .catch(reject)
            
        } catch (error) {
            reject(error)
        }
    })
}


export {
    updateSurveyAnswer,
    updateUserHasClaimedPoints,
    getUser,
    create,
    updateUser,
    updateAddressProfile,
    addWalletAddressLowerField,
    addUserPoints
}