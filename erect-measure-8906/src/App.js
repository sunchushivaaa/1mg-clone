import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/UserSide/Navbar";
import Footer from "./Components/UserSide/Footer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
