import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./views/ForgotPassword"
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import PageNotFound from "./views/PageNotFound"
import Shop from "./views/Shop"
import ViewProduct from "./views/ViewProduct"
import BlogPage from "./views/BlogPage"
import WishList from "./views/WishList"
import ContactUs from "./views/ContactUs"
import ShoppingCart from "./views/ShoppingCart"
import Checkout from "./views/Checkout"
import TeamMembers from "./views/TeamMembers"
import PostView from "./views/PostView"
import UserAccount from "./views/UserAccount"
import AdminPanel from "./views/Admin/AdminPanel"
import DashMain from "./components/Admin/DashMain"
import ProductMain from "./components/Admin/ProductMain"
import RoutePaths from "./config"
import CategoryMain from "./components/Admin/CategoryMain"
import CustomersMain from "./components/Admin/CustomersMain"

function App() {

  return (
    <Routes>

      <Route path={RoutePaths.home.path} element={<Home />}></Route>
      <Route path={RoutePaths.shop.path} element={<Shop />}></Route>
      <Route path={RoutePaths.wishlist.path} element={<WishList />}></Route>
      <Route path={RoutePaths.blog.path} element={<BlogPage />}></Route>
      <Route path={RoutePaths.post.path} element={<PostView />}></Route>
      <Route path={RoutePaths.shopping.path} element={<ShoppingCart />}></Route>
      <Route path={RoutePaths.checkout.path} element={<Checkout />}></Route>
      <Route path={RoutePaths.contact.path} element={<ContactUs />}></Route>
      <Route path={RoutePaths.team.path} element={<TeamMembers />}></Route>
      <Route path={RoutePaths.login.path} element={<Login />}></Route>
      <Route path={RoutePaths.signup.path} element={<SignUp />}></Route>
      <Route path={RoutePaths.passwordReset.path} element={<ForgotPassword />}></Route>
      <Route path={RoutePaths.productView.path} element={<ViewProduct />}></Route>
      <Route path={RoutePaths.userAccount.path} element={<UserAccount />}></Route>

      {/* ADMINS ROUTES */}

      <Route path={RoutePaths.admin.path} element={<AdminPanel  currentComponent={<DashMain />} />}></Route>
      <Route path={RoutePaths.adminProducts.path} element={<AdminPanel  currentComponent={<ProductMain />} />}></Route>
      <Route path={RoutePaths.adminCategories.path} element={<AdminPanel  currentComponent={<CategoryMain />} />}></Route>
      <Route path={RoutePaths.adminCustomers.path} element={<AdminPanel  currentComponent={<CustomersMain />} />}></Route>



      <Route path="*" element={<PageNotFound />}></Route>

    </Routes>
    
  )
}

export default App
