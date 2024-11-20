import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar from '../assets/avatar.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimorals.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

const Testimorals = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        // Fetch feedbacks from the backend
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:5010/feedbacks');
                setFeedbacks(response.data);
            } catch (error) {
                console.error("Error fetching feedbacks", error);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <div className='testimoral'>
            <div className='mb-8'>
                <h4 className='mt-24 text-center text-2xl font-medium'>Testimonials</h4>
                <p className='text-sm text-center mt-2'>"" Hear What Our Users Have to Say About Their Experience and Satisfaction with Our Concept ""</p>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide key={index} className='container pt-4 pb-32'>
                        <div className='swiper-client-msg px-8 py-5 border rounded-lg '>
                            <p className='SubText capitalize'>{feedback.feedback}</p>
                        </div>
                        <div className='swiper-client-data flex gap-3 mt-4'>
                            <figure className='cursor-pointer'>
                                <img className='w-10' src={avatar} alt='avatar' />
                            </figure>
                            <div className='client-data-details'>
                                <p className='nametext capitalize'>{feedback.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimorals;
