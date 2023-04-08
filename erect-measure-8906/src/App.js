import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/UserSide/Navbar";
import Footer from "./Components/UserSide/Footer";
import Login from "./Pages/UserSide/Login";
import { Toaster } from "react-hot-toast";
import Homeopathic from "./Components/UserSide/Homeopathic";




function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
      {/* <Login/> */}
      <Toaster/>
    </div>
  );
}

export default App;
