import react, { useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Products from './components/Products';
import ProductsContainer from './Containers/ProductContainer';
import CartContainer from './Containers/CartContainer';
import MessageContainer from './Containers/MessageContainer';
function App() {
  const [message,setMessage]=useState("Chào");
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer setMessage={setMessage}/>
          {/* <Message /> */}
          <MessageContainer message1={message} />
          <CartContainer/>
          {/* <Cart /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
