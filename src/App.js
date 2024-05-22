import React from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";

import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'




function App() {
  let authenticated =  localStorage.getItem("authenticated");
  return (
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={authenticated ? <Dashboard /> : <Login />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;