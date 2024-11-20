// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import group_profiles from '../assets/group_profiles.png';
import header_img from '../assets/header_img.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className='headerSection'>
                {/* <div className='video'>
                    <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/505270091?h=40d3fdd3c3&autoplay=1&muted=1"
                        width="1200"
                        height="1200"
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>

                </div> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='flex flex-col md:flex-row flex-wrap px-6 md:px-10 bg-gradient-to-r from-slate-500 to-zinc-300 rounded-lg'>
                        {/* LEFTSIDE */}
                        <div className='md:w-1/2 flex flex-col justify-center items-start gap-4 md:px-10 m-auto py-10 md:py-[10w] md:mb[-30px]' >
                            <p className='text-white font-semibold text-3x1 md:text-4x1 lg:text-5x1 leading-tight md:leading-tight lg:leading-tight'>Book Appointment</p>
                            <div className=' text-white text-sm' >
                                <img className='w-20' src={group_profiles} alt='' />
                                <p>Doctors are trained medical professionals who diagnose, treat, and prevent illnesses. They provide essential healthcare services, offer guidance on healthy living, and manage patient well-being in various settings.</p>
                            </div>
                            <a href='#speciality' className="btn btn-dark rounded-full px-3 py-2 hidden md:block">Book Appointment <FontAwesomeIcon icon={faCaretDown} /></a>

                        </div>
                        {/* RIGHTSIDE */}
                        <div className='md:w-1/2 relative'>
                            <img className='w-full md:absolute ' src={header_img} alt='' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Header