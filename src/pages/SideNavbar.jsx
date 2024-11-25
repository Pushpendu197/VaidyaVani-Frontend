import React, { useState } from 'react'
import FeedbackForm from '../Components/FeedbackForm'; // Import the FeedbackForm component
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Assistant from '../Components/Assistant'; // Import the Assistant component
import './Home.css'

const SideNavbar = () => {
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
            <div className='sideNavbar'>

                {/* Button to open/close feedback chatbox */}
                <button className='feedback ' onClick={toggleFeedback}>
                    {showFeedback ? <div className='xmark'><FontAwesomeIcon icon={faXmark} /></div> : ''}
                    <span className='tooltiptext text-xs mt-2 '>Feedback</span>
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
                    <span className='tooltiptext text-xs mt-2'>Seva Mantra</span>
                </button>

                {/* Assistant chatbox */}
                {showAssistant && (
                    <div className="chatbox bg-white border rounded-lg fixed bottom-2 left-5 shadow-lg">
                        <Assistant /> {/* Assistant rendered inside chatbox */}
                    </div>
                )}

                <NavLink to='/diet'>
                    <button className='diet'>
                        <span className='tooltiptext text-xs mt-2 '>Swastha Vikas</span>
                    </button>
                </NavLink>

                <NavLink to='/reminder'>
                    <button className='reminder'>
                        <span className='tooltiptext text-xs mt-2'>Aushadhi Smriti</span>
                    </button>
                </NavLink>

                <NavLink to='/medicom'>
                    <button className='medicom'>
                        <span className='tooltiptext text-xs mt-2'>MediRecom</span>
                    </button>
                </NavLink>

                <NavLink to='/prescription'>
                    <button className='prescription'>
                        <span className='tooltiptext text-xs mt-2'>OushadhaPatra</span>
                    </button>
                </NavLink>

                <NavLink to='/disease'>
                    <button className='disease'>
                        <span className='tooltiptext text-xs mt-2'>SwasthyaSanket</span>
                    </button>
                </NavLink>

            </div>
        </>
    )
}

export default SideNavbar