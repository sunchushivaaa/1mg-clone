import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/UserSide/Auth Redux/action";


export default function Home() {
  const{currentUser}=useSelector((store)=> store.AuthReducer)
  const dispatch=useDispatch();

  const handleAuth=()=>{
    
       if(currentUser){
         dispatch(logoutUser())
       }
  }
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <h1>Welcome</h1>
      <button onClick={handleAuth}>logout</button>
    </div>
  );
}