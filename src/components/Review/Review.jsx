import React, { useState, useContext } from 'react';
import "./Review.css";
import { Theme } from '../Theme/Theme';
import { ThemeContext } from "../../context/ThemeProvider";
import review from "../../assets/Review.png";

const getStyles = (mode) => ({
  background: {
    backgroundColor: Theme[mode].backgroundColor,
  },
  text: {
    color: Theme[mode].color,
  },
  theme: {
    color: Theme[mode].highlight,
  }
});

const Review = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  setTimeout(() => {
    setIsSubmitted(false);
  }, 7000); 

  return (
    <div className='ReviewContainer' style={styles.background}>
      <div className="ReviewCon-box" style={styles.background}>
        <h3 style={styles.text}>Leave a Review</h3>
        <div className="message" style={styles.text}>
          Message
        </div>
        <input type="text" placeholder='Description' />
        <button onClick={handleSubmit}>Send a Message</button>
        {isSubmitted && (
          <div className="alert-container">
            <p>Thank You For Your Review!</p>
            <span>
              We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve and serve you better.
            </span>
            <img src={review} alt="review" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
