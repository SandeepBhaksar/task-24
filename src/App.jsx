import React from 'react';
import './App.css';
import CartContextProvider from './Context/CartContextProvider'; // Import CartContextProvider
import Navbar from './Components/Navbar/navbar';
import Products from './Components/body/products';

function App() {
  return (
    <CartContextProvider> 
      <Navbar />
      <Products />
    </CartContextProvider>
  );
}

export default App;
