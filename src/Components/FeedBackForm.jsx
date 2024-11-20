import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ onFeedbackSubmit = () => { } }) => { // Default empty function
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState(''); // For displaying validation error messages

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the feedback contains at least 8 words
        const wordCount = feedback.trim().split(/\s+/).length;
        if (wordCount < 8) {
            setError('Feedback must contain at least 8 words.');
            return; // Prevent submission
        }

        try {
            const response = await axios.post('http://localhost:5010/feedback', { name, feedback });
            onFeedbackSubmit(response.data); // Call the passed function
            setName('');
            setFeedback('');
            setError(''); // Clear the error if submission is successful
        } catch (error) {
            console.error("Error submitting feedback", error);
            setError('Error submitting feedback. Please try again later.');
        }
    };

    return (
        <div className="feedback-form">
            <h4 className="text-center text-lg font-medium mb-8">Submit Your Feedback 👉👈</h4>
            {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded-lg"
                    required
                />
                <textarea
                    placeholder="Write Your Feedback (min 8 words)"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="border p-2 rounded-lg"
                    rows="5"
                    required
                />
                <button type="submit" className="btn btn-primary py-2 px-4 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
