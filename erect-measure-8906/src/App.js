import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { auth } from "./firebase";
import { setUser } from "./Redux/UserSide/Auth Redux/action";



function App() {
 const dispatch=useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
           dispatch(setUser(user));
        } else {
          dispatch(setUser(null))
        }
      });
     
}, [dispatch])

  return (
    <div className="App">
         
    </div>
  );
}

export default App;
