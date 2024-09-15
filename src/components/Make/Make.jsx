
import "./Make.css"
import 'animate.css';
import money from "../../assets/money.png"
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
const Make = () => {
  const {mode} = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div className="MakeContainer" style={styles.background}>
        <h3 style={styles.text}>Make money by Recycling</h3>
      <div className="MakeContainer-holder">
      <div className="txts">
        <p style={styles.text}>Why let waste pile up when you can turn it into something valuable? With RecyclePay, your recycling efforts aren’t just good for the environment they’re good for your wallet too. Join thousands of Lagosians who are earning cash for their recyclables, reducing waste, and making a real difference in their communities. Whether it’s plastic, paper, or metal, every item you recycle adds up to a cleaner city and extra money in your pocket. Plus, by participating, you’re helping to create a sustainable future for generations to come. It’s not just about what you earn today it’s about the positive impact you’re making for tomorrow.</p>
      </div>
      <div className="picture1">
          <img src={money} alt="money" />
     </div>
      
      
   
    </div>
    
  </div>
  )
}

export default Make