import "./What.css";
import Frame2 from "../../assets/Frame2.png"

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
const What = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="WhatContainer" style={styles.background}>
          <h3 style={styles.text}>What is Recycling ?   </h3>
      <div className="WhatContainer-holder">
      <div className="picture4">
        <img src={Frame2} alt="Frame2" />

        </div>
        <div className="texts">
          <p style={styles.text}>Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash and turning them into new products. This process helps reduce the waste that ends up in landfills, conserves natural resources like timber, water, and minerals, and saves energy. By recycling, you’re not only reducing pollution but also contributing to the circular economy, where materials are continuously reused rather than wasted. It’s an essential step towards creating a more sustainable and environmentally friendly world.</p>
        </div>
       
     
      </div>
      
    </div>
  )
}

export default What