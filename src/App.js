import react, { useEffect, useLayoutEffect, useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Mainproduct from './components/Mainproduct'
import ListProduct from './Components2/ListProduct'
import './App.css'
import imgHeader from "./header.jpg"
import background from "./background.jpg"
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import MainCart from './components/MainCart';
import Slideshow from './components/Slideshow';
import LoginForm from './Features/Page/LoginForm'
import * as firebase from 'firebase/app';
import Fire from './Features/Components/Fire'
import ListCate from './Cate/ListCate';
// Configure Firebase.
// const config = {
//    apiKey: 'AIzaSyDmS07wtQ3dkHqjYfjk7I_KfM2maMRE3lU',
//    authDomain: 'mycartphone-4f4c7.firebaseapp.com',
//    // ...
// };
// firebase.initializeApp(config);

function App() {
   const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
   const [user, setUser] = useState("");
   const [email, setEmail] = useState("")
   const [password, setpassword] = useState("")
   const [emailError, setEmailError] = useState("")
   const [passwordError, setpasswordError] = useState("")
   const [status, setstatus] = useState(false)
   const clearError = () => {
      setEmailError("")
      setpasswordError("")
   }
   const clearInput = () => {
      setEmail("")
      setpassword("")
   }
   const Handlerlogin = (event) => {
      event.preventDefault()
      clearError();
      Fire.auth().signInWithEmailAndPassword(email, password)
         .catch((e) => {
            switch (e.code) {
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                  setEmailError(e.message)
                  break;
               case "auth/wrong-password":
                  setpasswordError(e.message)
                  break;
            }
         })
   }
   const signup = () => {
      clearError();
      Fire.auth().createUserWithEmailAndPassword(email, password)
         .catch((e) => {
            switch (e.code) {
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                  setEmailError(e.message)
                  break;
               case "auth/weak-password":
                  setpasswordError(e.message)
                  break;
            }
         })
   }
   const logout = () => {
      Fire.auth().signOut();
   }
   const authListener = () => {
      Fire.auth().onAuthStateChanged((user) => {
         if (user) {
            clearInput();
            setUser(user)
         } else {
            setUser("")
         }
      })
   }
   useEffect(() => {
      authListener()
   }, [])
   //Listen to the FireFire Auth state and set the local state.
   useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
         //setIsSignedIn(!!user);
         if (!user) {
            setIsSignedIn(false);
            return;
         }

         setIsSignedIn(true)
         // console.log('log user', user.displayName);
         // console.log('log user', email);
         // const token = await user.getIdToken()
         // console.log("log token", token);
      });
      return () => unregisterAuthObserver();
   }, []);

   return (
      <Router>
         <div className="container-fluid">
            <main id="mainContainer" >
               <Header logout={logout} />

               {user ? (
                  <Switch>
                      <Route path="/" exact>
                        <Slideshow />
                        <Mainproduct />
                     </Route>
                     <Route path="/Mainproduct">
                        <Slideshow />
                        <Mainproduct />
                     </Route>
                     <Route path="/ListProduct">
                        <Slideshow />
                        <ListProduct />
                     </Route>
                     <Route path="/MainCart">
                        <Slideshow />
                        <MainCart />
                     </Route>
                     <Route path="/Category">
                        <Slideshow />
                     <ListCate/>
                     </Route>
                  </Switch>
               ) : (

                     <Switch>
                        <Route path="/" exact>
                           <LoginForm email={email}
                              setEmail={setEmail}
                              password={password}
                              setpassword={setpassword}
                              Handlerlogin={Handlerlogin}   
                              logout={logout}
                              status={status}
                              setstatus={setstatus}
                              emailError={emailError}
                              passwordError={passwordError}
                              signup={signup} />
                        </Route>
                        <Route path="/LoginForm">
                           <LoginForm email={email}
                              setEmail={setEmail}
                              password={password}
                              setpassword={setpassword}
                              Handlerlogin={Handlerlogin}
                              logout={logout}
                              status={status}
                              setstatus={setstatus}
                              emailError={emailError}
                              passwordError={passwordError}
                              signup={signup} />
                        </Route>
                     </Switch>
                  )}

            </main>
            <Footer />
         </div>
      </Router>


   );
}

export default App;
