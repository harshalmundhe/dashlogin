import React from 'react';
import {  Navigate  } from 'react-router-dom';

function PrivateRoute({ children }) {  
  let loginData = JSON.parse(localStorage.getItem('loginData'));

  console.log(loginData)
  if(loginData && !loginData.isAdmin) {
    return  <>{children}</>
  } else {
    return <Navigate to="/login" replace />;
  }  
}

export default PrivateRoute;