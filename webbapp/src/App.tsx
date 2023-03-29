import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLogin, Dashboard, Landing } from './pages';
// import AdminLogin from './pages/AdminLogin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;

// arrow instead of back