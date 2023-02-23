
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToLogin = () => {
    const[count,setCount]=useState(5);
    const navigate=useNavigate();

    useEffect(()=>{
        const interval=setInterval(()=>{
              setCount((prev)=> --prev)
        },1000)
       count===0 && (navigate("/login"))
        return ()=>{
            clearInterval(interval)
        }
    },[count,navigate])
  return (
    <div>
        <p style={{textAlign:"center",fontWeight:"bold"}}>Redirecting to you login page {count} seconds</p>
    </div>
  )
}

export default RedirectToLogin;