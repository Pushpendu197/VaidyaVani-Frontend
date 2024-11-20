import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm';


const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const handleFeedbackSubmit = (newFeedback) => {
        console.log('New Feedback Submitted:', newFeedback);
        setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
    };

    return (
        <>
            <div>
                <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
            </div>
        </>
    )
}

export default Feedback