import React, { useState } from 'react';
import './GiveReviews.css'

// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setSubmittedMessage(`Name: ${formData.name}, Review: ${formData.review}, Rating: ${formData.rating}`);
      setShowWarning(false); // Hide warning if all fields are filled
      // Reset the form data after successful submission
      setFormData({
        name: '',
        review: '',
        rating: 0
      });
    } else {
      // If fields are not filled, show a warning message
      setShowWarning(true);
    }
  };

  return (
    <div className="form-container col-6">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h2 className="form-subtitle"><strong>Give Your Review</strong></h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="review" className="form-label">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="rating" className="form-label">Rating:</label>
            <input
              id="rating"
              type="number"
              max={5}
              min={1}
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Submit button for form submission */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>

      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div className="submitted-message">
          <h3 className="submitted-title">Submitted Message:</h3>
          <p className="submitted-content">{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;


