import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RedirectToLogin from '../../Pages/UserSide/RedirectToLogin';


const PrivateRoute = ({children}) => {
    const{currentUser}=useSelector((store)=> store.AuthReducer)
const location=useLocation()
    if(!currentUser){
    
        return <RedirectToLogin state={location.pathname} />
    }
  return children;
}

export default PrivateRoute;