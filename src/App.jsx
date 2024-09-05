import "./App.css"
import Header from "./components/Header/Header"
import AboutUs from "./pages/AboutUs/AboutUs"
import Home from "./pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {

  return (
    <HashRouter>
       <Header />
       <Routes>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/About' element = {<AboutUs/>}/>
          <Route path='/Contact' element = {<ContactUs/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/SignUp' element = {<SignUp/>}/>
       </Routes>
    </HashRouter>
 
  )
}

export default App