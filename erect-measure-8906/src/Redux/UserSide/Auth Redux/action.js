
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { auth } from "../../../firebase"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SET_USER } from "./actionTypes"

export const registerRequest=()=>{
    return{
        type:REGISTER_REQUEST,
    }
}

export const registerSuccess=(user)=>{
    return{
        type:REGISTER_SUCCESS,
        payload:user,
    }
}

export const registerFailure=(error)=>{
    return{
        type:REGISTER_FAILURE,
        payload:error
    }
}

export const registerUser=(email,password,username)=>(dispatch)=>{
      dispatch(registerRequest());
  return createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        console.log(user)
        updateProfile(user,{
            displayName:username,
        })
       
        dispatch(registerSuccess(user))
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(registerFailure(errorMessage))
    })
}


export const loginRequest=()=>{
    return{
        type:LOGIN_REQUEST,
    }
}

export const loginSuccess=(user)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:user,
    }
}

export const loginFailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}


export const loginUser=(email,password)=>(dispatch)=>{
      dispatch(loginRequest())
    return signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
          const user=userCredential.user;
          console.log(user)
          dispatch(loginSuccess(user))
      })
      .catch((error)=>{
          const errorMessage = error.message;
          console.log(errorMessage);
          dispatch(loginFailure(errorMessage))
      })
  }


  export const logoutRequest=()=>{
    return{type:LOGOUT_REQUEST }
  }

  export const logoutSuccess=()=>{
     return{type:LOGOUT_SUCCESS}
  }

  export const logoutFailure=(payload)=>{
    return{type:LOGOUT_FAILURE,payload}
  }

  export const setUser=(payload)=>{
    return{
        type:SET_USER,
        payload,
    }
  }


  export const logoutUser=()=>(dispatch)=>{
    dispatch(logoutRequest())
   signOut(auth)
    .then(()=>{
        dispatch(logoutSuccess())
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(logoutFailure(errorMessage))
    })
}