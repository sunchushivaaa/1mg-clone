
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { auth } from "../../../firebase"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SET_USER } from "./actionTypes"
import toast from "react-hot-toast";
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
        updateProfile(user,{
            displayName:username,
        })
       
        dispatch(registerSuccess(user))
       

    }).then(()=>{
        toast.success("Account created successfully !", {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          })
    })
    .catch((error)=>{
        const errorMessage = error.message;
        dispatch(registerFailure( toast.error(errorMessage, {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          })))
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
          dispatch(loginSuccess(user))
          localStorage.setItem("validkey",user.displayName) 
      }).then(()=>{
        toast.success("login successfull !", {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          })
    })
      
      .catch((error)=>{
          const errorMessage = error.message;
          dispatch(loginFailure(toast.error(errorMessage, {
            style: {
              borderRadius: "50px",
              background: "#989898",
              color: "#ffffff",
              padding: "1rem 1.5rem",
              fontWeight: "600",
            },
          })))
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
        dispatch(logoutFailure(errorMessage))
    })
}