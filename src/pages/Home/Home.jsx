import "./Home.css"
import Hero from "../../components/Hero/Hero"
import Make from "../../components/Make/Make"
import What from "../../components/What/What"
import Keep from "../../components/Keep/Keep"
import Recyclables from "../../components/Recyclables/Recyclables"
import Best from "../../components/Best/Best"
import Footer from "../../components/Footer/Footer"
import Slider from "../../components/Slider/Slider"
import Our from "../../components/Our/Our"
import Header from "../../components/Header/Header"
const Home = () => {
  return (
    <div className="HomeContainer">
        <Header/>
        <Hero/>
        <Make />
        <Keep />
        <Our />
        <What/>
        <Best />
        <Slider />
        <Recyclables />
        <Footer />
    </div>
  )
}

export default Home