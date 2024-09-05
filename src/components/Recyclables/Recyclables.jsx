import "./Recyclables.css"
import Carton from "../../assets/Carton.png"
import Paper from "../../assets/Paper.png"
import Nylon from "../../assets/Nylon.png"
import Bottle from "../../assets/Bottle.png"
import Metal from "../../assets/Metal.png"
import Plastic from "../../assets/Plastic.png"

const Recyclables = () => {
  return (
    <div className="RecyclablesContainer">
      <div className="RecyclablesContainer-holder">
        <div className="subhead">
        <h2>Recyclables</h2>
        <span>Here are the list of item we take from our customer</span>
        </div>
    
      <div className="box-holder">
      <div className="imgContainer">
        <div className="box">
          <img src={Carton} alt="Carton" />
          <p>Carton</p>
        </div>
        <div className="box">
        <img src={Paper} alt="Paper" />
        <p>Paper</p>
        </div>
        <div className="box">
        <img src={Nylon} alt="Nylon" />
        <p>Nylon</p>
        </div>
      </div>
      <div className="imgContainer">
        <div className="box">
        <img src={Bottle} alt="Bottle" />
        <p>Bottle</p>
        </div>
        <div className="box">
        <img src={Metal} alt="Metal" />
        <p>Metal</p>
        </div>
        <div className="box">
        <img src={Plastic} alt="Plastic" />
        <p>Plastic</p>
        </div>
      </div>
      </div>
      </div>
      </div>

  )
}

export default Recyclables