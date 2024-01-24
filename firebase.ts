// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1GRPrK1qmAQnhjbiv5RxT41e8RhdzqQU",
    authDomain: "flixxit-6b161.firebaseapp.com",
    projectId: "flixxit-6b161",
    storageBucket: "flixxit-6b161.appspot.com",
    messagingSenderId: "370872906240",
    appId: "1:370872906240:web:86f839ec8767dcdfb25ee5"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }