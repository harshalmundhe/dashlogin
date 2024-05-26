import React from 'react';
import {  Navigate  } from 'react-router-dom';
function PrivateRoute({ children }) {
  
  

  let isAuth = JSON.parse(localStorage.getItem('userData'));
    if(isAuth && isAuth !== null) {
      return  <>{children}</>
    } else {
      return <Navigate to="/login" replace />;
    }
    
  
}
export default PrivateRoute;