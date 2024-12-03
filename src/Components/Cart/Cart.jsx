import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

function Cart() {
  const { cart, updateQuantity, total } = useContext(CartContext);
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // For checking the current route

  // Determine if the user is on the payment page
  const isOnPaymentPage = location.pathname === '/payment';

  const handleButtonClick = () => {
    if (isOnPaymentPage) {
      navigate('/'); // Navigate back to products
    } else {
      if (cart.length > 0) {
        navigate('/payment'); // Navigate to the payment page
      } else {
        alert('Your Cart is Empty! Please add items to proceed.');
      }
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td className="quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-cart">
          <FontAwesomeIcon icon={faCircleInfo} className="info-icon" />
          <p>No items in the cart</p>
        </div>
      )}
      <div className="cart-total01">
        <div className="cart-total">
          <h3>Total: </h3>
          <h2>₹{total}</h2>
        </div>
        <div className="payment-btn">
          <button onClick={handleButtonClick}>
            {isOnPaymentPage ? 'Back to Products' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
