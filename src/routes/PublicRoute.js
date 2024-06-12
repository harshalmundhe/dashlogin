import React from 'react';
import {  Navigate  } from 'react-router-dom';

function PublicRoute({ children }) {  
  let loginData = JSON.parse(localStorage.getItem('loginData'));

  console.log(loginData)
  if(!loginData) {
    return  <>{children}</>
  } else {
    if (loginData.isAdmin) {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }  
}

export default PublicRoute;