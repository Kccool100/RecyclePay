import "./Recyclables.css"
import Carton from "../../assets/Carton.png"
import Paper from "../../assets/Paper.png"
import Nylon from "../../assets/Nylon.png"
import Bottle from "../../assets/Bottle.png"
import Metal from "../../assets/Metal.png"
import Plastic from "../../assets/Plastic.png"

import { useContext} from "react"
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider" 


const getStyles = (mode) =>({
  background: {
      backgroundColor: Theme[mode].backgroundColor,
     
  },
  text:{
      color:Theme[mode].color
  },
  theme: {
      color:Theme[mode].highlight

  }
});
const Recyclables = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="RecyclablesContainer" >
      <div className="RecyclablesContainer-holder" style={styles.background}>
        <div className="subhead">
        <h2 style={styles.text}>Recyclables</h2>
        <span style={styles.text}>Here are the list of item we take from our customer</span>
        </div>
    
      <div className="box-holder" style={styles.background}>
      <div className="imgContainer" style={styles.background}>
        <div className="box" style={styles.background}>
          <img src={Carton} alt="Carton" />
          <p style={styles.text}>Carton</p>
        </div>
        <div className="box" style={styles.background}>
        <img src={Paper} alt="Paper" />
        <p style={styles.text}>Paper</p>
        </div>
        <div className="box" style={styles.background}>
        <img src={Nylon} alt="Nylon" />
        <p style={styles.text}>Nylon</p>
        </div>
      </div>
      <div className="imgContainer">
        <div className="box" style={styles.background}>
        <img src={Bottle} alt="Bottle" />
        <p style={styles.text}>Bottle</p>
        </div>
        <div className="box" style={styles.background}>
        <img src={Metal} alt="Metal" />
        <p style={styles.text}>Metal</p>
        </div>
        <div className="box" style={styles.background}>
        <img src={Plastic} alt="Plastic" />
        <p style={styles.text}>Plastic</p>
        </div>
      </div>
      </div>
      </div>
      </div>

  )
}

export default Recyclables