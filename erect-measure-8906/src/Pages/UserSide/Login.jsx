import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { loginUser } from '../../Redux/UserSide/Auth Redux/action';
import styles from "./Login.module.css";

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const{currentUser}=useSelector((store)=> store.AuthReducer)

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!email || !password){
         return
      }
      dispatch(loginUser(email,password))
      setEmail("");
      setPassword("");
      
   }

 useEffect(()=>{
     if(currentUser){
        navigate("/");
     }
 },[currentUser,navigate])
    
  
   
  return (
    <div className={styles.loginDiv}>
         <form onSubmit={handleSubmit}>
              <h1 className={styles.loginHead}>Sign In</h1>
              <div className={styles.loginDiv1}>
                <label >Email</label><br/>
                <input type="text" placeholder="email" required onChange={(e)=> setEmail(e.target.value)} value={email}/>
              </div>
              <div className={styles.loginDiv2}>
                <label>Password</label><br/>
                <input type="password" placeholder="password" required onChange={(e)=> setPassword(e.target.value)} value={password}/>
              </div>
              <button type="submit" className={styles.loginBtn}>Login</button>
              <div className={styles.lastlogDiv}>
                 <p>Not have an account?<Link to="/register">Sign Up</Link></p>
              </div>
         </form>
       
    </div>
  )
}

export default Login;