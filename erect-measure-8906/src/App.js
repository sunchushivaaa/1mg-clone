import "./App.css";
import Footer from "./Components/UserSide/Footer";
import Information from "./Components/UserSide/Information";
import Navbar from "./Components/UserSide/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
