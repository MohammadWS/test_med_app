import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewForm.css";
import GiveReviews from "../GiveReviews/GiveReviews";

const ReviewForm = () => {
  // Sample data for consultations (doctor details, feedback provided)
  const consultations = [
    { id: 1, doctor: "Dr. Smith", specialty: "Cardiologist", feedbackGiven: false },
    { id: 2, doctor: "Dr. Lee", specialty: "Dermatologist", feedbackGiven: true, review: "Very thorough consultation." },
    { id: 3, doctor: "Dr. Johnson", specialty: "Pediatrician", feedbackGiven: false },
  ];

  // State to manage feedback form visibility
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleFeedbackClick = (id) => {
    // Navigate to the feedback form page for the selected consultation
    setShowFeedbackForm(true);
  };

  return (
    <section className="hero-section">
      <div>
        <h4>Consultation Reviews</h4>
        <div data-aos="fade-up" className="flex-hero">
          {/* Table Structure */}
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Specialty</th>
                <th>Provide Feedback</th>
                <th>Review Given</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consultation) => (
                <tr key={consultation.id}>
                  <td>{consultation.id}</td>
                  <td>{consultation.doctor}</td>
                  <td>{consultation.specialty}</td>
                  <td>
                    {/* If feedback is not given, show "Click here" to open feedback form */}
                    {!consultation.feedbackGiven ? (
                      <button onClick={() => handleFeedbackClick(consultation.id)}>
                        Provide Feedback
                      </button>
                    ) : (
                      <span>Feedback Submitted</span>
                    )}
                  </td>
                  <td>{consultation.feedbackGiven ? consultation.review : "No review yet"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feedback Form Visibility */}
        {showFeedbackForm && (
          <GiveReviews />   
        )}
      </div>
    </section>
  );
};

export default ReviewForm;
