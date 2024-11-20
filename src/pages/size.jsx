import React, { useEffect } from 'react';
import { initGalaxy } from '../Components/StarBackground'; // Import galaxy animation script
import './contact.css';

function Contact() {
    useEffect(() => {
        // Initialize galaxy animation
        initGalaxy();
    }, []);

    return (
        <>
            <div className="contact-container">
                <div className="container">
                    <div className='text-center'>
                        <p className='text-2xl font-semibold'>Stay Connected with Us : </p>
                        <p className='text-sm mt-2'>Submit the form and we'll get back to you promptly.</p>
                    </div>
                    <div className="row containers">
                        <div className="col-8">
                            <div className='map'>
                                <div className='map'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471559.9002335208!2d88.12803756270945!3d22.576794791705975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1714890553509!5m2!1sen!2sin"
                                        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <form action='https://formspree.io/f/xnnayovq' method='POST' className="contact-form pb-5 p-3 rounded-lg">
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Name : </label>
                                    <input type="text" className="form-control bg-secondBody" id="name" name='username' placeholder="Enter your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address : </label>
                                    <input type="email" className="form-control bg-secondBody" id="email" name='email' placeholder="name@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Message : </label>
                                    <textarea className="form-control bg-secondBody" id="textbox" name='message' rows="4" placeholder="Enter message Here ..." required></textarea>
                                </div>
                                <button type='submit' className='btn btn-warning'>Lets Collaborate</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
