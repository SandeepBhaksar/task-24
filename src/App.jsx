import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CartContextProvider from './Context/CartContextProvider';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/body/products';
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <Router basename="/task-24"> 
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
