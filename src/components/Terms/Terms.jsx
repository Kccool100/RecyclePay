import React from 'react'
import './Terms.css'
import { Link } from "react-router-dom";


const Terms = () => {
    return (
        <div className='tems-container'>
            <div className='termshead'>
                <h1> Term And Condition</h1>
            </div>
            <div className='termstext'>
                <h1>Terms and Conditions of Use for RecyclePay </h1>
                <h5>By using RecyclePay, you agree to the following terms and conditions. Please read them carefully before engaging with our services.</h5>
                <br />
                <h1> 1.⁠ ⁠Eligibility</h1>
                <p>•	Users must be at least 18 years of age to register and use the RecyclePay platform.
                </p>
                <p>•	All account information provided during registration must be accurate, up-to-date, and complete. You are responsible for maintaining the confidentiality of your account information.</p>
                <p>account information.</p>

                <h1>2.⁠ ⁠Collection and Pickup</h1>
                <p> 	•	RecyclePay offers a waste pickup service with a minimum requirement of 10 kilograms per pickup request.</p>
                <p>

                    •	Upon scheduling a pickup, users agree to ensure that the waste provided meets the required minimum weight.</p>
                <p>	•	Users are responsible for ensuring that the waste is properly sorted and accessible for collection at the agreed pickup time.</p>
                  <h1>3.⁠ ⁠Payment Terms</h1>
                  <p>	•	RecyclePay pays ₦400 per kilogram of recyclable materials, regardless of the type of material (plastic, paper, or metal)</p>
                  <p>	•	Payments will be made promptly after the waste is collected and verified, either through bank transfer or cash.</p>
                  <h1>4.⁠ ⁠False Reporting</h1>
                  <p>	•	RecyclePay reserves the right to verify the weight of recyclables upon collection. If it is found that a user has misrepresented the weight of their recyclables or</p>
                  <p> attempted to schedule a pickup below the minimum weight of 10kg, the user’s account will be flagged for review</p>
                  <p>	•	Penalty for False Reporting: Any user found to have deliberately falsified the weight of their recyclables will have their account permanently blocked from the</p>
                 <p>  RecyclePay platform, and any pending payments will be withheld.</p>
                   <h1> 5.⁠ ⁠Prohibited Use</h1>
                   <p>•	Users must not engage in any illegal activities while using the RecyclePay platform.</p>
                   <p>. Anoid harassment, or fraudulent activities toward RecyclePay employees or other users will result in the immediate termination of the user’s account</p>
                    <h1>6.⁠ ⁠Termination</h1>
                    <p>	•	RecyclePay reserves the right to terminate or suspend any account that violates these terms and conditions, engages in fraudulent activity, or otherwise misuses the </p>
                    <p>platform.</p>
                    <h1>7.⁠ ⁠Privacy</h1>
                    <p>	•	All personal information provided to RecyclePay will be handled in accordance with our privacy policy. We are committed to protecting your data and ensuring your </p>
                    <p>privacy.</p>
                    <h1>8.⁠ ⁠Changes to Terms</h1>
                    <p>•	RecyclePay reserves the right to update or modify these terms and conditions at any time. Users will be notified of any significant changes to these terms.</p>
                  <div className='foot'>
                    <Link to="/SignUp" style={{textDecoration:"none"}}>
                      <button className='butterms'> Agree & Continue</button>
                    </Link>
                  </div>
            </div>





        </div>
    )
}

export default Terms
