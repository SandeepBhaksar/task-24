import React, { useContext, useState } from 'react';
import './Payment.css';
import { CartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';

const Payment = () => {
  const {cardNumber, paymentMethod,expiryDate, handleCardNumberInput, handlePaymentMethod, handleExpiryDate} = useContext(CartContext)

  
  return (
    <div className="main">
    <div className='payment-page'>
      <h2>Payment</h2>
      <form>
        <div className="radio-02">
        <div className='radio'>
          <input type="radio" id="card-payment" name="payment-method" onChange={handlePaymentMethod}/>
          <label htmlFor="card-payment">Pay with Card</label>
        </div>
        <div className="radio">
          <input type="radio" id='cod' name='payment-method' onChange={handlePaymentMethod} checked={paymentMethod === "cod"} />
          <label htmlFor="cod">Cash On Delivery</label>
        </div>
        </div>
        <div className='card-details'>
          <div className="card-name">
          <label htmlFor="card-number">Enter Your Card Number :</label>
          <input
            type="text" id="card-number" value={cardNumber} onChange={handleCardNumberInput} maxLength={19} minLength={19} checked={paymentMethod === "card-payment"}
          />
          </div>
          <div className="card-number">
          <label htmlFor="expiry-date">Enter Your Card's Expiry Date :</label>
          <input type="text" id='expiry-date' onChange={handleExpiryDate} maxLength={7} value={expiryDate} placeholder='MM/YYYY' />
          </div>
          <div className="card-cvv">
            <label htmlFor="cvv">Enter Your Card CVV Number :</label>
            <input type="text" maxLength={3} minLength={3}   />
          </div>
        </div>
      </form>

      <div className="confirm-payment">
            <button>Confirm Payment</button>
          </div>
    </div>
    <Cart />
    </div>
  );
};

export default Payment;
