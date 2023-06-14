import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDXOfkgCivSrgaW9M2L0v3mV9FHIdWX4Ag",
  authDomain: "rookietechwebpage.firebaseapp.com",
  projectId: "rookietechwebpage",
  storageBucket: "rookietechwebpage.appspot.com",
  messagingSenderId: "472911406210",
  appId: "1:472911406210:web:5ccc268d15a19ba2c3c09b"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }