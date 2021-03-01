import React, { Component } from 'react';
import ProductsContainer from '../Containers/ProductContainer';
import CartContainer from '../Containers/CartContainer';
import MessageContainer from '../Containers/MessageContainer';
import Header from './Header'
function Mainproduct(){
      return (
         <div className="container">
         <ProductsContainer />
         {/* <Message /> */}
         {/* <MessageContainer />
         <CartContainer/> */}
         {/* <Cart /> */}
       </div>
      );
   }

export default Mainproduct;