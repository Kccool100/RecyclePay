
import "./App.css"
import AboutUs from "./pages/AboutUs/AboutUs"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Detailsconfirm from "./components/Details/Detailsconfirm"
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import SignupConfirmation from "./components/SignUpConfirmation/SignupConfirmation";
import Rpassword from "./components/Rpassword/Rpassword";
import Pickupconfirmed from "./components/PickupConfirmation/Pickupconfirmed";
import ResetPassword from "./components/ResetNewPassword/ResetPassword";
import Pickup from "./pages/Pick/Pickup";
import Terms from "./components/Terms/Terms";
import Admindashboard from "./pages/Admindashboard/Admindashboard";
import Adminmain from "./components/Adminmain/Adminmain";
import Adminsidebar from "./components/Adminsidebar/Adminsidebar";
import Userdashboard from "./pages/Userdashboard/Userdashboard";
import Usermain from "./components/Usermain/Usermain";
import Usersidebar from "./components/Usersidebar/Usersidebar";



function App() {

  return (
    <HashRouter>
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
          <Route path='/Terms' element = {<Terms/>}/>
          <Route path='/Admindashboard' element = {<Admindashboard/>}/>
          <Route path='/Adminmain' element = {<Adminmain/>}/>
          <Route path='/Adminsidebar' element = {<Adminsidebar/>}/>
          <Route path='/Userdashboard' element = {<Userdashboard/>}/>
          <Route path='/Usermain' element = {<Usermain/>}/>
            <Route path='/Usersidebar' element = {<Usersidebar/>}/>


          </Routes>
    </HashRouter>
 
  )
}

export default App
