import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAeg9F_xyuu9PhyYfc4dtkEFmKtg0xyyk8",
  authDomain: "auth-92437.firebaseapp.com",
  projectId: "auth-92437",
  storageBucket: "auth-92437.appspot.com",
  messagingSenderId: "259945161107",
  appId: "1:259945161107:web:2fa21132c07c655ef88866",
  measurementId: "G-7RW1K641PK"
};

  const app =initializeApp(firebaseConfig);

  export const db=getFirestore(app);
  export const auth=getAuth(app);

  const provider=new GoogleAuthProvider()
 


  export const signInWithGoogle= () =>{
      signInWithPopup(auth,provider).then((result)=>{
          const name=result.user.displayName
          const email=result.user.email
          const profilePic=result.user.photoURL

          localStorage.setItem("name",name)
          localStorage.setItem("email",email)
          localStorage.setItem("profilePic",profilePic)
      }).catch((error)=>{
        console.log(error);
      })
  }