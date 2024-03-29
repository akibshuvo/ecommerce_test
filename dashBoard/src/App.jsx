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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

      <Route path="/" element={<Reg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/otpverification/:email" element={<OtpVerified/>} />

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
