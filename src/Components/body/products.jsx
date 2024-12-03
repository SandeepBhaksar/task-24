import React, { useContext, useState } from 'react';
import './products.css';
import redtape01 from '../../assets/images/red-tape01.jpg';
import asianTarzan11 from '../../assets/images/asian-tarzan-11.jpg';
import sparxmesh from '../../assets/images/sparx-mesh.jpg';
import lqdcell from '../../assets/images/puma-LQDCELL.jpg';
import genetic_speckle from '../../assets/images/puma-genetics-speckle.jpg';
import genetics from '../../assets/images/puma-genetics.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import Payment from '../Payment/Payment';

const Products = () => {
  const { cart, addToCart, updateQuantity, handlePaymentClick,handleBackToProducts, setIsPaymentPage, isPaymentPage, total } = useContext(CartContext);
  

  const productList = [
    { id: 1, name: 'Red Tape Athleisure Shoes for Men', price: 2699, img: redtape01 },
    { id: 2, name: "ASIAN Men's TARZAN-11 Casual Sneaker Shoes", price: 719, img: asianTarzan11 },
    { id: 3, name: "SPARX Men's Mesh Running Shoe", price: 909, img: sparxmesh },
    { id: 4, name: "Puma Men's LQDCELL Method Training Shoe", price: 3499, img: lqdcell },
    { id: 5, name: "Puma Unisex Genetics Speckle Basketball Shoe", price: 5499, img: genetic_speckle },
    { id: 6, name: "Puma Unisex Genetics Basketball Shoe", price: 4499, img: genetics },
  ];

  
  

  return (
    <div className="container">
      {isPaymentPage ? 
        <Payment /> : (
        <div className="products">
          <h2>Products</h2>
          <div className="product-grid">
            {productList.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}

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
        <button onClick={handlePaymentClick}>
          {isPaymentPage ? 'Back to Products' :  'Proceed to Payment'}
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
