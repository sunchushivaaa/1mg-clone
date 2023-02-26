import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/UserSide/Navbar";
import Footer from "./Components/UserSide/Footer";
import FilterPage from "./Components/UserSide/FilterPage";




function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <FilterPage/>
      <Footer />
    </div>
  );
}

export default App;
