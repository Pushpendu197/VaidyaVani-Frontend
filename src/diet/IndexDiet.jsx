import React, { useState } from 'react';
import './indexDiet.css';
import ModalDiet from './ModalDiet';

const IndexDiet = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        setResponse(null); // Reset previous response
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('http://localhost:5000/recommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorResponse = await res.json();
                throw new Error(errorResponse.error || 'Unknown server error');
            }

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error('Error fetching recommendations:', err);
            setError(err.message);
        }
    };

    return (
        <div className="container">
            <h2 className="text-lg">Personalized Diet & Workout Planner</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-column">
                        <label>Dietary Preferences:</label>
                        <input type="text" name="dietary_preferences" placeholder="e.g., vegetarian, high-protein" required />

                        <label>Lifestyle Factors:</label>
                        <input type="text" name="lifestyle_factors" placeholder="e.g., active, sedentary" required />

                        <label>Health Conditions:</label>
                        <input type="text" name="health_conditions" placeholder="e.g., diabetes, high blood pressure" required />
                    </div>

                    <div className="form-column">
                        <label>Fitness Goals:</label>
                        <input type="text" name="fitness_goals" placeholder="e.g., weight loss, muscle gain" required />

                        <label>Dietary Restrictions:</label>
                        <input type="text" name="dietary_restrictions" placeholder="e.g., gluten-free, lactose-intolerant" required />

                        <label>Your Query:</label>
                        <textarea name="user_query" placeholder="Describe your goal briefly" required></textarea>
                    </div>
                </div>

                <button className='buttondiet' type="submit">Get Recommendations</button>
            </form>

            {error && <p className="error">Error: {error}</p>}

            {/* {response && (
                <div className="response">
                    {response.error ? (
                        <p>{response.error}</p>
                    ) : (
                        <>
                            <h3>Raw Response</h3>
                            <pre>{response.raw_text}</pre>
                        </>
                    )}
                </div>
            )} */}
            {response && (
                <div className="response">
                    {response.error ? (
                        <p>{response.error}</p>
                    ) : (
                        <>
                            <h3>Raw Response</h3>
                            <pre>{response.raw_text}</pre>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default IndexDiet;
