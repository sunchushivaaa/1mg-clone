import "./App.css";
import Footer from "./Components/UserSide/Footer";
import Navbar from "./Components/UserSide/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
