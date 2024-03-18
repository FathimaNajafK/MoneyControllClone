
import React from 'react';
import { Routes, Route,useNavigate ,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Navigate to={'/home'} />} />
        <Route element={<Home />} path='/home' />
        <Route element={<Transaction />} path='/transaction' />
      </Routes>
    </div>
  );
}

export default App;
