import React from 'react';
import {  Navigate, useNavigate  } from 'react-router-dom';
function PrivateRoute({ children }) {
  let authenticated =  localStorage.getItem("authenticated");
  console.log("here => " + authenticated);
  const navigate = useNavigate();
    
    if(authenticated) {
      return  <>{children}</>
    } else {
      return navigate("/login");
    }
  
}
export default PrivateRoute;