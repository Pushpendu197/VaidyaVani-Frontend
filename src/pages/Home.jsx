import React, { useState } from 'react';
import Header from '../Components/Header';
import Speciality from '../Components/Speciality';
import TopDoctors from '../Components/TopDoctors';
import Testimorals from '../Components/Testimorals';
import FeedbackForm from '../Components/FeedbackForm'; // Import the FeedbackForm component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Head from './Head';
import Assistant from '../Components/Assistant'; // Import the Assistant component

const Home = () => {
    const [showFeedback, setShowFeedback] = useState(false); // State to control feedback chatbox visibility
    const [showAssistant, setShowAssistant] = useState(false); // State to control assistant chatbox visibility

    const toggleFeedback = () => {
        setShowFeedback((prev) => !prev); // Toggle feedback form visibility
    };

    const toggleAssistant = () => {
        setShowAssistant((prev) => !prev); // Toggle assistant chatbox visibility
    };

    return (
        <>
            <div>
                {/* <Header /> */}
                <Head />
                <Speciality />
                <TopDoctors />
                <div>
                    <Testimorals />
                </div>
            </div>

            <div className='button-container'>

                {/* Button to open/close feedback chatbox */}
                <button className='feedback' onClick={toggleFeedback}>
                    {showFeedback ? <div className='xmark'><FontAwesomeIcon icon={faXmark} /></div> : ''}
                    <span className='tooltiptext text-xs'>Feedback</span>
                </button>

                {/* Feedback chatbox */}
                {showFeedback && (
                    <div className="chatbox bg-white border rounded-lg p-4 fixed bottom-10 right-24 shadow-lg">
                        <FeedbackForm /> {/* Feedback form rendered inside chatbox */}
                    </div>
                )}

                {/* Button to open/close assistant chatbox */}
                <button className='assistant' onClick={toggleAssistant}>
                    {showAssistant ? <div className='xmark'><FontAwesomeIcon icon={faXmark} /></div> : ''}
                    <span className='tooltiptext text-xs'>Health Assistant</span>
                </button>

                {/* Assistant chatbox */}
                {showAssistant && (
                    <div className="chatbox bg-white border rounded-lg fixed bottom-2 left-5 shadow-lg">
                        <Assistant /> {/* Assistant rendered inside chatbox */}
                    </div>
                )}

                <NavLink to='/diet'>
                    <button className='diet'>
                        <span className='tooltiptext text-xs '>Diet & Workout Recomendation</span>
                    </button>
                </NavLink>

                <NavLink to='/reminder'>
                    <button className='reminder'>
                        <span className='tooltiptext text-xs'>Medicine Reminder</span>
                    </button>
                </NavLink>

            </div>
        </>
    );
};

export default Home;
