import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home"
import Reg from "./pages/Reg"
import Login from "./pages/Login"
import OtpVerified from "./pages/OtpVerified";
import ForgetPassword from "./pages/ForgetPassword";
import ChangePass from "./pages/ChangePass";
import AdCategory from "./pages/AdCategory";
import Subcate from "./pages/Subcate";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

      <Route path="/" element={<Reg />} ></Route>
      <Route path="/login" element={<Login />} ></Route>

      <Route path="/dashboard" element={<Home />} >
      <Route path="creatcate" element={<AdCategory />} ></Route>
      <Route path="creatsubcate" element={<Subcate />} ></Route>
         
      </Route>

      <Route path="/otpverification/:email" element={<OtpVerified/>} ></Route>
      <Route path="/forgetpass" element={<ForgetPassword/>} ></Route>
      <Route path="/changepass/:token" element={<ChangePass/>} ></Route>

        </Route>
      
    ) 
  );

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
