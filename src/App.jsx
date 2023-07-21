import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import User from "./components/user/User";
// import Users from "./pages/Users"
import Home from "./pages/home/home"
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import "./styles/global.scss";

import {
  Route,
  BrowserRouter,
  Outlet,
  Routes,
} from "react-router-dom";








function App() {

 

  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar/>
         <div className="container">
            <div className="menuContainer">
                  <Menu/>
            </div>
              <div className="contentContainer">
                  <Outlet/>
              </div>
            
        </div>
        <Footer/>
      
      </div>
    )
  }

  return (
    <div  >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/users" Component={Users} />
            <Route path="/products" Component={Products} />
            <Route path="/users/:id" Component={User} />
            <Route path="/products/:id" Component={Product} />
          </Route>
          <Route path="/login" Component={Login}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
