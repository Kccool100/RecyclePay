
import "./App.css"
import Header from "./components/Header/Header"
import AboutUs from "./pages/AboutUs/AboutUs"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Detailsconfirm from "./components/Details/Detailsconfirm"
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Pick from "./pages/Pick/Pickup";
import SignupConfirmation from "./components/SignUpConfirmation/SignupConfirmation";
import Rpassword from "./components/Rpassword/Rpassword";
import Pickupconfirmed from "./components/PickupConfirmation/Pickupconfirmed";
import ResetPassword from "./components/ResetNewPassword/ResetPassword";
import Pickup from "./pages/Pick/Pickup";

function App() {

  return (
    <HashRouter>
       {/* <Header /> */}
       <Routes>
       <Route path='/' element = {<Home/>}/>
          <Route path='/About' element = {<AboutUs/>}/>
          <Route path='/Contact' element = {<ContactUs/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/SignUp' element = {<SignUp/>}/>
          <Route path='/forgetpassword' element = {<ForgetPassword/>}/>
          <Route path='/Pick' element = {<Pickup/>}/>
          <Route path='/SignupConfirmation' element = {<SignupConfirmation/>}/>
          <Route path='/Rpassword' element = {<Rpassword/>}/>
          <Route path='/Detailsconfirm' element = {<Detailsconfirm/>}/>
          <Route path='/Pickupconfirmed' element = {<Pickupconfirmed/>}/>
          <Route path='/ResetPassword' element = {<ResetPassword/>}/>
          </Routes>
    </HashRouter>
 
  )
}

export default App
