import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";

import Router from './routes/Router';
import users from './data/users.json'

function App() {
  useEffect(() => {
    if (!localStorage.getItem('allUsers')) {
      localStorage.setItem('allUsers', JSON.stringify(users))
    }
  }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;