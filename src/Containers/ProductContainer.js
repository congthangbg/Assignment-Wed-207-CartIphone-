import react, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage, actChangeMessage2, actChangeMessage3} from '../Actions/index';
import ListProduct from '../Components2/ListProduct'
import ApiCaller from '../AxiosUtils/ApiCaller'
import * as Message from './../Contants/Message'
import { filter, includes } from 'lodash';
function ProductsContainer({onAddToCart,onChangeMessage,products,onChangeMessageFilter,onChangeMessageSearch,message2,message3}) {
  var initialState = [
    { id: 1, name: "Iphone 7", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_Ame0vsCGQpk1TMqQscg0sgIG9mJIlgSbYcl47eqL8q2dAYMlULRvhHUXsQhU9FhnFDyqAIY&usqp=CAc', description: "Sp do apple sx", price: 500,rating: 4},
    { id: 2, name: "Iphone 8", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 450,rating: 5},
    { id: 3, name: "Iphone 10", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 550,rating: 3},
    { id: 4, name: "Iphone 12", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBSY9m40EVvd9PhztQPoso1Ow2q0-eH7Y30PBXsSNNP0lw8lz9H6SZyVMissu-_o3bIOIaKc&usqp=CAc', description: "Sp do apple sx", price: 450 ,rating: 5},
 ]
 const [listNew,setListNew] = useState(initialState)
 const [listFillter,setListFillter] = useState([])
 let list = []

  // API
  useEffect(() => {
    ApiCaller("my_Asm", "GET", null).then(response => {
       const { data } = response
       setListNew(data)
       setListFillter(data)
    })
 }, [])
  listNew.map((item, index)=>{
    if (item.description==message2){
      list.push(item)
      
    }
  })
  var showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product
          key={index}
          product={product}
          onAddToCart1={onAddToCart}
          onChangeMessage={onChangeMessage}
          />
      })
    }
    return result;
  }
  let itemSearch = [];
  itemSearch = filter(listFillter, (item) => {
     return includes(item.name.toLowerCase(), message3)
  }); 
  console.log(message3);
  return (
    <Products onChangeMessageFilter={onChangeMessageFilter} onChangeMessageSearch={onChangeMessageSearch}>
      {message2=="Tatca"? showProducts(message3==""? listFillter: itemSearch) : showProducts(list)}
    </Products>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage:PropTypes.func.isRequired,
  onAddToCart:PropTypes.func.isRequired

}

const mapStateToProps = state => {
  return {
    products: state.Products,
    message2 : state.Message2,
    message3 : state.Message3
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage : (message) => {
      dispatch(actChangeMessage(message))
    },
    onChangeMessageFilter : (message1) => {
      dispatch(actChangeMessage2(message1))
    },
    onChangeMessageSearch : (message3) => {
      dispatch(actChangeMessage3(message3))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
