import React from 'react';

const ModalDiet = ({ recommendations }) => {
    if (!recommendations) {
        return (
            <div className="container">
                <h2>Your Personalized Recommendations</h2>
                <p>No recommendations available. Please try again.</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Your Personalized Recommendations</h2>
            <div>
                <h3>Diet Recommendations:</h3>
                <ul>{recommendations.diet_types.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
            <div>
                <h3>Workout Options:</h3>
                <ul>{recommendations.workouts.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
            <div>
                <h3>Breakfast Suggestions:</h3>
                <ul>{recommendations.breakfasts.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
            <div>
                <h3>Dinner Suggestions:</h3>
                <ul>{recommendations.dinners.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
            <div>
                <h3>Additional Tips:</h3>
                <ul>{recommendations.additional_tips.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
        </div>
    );
};

export default ModalDiet;
