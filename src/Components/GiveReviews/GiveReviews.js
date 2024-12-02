import React, { useState } from 'react';
import './GiveReviews.css';

// Function component for giving reviews
function GiveReviews({ onSubmit, consultationId }) {
    // State variables using useState hook
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0); // New state for rating
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form has been submitted

    // Function to handle button click event
    const handleButtonClick = () => {
        setShowForm(true);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled before submission
        if (name && review && rating > 0) {
            setSubmittedMessage(`Name: ${name}, Review: ${review}, Rating: ${rating}`);
            setShowWarning(false); // Hide warning if all fields are filled
            setIsSubmitted(true); // Set the form as submitted
            onSubmit({ name, review, rating, consultationId }); // Pass rating with other data
        } else {
            // If fields are not filled, show a warning message
            setShowWarning(true);
        }
    };

    // Function to handle rating selection (either stars or numbers)
    const handleRatingChange = (newRating) => {
        if (!isSubmitted) {
            setRating(newRating);
        }
    };

    return (
        <div className="parent-container">
            <div className="form-container col-6">
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <div className="form-subtitle">Give Your Review</div>
                    {/* Display warning message if not all fields are filled */}
                    {showWarning && <p className="warning">Please fill out all fields.</p>}

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                            disabled={isSubmitted} // Disable input fields after submission
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="review" className="form-label">Review:</label>
                        <textarea
                            id="review"
                            name="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="form-textarea"
                            disabled={isSubmitted} // Disable input fields after submission
                        />
                    </div>

                    {/* Rating selector */}
                    <div className="form-group">
                        <label htmlFor="rating" className="form-label">Rating:</label>
                        <div className="rating-selector">
                            {/* Display stars or numbers */}
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`rating-star ${star <= rating ? 'selected' : ''}`}
                                    onClick={() => handleRatingChange(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Submit button for form submission */}
                    <button type="submit" className="submit-btn" disabled={isSubmitted}>
                        Submit
                    </button>
                </form>

                {/* Display the submitted message if available */}
                {submittedMessage && (
                    <div className="submitted-message">
                        <h3 className="submitted-title">Submitted Message:</h3>
                        <p className="submitted-content">{submittedMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GiveReviews;
