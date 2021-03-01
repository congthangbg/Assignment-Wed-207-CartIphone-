import react from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../Contants/Message'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import { actRemoveFromCart, actChangeMessage,actUpdateProduct } from '../Actions/index'

function CartContainer({ cart, onDelete, onChangeMessage,onUpdate }) {

  const showCartItem = (cart) => {
    var result = <tr>
      <td>{Message.MSG_CART_EMPTY}</td>
    </tr>
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
          onUpdate={onUpdate}
           onChangeMessage1={onChangeMessage}
            onDelete={onDelete}
            key={index} item={item} index={index}>

          </CartItem>
        )
      })
    }
    return result;
  }
  const showToTalAmount = (cart) => {
    var amount = null;
    if (cart.length > 0) {
      amount = <CartResult cart={cart} />
    }
    return amount;
  }

  CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
      product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        //price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      solg: PropTypes.number.isRequired
    })).isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
    onUpdate:PropTypes.func.isRequired
  }

  return (
    <Cart>
      {showCartItem(cart)}
      {showToTalAmount(cart)}
    </Cart>
  );
}
const mapStateToProps = state => {
  return {
    //state.Cart ->> reducers/index
    cart: state.Cart
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(actRemoveFromCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    },
    onUpdate: (product,solg) => {
      dispatch(actUpdateProduct(product, solg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
