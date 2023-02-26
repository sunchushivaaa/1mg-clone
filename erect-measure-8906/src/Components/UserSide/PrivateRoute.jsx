import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const{currentUser}=useSelector((store)=> store.AuthReducer)
    const location=useLocation();
     console.log(location)
    if(!currentUser){
    
        return <Navigate to="/login" state={location.pathname} replace/>
    }
  return children;
}

export default PrivateRoute;