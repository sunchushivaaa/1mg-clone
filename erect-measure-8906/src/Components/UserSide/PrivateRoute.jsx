import React from 'react';
import { useSelector } from 'react-redux';
import RedirectToLogin from '../../Pages/UserSide/RedirectToLogin';


const PrivateRoute = ({children}) => {
    const{currentUser}=useSelector((store)=> store.AuthReducer)

    if(!currentUser){
        return <RedirectToLogin />
    }
  return children;
}

export default PrivateRoute;