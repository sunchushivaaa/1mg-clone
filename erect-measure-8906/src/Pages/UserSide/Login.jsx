import { useState } from "react";
import LoginComponent from "../../Components/UserSide/LoginComponent";

const Login = () => {
  const[end,setEnd]=useState("block")
  const endPopup=()=>{
setEnd("none")
  }
  return (
      <LoginComponent />
    // <div style={{position:"fixed",width:"100%",height:"100vh",background:"rgba(0,0,0,0.5)",top:"0",left:"0",display:end}}>
    //   <h1 onClick={endPopup}>x</h1>
    // </div>
  );
};
export default Login;
