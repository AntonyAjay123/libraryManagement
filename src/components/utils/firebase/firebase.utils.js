import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDGurK8qYWv0n4gcTAYIWyiGpbS26Sg15Y",
  authDomain: "library-project-3f69b.firebaseapp.com",
  projectId: "library-project-3f69b",
  storageBucket: "library-project-3f69b.appspot.com",
  messagingSenderId: "4445136335",
  appId: "1:4445136335:web:78b7ac55ca59c1b19d1eba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);