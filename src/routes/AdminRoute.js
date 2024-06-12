import React from 'react';
import {  Navigate  } from 'react-router-dom';

function AdminRoute({ children }) {  
  let loginData = JSON.parse(localStorage.getItem('loginData'));

  if(loginData && loginData.isAdmin) {
    return  <>{children}</>
  } else {
    return <Navigate to="/admin" replace />;
  }  
}

export default AdminRoute;