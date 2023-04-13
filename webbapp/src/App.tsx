import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLogin, Dashboard, Landing, RatingDashboard, RatingPage } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AdminLogin from './pages/AdminLogin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/rating' element={<RatingPage />} />
        <Route path='/rating-dashboard' element={<RatingDashboard />} />
      </Routes>
      <ToastContainer autoClose={2500} />
    </Router>
  );
}

export default App;

// arrow instead of back