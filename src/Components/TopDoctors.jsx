import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import '../index.css'

const TopDoctors = () => {

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)

    return (
        <>
            <div className='suggestion flex flex-col items-center gap-4 py-4 md:mx-10 '>
                <h1 className='text-2xl font-medium'>Suggested Doctors </h1>
                <p className='sm:w-1/3 text-center text-sm'></p>
                <div className='w-full grid grid-cols-auto gap-2 pt-5 gap-y-6 px-3 sm:px-0'>
                    {doctors.slice(0, 5).map((item, index) => (

                        <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-gray-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 doctorList' key={index}>

                            <img className='' src={item.image} alt='' />

                            <div className='p-3'>
                                <div className='flex items-center gap-2 text-xs text-center text-green-700 '>
                                    <p className='w-2 h-2 bg-green-600 rounded-full '></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-base text-gray-900 font-semibold'>{item.name}</p>
                                <p className='text-sm text-gray-600'>{item.speciality}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='btn btn-warning'>More Doctors</button>
            </div>


        </>
    )
}

export default TopDoctors