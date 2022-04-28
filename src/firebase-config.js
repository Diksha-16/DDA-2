import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDrqwiafCgaDS1OmUp4Al6HCd7BZ_QPvUQ",
  authDomain: "fir-project-f098d.firebaseapp.com",
  projectId: "fir-project-f098d",
  storageBucket: "fir-project-f098d.appspot.com",
  messagingSenderId: "56191063853",
  appId: "1:56191063853:web:dbecdde8f92380da22a5a4",
  measurementId: "G-ZSHH57YCPX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


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