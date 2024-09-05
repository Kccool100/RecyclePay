import React from 'react'
import "./Review.css"
const Review = () => {
  return (
    <div className='ReviewContainer'>
      <div className="ReviewCon-box">
        <h3>Leave review</h3>
        <div className="message">
            Message
        </div>
        <input type="text" placeholder='Description' />
        <button>Send a Message</button>
      </div>
    </div>
  )
}

export default Review
