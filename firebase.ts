// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALa6v4dDa9VwbpbmaKRvWcjgcX3XeC_2U",
    authDomain: "flixxit-netflix-clone-7f1d6.firebaseapp.com",
    projectId: "flixxit-netflix-clone-7f1d6",
    storageBucket: "flixxit-netflix-clone-7f1d6.appspot.com",
    messagingSenderId: "609028647781",
    appId: "1:609028647781:web:e837c2a21f3f4f18854f8c"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }