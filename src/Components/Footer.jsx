import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container ">
                        <div className="row section-footer">


                            {/* Left side  */}
                            <div className="col-lg-4 col-md-6 textSec ">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>

                                    <h4 className="f_600 headingText">
                                        Vaidya<span className='vani'>Vani</span> <FontAwesomeIcon icon={faTruckMedical} />
                                    </h4>

                                    <p className='sub-para'>Stay informed on the latest hotel updates, special offers, and news. Don't miss out—subscribe to our newsletter today !</p>

                                </div>
                            </div>


                            {/* Right  side  */}
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft " data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18 connect-text py-2">Connect With Us</h3>
                                    <div className="f_social_icon">
                                        <a href="#" style={{ backgroundColor: "#107EEA" }} ><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="#" style={{ backgroundColor: "black" }}><FontAwesomeIcon icon={faGithub} /></a>
                                        <a href="#" style={{ backgroundColor: "#107EEA" }}><FontAwesomeIcon icon={faFacebook} /></a>
                                        <a href="#" style={{ backgroundColor: "#FC0DAF" }}><FontAwesomeIcon icon={faInstagram} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="copyright pb-4">
                                <p>© 2024 Copyright : Pushpendu Dey </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;
