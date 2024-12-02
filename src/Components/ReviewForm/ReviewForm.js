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
        <section className="review-form py-10 px-4 ">
            <div className="container mx-auto py-10">
                <div data-aos="fade-up" className="flex flex-col space-y-4 flex-review">
                    <span className="text-3xl font-semibold text-center text-gray-700">Reviews</span>
                    
                    {/* Table Structure */}
                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                        <table className="table-auto w-full text-left text-gray-600">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 font-bold">Serial Number</th>
                                    <th className="px-4 py-2 font-bold">Doctor Name</th>
                                    <th className="px-4 py-2 font-bold">Doctor Specialty</th>
                                    <th className="px-4 py-2 font-bold">Provide Feedback</th>
                                    <th className="px-4 py-2 font-bold">Review Given</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultations.map((consultation) => (
                                    <tr key={consultation.id} className="hover:bg-gray-100">
                                        <td className="px-4 py-2">{consultation.id}</td>
                                        <td className="px-4 py-2">{consultation.doctor}</td>
                                        <td className="px-4 py-2">{consultation.specialty}</td>
                                        <td className="px-4 py-2">
                                            {/* If feedback is not given, show "Click here" to open feedback form */}
                                            {!consultation.feedbackGiven ? (
                                                <button
                                                    onClick={() => handleFeedbackClick(consultation.id)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out"
                                                >
                                                    Provide Feedback
                                                </button>
                                            ) : (
                                                <span className="text-green-500">Feedback Submitted</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-2">
                                            {consultation.feedbackGiven ? consultation.review : "No review yet"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feedback Form Visibility */}
                {showFeedbackForm && (
                    <div className="mt-10">
                        <GiveReviews key={consultationId} onSubmit={handleFormSubmit} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReviewForm;
