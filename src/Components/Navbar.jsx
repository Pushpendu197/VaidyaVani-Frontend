import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import profile_pic from '../assets/profile_pic.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLanguage, faTruckMedical, faXmark } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../assets/assets';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    const [showTranslate, setShowTranslate] = useState(false);

    //for outside click 
    const translateRef = useRef(null);

    // Function to hide dropdown after language selection or clicking outside
    const handleClickOutside = (event) => {
        if (translateRef.current && !translateRef.current.contains(event.target)) {
            setShowTranslate(false);
        }
    };

    // Detect clicks outside the dropdown to close it
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    // Load Google Translate script and initialize it
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,hi,bn', // English, Hindi, Bengali
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                }, 'google_translate_element');
            };
        };

        if (showTranslate) {
            addGoogleTranslateScript();
        }
    }, [showTranslate]);

    return (
        <>
            <div className='flex items-center justify-between py-4 mb-4 border-b border-b-gray-400 navBar'>
                <div className='heading cursor-pointer'>
                    <div onClick={() => navigate('/')} className="headingText f_600 text-lg">
                        Vaidya<span className='vani'>Vani</span> <FontAwesomeIcon icon={faTruckMedical} className='text-gray-600' />
                    </div>
                </div>
                <ul className='hidden md:flex items-start gap-5 navitem'>
                    <NavLink to='/'>
                        <li className='py-1 '>Home</li>
                    </NavLink>
                    <NavLink to='/doctors'>
                        <li className='py-1'>Doctors</li>
                    </NavLink>
                    <NavLink to='/about'>
                        <li className='py-1'>About</li>
                    </NavLink>
                    <NavLink to='/contact'>
                        <li className='py-1'>Contact</li>
                    </NavLink>
                    <NavLink to='/blood-bank'>
                        <li className='bg-red-700 text-white rounded-full px-3 py-1'>Blood Bank</li>
                    </NavLink>
                </ul>
                <div className='flex items-center gap-4 relative'>
                    {/* Language Section */}
                    <div
                        className='translate flex text-2xl cursor-pointer'
                        onClick={() => setShowTranslate(!showTranslate)} // Toggle translation dropdown
                    >
                        <FontAwesomeIcon icon={faLanguage} />
                    </div>

                    {/* Google Translate Element - Toggle visibility below the icon */}
                    {showTranslate && (

                        <div id="google_translate_element" ref={translateRef}></div>
                    )}

                    {/* Profile/Logout */}
                    {token ? (
                        <div className='flex items-center cursor-pointer gap-2 group relative'>
                            <img className='w-8 rounded-full' src={profile_pic} alt='' />
                            <FontAwesomeIcon icon={faCaretDown} />
                            <div className='absolute top-0 right-0 w-max text-base pt-14 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 flex flex-col gap-2 p-2'>
                                    <p onClick={() => navigate('my-profile')} className='hover:text-blue-500 cursor-pointer'>My Profile</p>
                                    <hr />
                                    <p onClick={() => navigate('my-appointment')} className='hover:text-blue-500 cursor-pointer'>My Appointments</p>
                                    <hr />
                                    <p onClick={() => setToken(false)} className='btn btn-dark'>Log Out</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className="btn btn-dark rounded-full px-3 py-2 hidden md:block">SignUp</button>
                    )}

                    {/* Mobile Menu */}
                    <img className='w-6 md:hidden cursor-pointer' onClick={() => setShowMenu(true)} src={assets.menu_icon} alt='' />
                </div>
            </div>
        </>
    );
};

export default Navbar;
