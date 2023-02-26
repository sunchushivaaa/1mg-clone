import React from 'react';
import { useSelector } from 'react-redux';
<<<<<<< Updated upstream
import RedirectToLogin from '../../Pages/UserSide/RedirectToLogin';
=======
import { Navigate, useLocation } from 'react-router-dom';

>>>>>>> Stashed changes


const PrivateRoute = ({children}) => {
    const{currentUser}=useSelector((store)=> store.AuthReducer)
<<<<<<< Updated upstream

    if(!currentUser){
        return <RedirectToLogin />
=======
    const location=useLocation();
     console.log(location)
    if(!currentUser){
    
        return <Navigate to="/login" state={location.pathname} replace/>
>>>>>>> Stashed changes
    }
  return children;
}

export default PrivateRoute;