import "./Best.css";
import Frame4 from "../../assets/Frame4.png"

const Best = () => {
  return (
    <div className="BestContainer">
        <h3>Best Pickup system </h3>
    <div className="BestContainer-holder">
      <div className="picture">
        <img src={Frame4} alt="Frame4" />
      </div>
      <div className="text">
        <p>At RecyclePay, we take pride in offering the best waste pickup system tailored to meet your needs. By deploying a fleet of nimble bikes and sturdy trucks, we can swiftly collect your recyclables from any location across Lagos. Our small bikes are perfect for navigating through tight urban spaces and reaching areas where larger vehicles can’t go, ensuring that no recyclable is left behind. For bigger loads, our trucks are ready to handle the job, making sure that all waste is picked up efficiently. This dual approach allows us to provide a reliable and prompt service, giving you peace of mind knowing that your waste will be collected on time, every time. With RecyclePay, you’re not just recycling you’re choosing a service that values both your time and the environment.</p>
      </div>
   
    </div>
    
  </div>
)
};

export default Best;
