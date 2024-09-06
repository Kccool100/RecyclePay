
import "./Make.css"
import money from "../../assets/money.png"
import 'animate.css';
const Make = () => {

  return (
    <div className="MakeContainer">
        <h3>Make money by Recycling</h3>
      <div className="MakeContainer-holder">
      <div className="txts">
        <p>Why let waste pile up when you can turn it into something valuable? With RecyclePay, your recycling efforts aren’t just good for the environment they’re good for your wallet too. Join thousands of Lagosians who are earning cash for their recyclables, reducing waste, and making a real difference in their communities. Whether it’s plastic, paper, or metal, every item you recycle adds up to a cleaner city and extra money in your pocket. Plus, by participating, you’re helping to create a sustainable future for generations to come. It’s not just about what you earn today it’s about the positive impact you’re making for tomorrow.</p>
      </div>
      <div className="picture1">
          <img src={money} alt="money" />
     </div>
      
      
   
    </div>
    
  </div>
  )
}

export default Make