import "../Styles/UserSide/Login.scss";
import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../Redux/UserSide/Auth Redux/action";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginUser(email, password)).then(() => {
      window.location.href = "/";
    });
    setEmail("");
    setPassword("");
  };

  //logout
  //  const handleAuth=()=>{

  //       if(currentUser){
  //         dispatch(logoutUser())
  //       }
  //  }

  //  useEffect(()=>{
  //      if(currentUser){
  //         navigate("/");
  //      }
  //  },[currentUser,navigate])

  return (
    <div className="formdata" id="formdata" style={{ background: "#212121" }}>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <p>
            Not have an account?<Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
