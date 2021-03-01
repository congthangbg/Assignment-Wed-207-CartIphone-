import react, { useState } from 'react';
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
function App() {
   return (
      <div className="container-fluid">
         <main id="mainContainer" >
            <Router>
              <Header/>
              <img src={imgHeader} className="img-container flex-center" width="100%" height="200px"/>
               <Switch>
               <Route path="/" exact>
                     <Mainproduct />
                  </Route>
                  <Route path="/Mainproduct">
                     <Mainproduct />
                  </Route>
                  <Route path="/ListProduct">
                     <ListProduct />
                  </Route>
                  <Route path="/MainCart">
                     <MainCart />
                  </Route>
               </Switch>
            </Router>
         </main>
         <Footer />
      </div>

   );
}

export default App;
