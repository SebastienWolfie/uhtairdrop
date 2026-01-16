import Date from '../utils/Date';
import { doc, collection, getDocs, getDoc, query, where, setDoc, updateDoc } from 'firebase/firestore';
import { getUser } from './profile';
import { db } from '../firebase';


async function create(senderAddress, receiverAddress) {
    return new Promise(async(resolve, reject) => {
        try {
            const referralCollectionRef = collection(db, 'uht_crypto_referrals');
            const referralDocRef = doc(referralCollectionRef)
            const referralId = referralDocRef.id;
            const item = {
                id: referralId,
                sender_id: senderAddress,
                receiver_id: receiverAddress,
                dateCreated: new Date().toJSON()
            }
            await setDoc(referralDocRef, item)
            resolve(item)
         } catch (error) {
             reject(error)
         }
    })
} 


async function getAll(address) {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, 'uht_crypto_referrals');
        const q = query(collectionRef, where("sender_id", "==", address));

        const querySnapshot = await getDocs(q);

        let list = await Promise.all(querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            const receiverID = data?.receiver_id

            const user = await getUser(receiverID);
            let referralCount = 0;

            if (data.receiver_id==address) {
              let temp = Array.from(
                  new Map(querySnapshot.docs.map(item => [item.data().receiver_id.toLowerCase(), item])).values()
              ) || []
              temp=temp?.filter(i=>!i.pointsClaimed)
              referralCount=temp.length;
            }else{
              const userReferrals= await getAll(data.receiver_id);
              let temp = Array.from(
                  new Map(userReferrals.map(item => [item.address.toLowerCase(), item])).values()
              ) || []
              // console.log(temp)
              temp=temp?.filter(i=>!i.pointsClaimed)
              referralCount=temp.length;
            }
            
            const points = user?.points + (referralCount*200)

            return {
                address: receiverID,
                email: user.email,
                username: user.username,
                points,
                allocation: user.allocation || 0,
                hasClaimedPoints: user.hasClaimedPoints || false,
                isAirdropEligible: user.isAirdropEligible,
                pointsClaimed: data.pointsClaimed || false
            }
        }));
        resolve(list);
    })
}


async function getReferral(id) {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uht_crypto_referrals', id)
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
    })
}


// Mark all referrals of a sender as claimed
async function markReferralsClaimed(senderAddress) {
  try {
    const referralCollectionRef = collection(db, "uht_crypto_referrals")

    // Query all docs where sender_id == senderAddress
    const q = query(referralCollectionRef, where("sender_id", "==", senderAddress))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      console.log("No referrals found for:", senderAddress)
      return
    }

    // Loop through and update each doc
    const updates = querySnapshot.docs.map(docSnap =>
      updateDoc(docSnap.ref, { pointsClaimed: true })
    )

    await Promise.all(updates)

    console.log(`Marked ${querySnapshot.size} referrals as claimed for ${senderAddress}`)
  } catch (error) {
    console.error("Error marking referrals claimed:", error)
    throw error
  }
}


export { getAll, getReferral, create, markReferralsClaimed }