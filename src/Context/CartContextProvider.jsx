import React, { useState } from 'react';
import { CartContext } from './CartContext'; // Import the CartContext

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isPaymentPage, setIsPaymentPage] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState ("");
  const [expiryDate, setExpiryDate] = useState("");

  // Function to add products to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotal(total + product.price);
  };

  // Function to update product quantity in cart
  const updateQuantity = (productId, delta) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCart(updatedCart);

    // Recalculate total
    const updatedTotal = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(updatedTotal);
  };

  const handlePaymentClick = () => {
    if (cart.length > 0) { 
      setIsPaymentPage(!isPaymentPage); 
    } else {
      alert("Your Cart is Empty! Please add items to proceed.");
    }
  };

  const handleBackToProducts = () => {
    if (cart.length === 0) {
      setIsPaymentPage(false);
    }
  };
  
  React.useEffect(() => {
    if (cart.length === 0 && isPaymentPage) {
      setIsPaymentPage (false)
    }
  }, [cart, isPaymentPage])




  const handleCardNumberInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); 
    value = value.replace(/(.{4})/g, "$1-"); 

    if (value.endsWith("-")) {
      value = value.slice(0, -1);
    }

    setCardNumber(value); 
  };

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.id)
  }

  const handleExpiryDate = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length >2){
      const month = value.slice(0,2);
      const year = value.slice(2,6);

      if (parseInt(month) > 12) {
        value = "12" + year;
      } else {
        value = month + "/" + year;
      }
    } else {
      value = value;
    }

    setExpiryDate(value.slice(0,7));
  }



  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, handlePaymentClick,handleBackToProducts, setIsPaymentPage, isPaymentPage,cardNumber, paymentMethod,expiryDate, handleCardNumberInput, handlePaymentMethod, handleExpiryDate, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
