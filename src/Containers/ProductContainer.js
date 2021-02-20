import react from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage } from '../Actions/index';

function ProductsContainer({setMessage,products,onAddToCart,onChangeMessage}) {
  var showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product
          key={index}
          product={product}
          onAddToCart1={onAddToCart}
          onChangeMessage={onChangeMessage}
          setMessage1={setMessage}
          />
      })
    }
    return result;
  }
  return (
    <Products>
      {showProducts(products)}
    </Products>
  );
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage:PropTypes.func.isRequired,
  onAddToCart:PropTypes.func.isRequired

}

const mapStateToProps = state => {
  return {
    products: state.Products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage : (message) => {
      dispatch(actChangeMessage(message))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
