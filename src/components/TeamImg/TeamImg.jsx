import React from 'react'
import "./TeamImg.css"
import williams from "../../assets/williams.png"
import ife from "../../assets/ife.png"
import kc from "../../assets/kc.png"
import folake from "../../assets/folake.png"
import tony from "../../assets/tony.png"
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
const TeamImg = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className='TeamImgContainer' style={styles.background}>
      <div className="ImgContainer" style={styles.background}>
        <div className="ImgCon" style={styles.background}>
            <div className="ImG">
                <img src={williams} alt="williams" />
            </div>
            <div className="names">
                <p style={styles.text}>Williams Olagoke</p>
               <p style={styles.text}> Product Designer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={ife} alt="ife" />
            </div>
            <div className="names">
                <p style={styles.text}>Adenekan Ifeoluwa</p>
               <p style={styles.text}> Frontend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={kc} alt="kc" />
            </div>
            <div className="names">
                <p style={styles.text}>Kelechi Anyim </p>
               <p style={styles.text}> Frontend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={folake} alt="folake" />
            </div>
            <div className="names">
                <p style={styles.text}>Folake Racheal</p>
               <p style={styles.text}> Backend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={tony} alt="tony" />
            </div>
            <div className="names">
                <p style={styles.text}>Eji Anthony</p>
               <p style={styles.text}> Backend Developer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TeamImg
