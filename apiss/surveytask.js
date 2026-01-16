import Date from '../utils/Date';
import { doc, collection, updateDoc, getDocs, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function getDailyQuestion() {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'uhtsurveydaily', 'question')
        const querySnapshot = await getDoc(docRef);
  
        resolve(querySnapshot.data());
        // resolve(getDummyQuestion());
    })
}


function getDummyQuestion() {
    return {
            id: new Date().format('ddMMMyyyy'),
            question: 'What is my name?',
            options: [
                {
                    id: 1,
                    text: 'John Doe'
                },
                {
                    id: 2,
                    text: 'Jane Doe'
                },
                {
                    id: 3,
                    text: 'Borris Johnson'
                }
            ],
            answerID: 2,
            dateCreated: new Date().toJSON()
        };
}


export { getDailyQuestion }