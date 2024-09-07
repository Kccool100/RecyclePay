import React from 'react'
import "./Dashboard.css"
import logo from "../../assets/recycleLogo"
const Dashboard = () => {
  return (
    <div className='DashboardContainer'>
        <div className="sidebar">
            <div className="dashLogo">
                <img src={logo} alt="logo" />
            </div>
            <div className="app">
                <p>Application</p>
                
            </div>

        </div>
        <div className="UserCon">

        </div>

      
    </div>
  )
}

export default Dashboard
