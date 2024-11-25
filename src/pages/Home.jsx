import React, { useState } from 'react';
import Speciality from '../Components/Speciality';
import TopDoctors from '../Components/TopDoctors';
import Testimorals from '../Components/Testimorals';
import Head from './Head';



const Home = () => {


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



        </>
    );
};

export default Home;
