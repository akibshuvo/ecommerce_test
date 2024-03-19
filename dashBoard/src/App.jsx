import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home"
import Reg from "./pages/Reg"
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

      <Route path="/" element={<Reg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

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
