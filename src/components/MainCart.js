import React, { Component } from 'react';
import ProductsContainer from '../Containers/ProductContainer';
import CartContainer from '../Containers/CartContainer';
import MessageContainer from '../Containers/MessageContainer';
import Header from './Header'
function MainCart(){
      return (
      //   <section className="section">
      //   <h1 className="section-heading">Giỏ hàng của bạn</h1>
      //   <div className="row">
      //   <MessageContainer />
      //    <CartContainer/>
      //   </div>
      // </section>
      <div className="container">
         <h1 className="section-heading mt-4">Giỏ hàng của bạn</h1>
         <MessageContainer />
          <CartContainer/>
      </div>
      );
   }

export default MainCart;