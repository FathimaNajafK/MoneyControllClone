
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddTransaction from './pages/AddTransaction';
import Home from './pages/Home';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AddTransaction />} path='/add-transaction' />
        <Route element={<Home />} path='/home' />
        <Route element={<Transaction />} path='/transaction' />
      </Routes>
    </div>
  );
}

export default App;
