import React from 'react';
import './App.css';
import Login from './components/login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";

import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import User from './components/User'
import AddEditUser from  './components/AddEditUser'



function App() {
  let isAuth = JSON.parse(localStorage.getItem('userData'));
  return (
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          isAuth ?
            <Dashboard />
          :
            <Login />
        } />
        <Route path="login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/addedituser"
          element={
            <PrivateRoute>
              <AddEditUser />
            </PrivateRoute>
          }
        />

      </Routes>
      </BrowserRouter>
    
  );
}

export default App;