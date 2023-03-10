import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./views/ForgotPassword"
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import PageNotFound from "./views/PageNotFound"
import Shop from "./views/Shop"
import ViewProduct from "./views/ViewProduct"

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/reset-password" element={<ForgotPassword />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product/:id" element={<ViewProduct />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>

    </Routes>
    
  )
}

export default App
