import react from 'react';
import PropTypes from 'prop-types';
function CartResult(props) {
  var {cart} =props;
  const message=(mes)=>{
    alert("Bạn đã thanh toán thành công :"+mes +"$");
  }
  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showToTalAmount(cart)}$</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button type="button" onClick={()=>message(showToTalAmount(cart))} className="btn btn-primary waves-effect waves-light">Thanh toán
                            <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>
  );
}
const showToTalAmount = (cart) => {
  var total = 0;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].solg;
    }
  }
  return total;
}
CartResult.propTypes = {
  cart: PropTypes.array.isRequired

}

export default CartResult;
