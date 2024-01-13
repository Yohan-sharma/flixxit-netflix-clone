// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1uJ_CNM6ZnwfXoARiwfn76bcyWs6AYz4",
    authDomain: "flixxit-netflix-clone.firebaseapp.com",
    projectId: "flixxit-netflix-clone",
    storageBucket: "flixxit-netflix-clone.appspot.com",
    messagingSenderId: "530638461825",
    appId: "1:530638461825:web:c6abd3b0732b6401262680"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }