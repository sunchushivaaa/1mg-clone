import { Route, Routes } from "react-router-dom";
import Home from "./Pages/UserSide/Home";
import Discover from "./Pages/UserSide/Discover";
import LabTest from "./Pages/UserSide/LabTest";
import Login from "./Pages/UserSide/Login";
import Error from "./Pages/UserSide/Error";
import Cart from "./Pages/UserSide/Cart";
import ConsultDoctor from "./Pages/UserSide/ConsultDoctor";
import DoctorComponent3 from "./Components/UserSide/DoctorComponent3";
import Doctorsymptoms from "./Components/UserSide/Doctorsymptoms";
import DoctorFinal from "./Components/UserSide/DoctorFinal";
import Payment from "./Components/UserSide/Payment";
import Register from "./Pages/UserSide/Register";
import FilterPage from "./Components/UserSide/FilterPage";
import PrivateRoute from "./Components/UserSide/PrivateRoute";
import ProductDetail from "./Pages/UserSide/ProductDetail";
import Careplan from "./Components/UserSide/Careplan";
import Covid from "./Components/UserSide/Covid";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/labtest" element={<LabTest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/medicines" element={<FilterPage/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/consultdoctor" element={<ConsultDoctor />} />
      <Route path="/abcd/" element={<DoctorComponent3/>}/>
      <Route path="/symptoms" element={<Doctorsymptoms/>}/>
      <Route path="/doctor_final" element={<DoctorFinal/>}/>
      <Route path="/payment" element={<Payment/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/medicinesdetails" element={<ProductDetail/>}/>
      <Route path="/careplan" element={<Careplan/>}/>
      <Route path="/covid" element={<Covid/>}/>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}
