//FIREBASE data
import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where
 } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAYjM83Nm95QUHwx7niqzpqsMGi1PSBEWk",
  authDomain: "proyecto-vanlife.firebaseapp.com",
  projectId: "proyecto-vanlife",
  storageBucket: "proyecto-vanlife.appspot.com",
  messagingSenderId: "448346595594",
  appId: "1:448346595594:web:f29334925b9a782fda5af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const vansCollectionReference = collection(database, "vans")


export async function gettingVans() {
    const querySnapshot = await getDocs(vansCollectionReference)
    const dataArray = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArray
}

export async function gettingVan(id) {
   const docRef = doc(database, "vans", id)
   const vanSnapshot = await getDoc(docRef)
   return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
    }
}

export async function getHostVans(){
    const q = query(vansCollectionReference,where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArray = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArray
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}