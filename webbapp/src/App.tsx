import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing } from './pages';
import AdminLogin from './pages/AdminLogin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
