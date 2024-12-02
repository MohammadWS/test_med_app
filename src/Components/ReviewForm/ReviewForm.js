import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewForm.css";
import GiveReviews from "../GiveReviews/GiveReviews";

const ReviewForm = () => {
    // State to manage consultations and form visibility
    const [consultations, setConsultations] = useState([
        { id: 1, doctor: "Dr. Smith", specialty: "Cardiologist", feedbackGiven: false },
        { id: 2, doctor: "Dr. Lee", specialty: "Dermatologist", feedbackGiven: true, review: "Very thorough consultation." },
        { id: 3, doctor: "Dr. Johnson", specialty: "Pediatrician", feedbackGiven: false },
    ]);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [consultationId, setConsultationId] = useState(null);

    const handleFeedbackClick = (id) => {
        // Set consultationId and show the feedback form
        setConsultationId(id);
        setShowFeedbackForm(true);
    };

    const handleFormSubmit = (formData) => {
        // Update the consultations state with the feedback data
        const updatedConsultations = consultations.map((consultation) => {
            if (consultation.id === consultationId) {
                return {
                    ...consultation,
                    feedbackGiven: true,
                    review: formData.review + ' ' + formData.rating,
                };
            }
            return consultation;
        });

        // Set the updated consultations state
        setConsultations(updatedConsultations);

        // Close the feedback form
        setShowFeedbackForm(false);
    };

    return (
        <section className="review-form">
            <div>

                <div data-aos="fade-up" className="flex-review">
                    <span className="review-title">Reviews</span>
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
                    <GiveReviews key={consultationId} onSubmit={handleFormSubmit} />
                )}
            </div>
        </section>
    );
};

export default ReviewForm;
