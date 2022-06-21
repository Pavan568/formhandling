import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBGZFHa_vt50qHefBKz90de25Bs-Ooh6pw",
    authDomain: "form-handling-b666f.firebaseapp.com",
    projectId: "form-handling-b666f",
    storageBucket: "form-handling-b666f.appspot.com",
    messagingSenderId: "275578981015",
    appId: "1:275578981015:web:9ea975dada7ee07e1177d2"
  };
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


export {auth,db }
