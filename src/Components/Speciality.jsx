import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
    return (
        <>
            <div id='speciality' className='flex flex-col items-center py-16 gap-2'>
                <h2 className='text-2xl font-medium'>Speciality</h2>
                <p></p>
                <div className='flex sm:justify-center gap-4 py-4 w-full overflow-scroll'>
                    {specialityData.map((item, index) => (
                        <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-x5 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                            <img className='w-16 sm:w-30 mb-2 p-2 rounded-lg bg-blue-100' src={item.image} alt='' />
                            <p className='text-sm text-medium'>{item.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Speciality