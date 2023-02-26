import "./App.css";
import MainRoutes from "./MainRoutes";
import Navbar from "./Components/UserSide/Navbar";
import Footer from "./Components/UserSide/Footer";
import FilterPage from "./Components/UserSide/FilterPage";




function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <MainRoutes />
      <Footer /> */}
      <FilterPage/>
    </div>
  );
}

export default App;
