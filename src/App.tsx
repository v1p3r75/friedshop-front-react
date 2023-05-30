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
import UserAccount, { UserAddress, UserDetails, UserOrders } from "./views/UserAccount"
import AdminPanel from "./views/Admin/AdminPanel"
import DashMain from "./components/Admin/DashMain"
import ProductMain from "./components/Admin/ProductMain"
import RoutePaths from "./config"
import CategoryMain from "./components/Admin/CategoryMain"
import CustomersMain from "./components/Admin/CustomersMain"
import BlogMain from "./components/Admin/BlogMain"
import AdminAccount from "./components/Admin/AdminAccount"
import SlidesMain from "./components/Admin/SlidesMain"
import PrivateRoute from "./components/PrivateRoute"
import RedirectIfAuthenticate from "./components/RedirectIfAuthenticate"

function App() {

  return (
    <Routes>

      <Route path={RoutePaths.home} element={<Home />}></Route>
      <Route path={RoutePaths.shop} element={<Shop />}></Route>
      <Route path={RoutePaths.wishlist} element={<WishList />}></Route>
      <Route path={RoutePaths.blog} element={<BlogPage />}></Route>
      <Route path={RoutePaths.post} element={<PostView />}></Route>
      <Route path={RoutePaths.shopping} element={<ShoppingCart />}></Route>
      <Route element={<PrivateRoute type={0}/>}>
        <Route path={RoutePaths.checkout} element={<Checkout />}></Route>
      </Route>
      <Route path={RoutePaths.contact} element={<ContactUs />}></Route>
      <Route path={RoutePaths.team} element={<TeamMembers />}></Route>
      <Route element={<RedirectIfAuthenticate />} >
        <Route path={RoutePaths.login} element={<Login />}></Route>
        <Route path={RoutePaths.signup} element={<SignUp />}></Route>
      </Route>
      <Route path={RoutePaths.passwordReset} element={<ForgotPassword />}></Route>
      <Route path={RoutePaths.productView} element={<ViewProduct />}></Route>

      {/* USERS ROUTES */}

      <Route element={<PrivateRoute type={0}/>}>
        <Route path={RoutePaths.userAccount} element={<UserAccount />}></Route>
        <Route path={RoutePaths.userOrders} element={<UserAccount currentComponent={<UserOrders />}/>}></Route>
        <Route path={RoutePaths.userAdress} element={<UserAccount currentComponent={<UserAddress />}/>}></Route>
        <Route path={RoutePaths.userDetails} element={<UserAccount currentComponent={<UserDetails />}/>}></Route>
      </Route>

      {/* ADMINS ROUTES */}

      <Route element={<PrivateRoute type={1} />} >
        <Route path={RoutePaths.admin} element={<AdminPanel  currentComponent={<DashMain />} />}></Route>
        <Route path={RoutePaths.adminProducts} element={<AdminPanel  currentComponent={<ProductMain />} />}></Route>
        <Route path={RoutePaths.adminSlides} element={<AdminPanel  currentComponent={<SlidesMain />} />}></Route>
        <Route path={RoutePaths.adminCategories} element={<AdminPanel  currentComponent={<CategoryMain />} />}></Route>
        <Route path={RoutePaths.adminBlog} element={<AdminPanel  currentComponent={<BlogMain />} />}></Route>
        <Route path={RoutePaths.adminCustomers} element={<AdminPanel  currentComponent={<CustomersMain />} />}></Route>
        <Route path={RoutePaths.adminAccount} element={<AdminPanel  currentComponent={<AdminAccount />} />}></Route>
      </Route>

      <Route path="*" element={<PageNotFound />}></Route>

    </Routes>
    
  )
}

export default App
