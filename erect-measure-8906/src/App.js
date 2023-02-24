import "./App.css";
import DoctorComponent3 from "./Components/UserSide/DoctorComponent3";
import Footer from "./Components/UserSide/Footer";
import Navbar from "./Components/UserSide/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      <DoctorComponent3/>
    </div>
  );
}

export default App;
