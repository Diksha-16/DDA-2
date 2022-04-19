import Header from "./Header";
import Login from "./Login";
import ContactUS from "./ContactUS";
import SignUp from "./SignUp";
import Footer from "./Footer";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Features from "./Features";
import AboutUs from "./AboutUs";
import image from "./image.jpg";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./Courses.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./Navbar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from './firebase-config'
import { collection, getDocs,addDoc,updateDoc ,doc,deleteDoc,} from 'firebase/firestore'
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

import {auth} from './firebase-config'; 
import {signInWithGoogle} from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  

  return (
    <div className="App">
      <Router >
        <Header />
        <br />
        <br />
        <br />

        {/* <button onClick={signInWithGoogle}>Sign In With Google</button>
         <h1>{localStorage.getItem("name")}</h1>
         <h1>{localStorage.getItem("email")}</h1>
         <img src={localStorage.getItem("profilePic")}/> */}
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path="/" element={<Header />} />
          {/* <Route exact path="/Home" element={<Home/>}/> */}
          <Route exact path="SignUp" element={<SignUp />} />
          <Route  path="Login" element={<Login />} />
          <Route exact path="/ContactUS" element={<ContactUS />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Courses" element={<Courses />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/CreatePost" element={<CreatePost />} />
        </Routes>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;


