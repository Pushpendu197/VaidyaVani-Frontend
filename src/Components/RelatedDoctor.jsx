import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import '../index.css'

const RelatedDoctor = ({ speciality, docId }) => {
    //fetch all the doctors from the context file ...
    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const [relatedDoctor, setRelatedDoctors] = useState([])

    //from the props we will filter the realtive doctor and store them in the rel doc 
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsdata = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            // current doctors will be remioved and the realted doctors will be displayed


            setRelatedDoctors(doctorsdata)
        }

    }, [doctors, speciality, docId])



    return (
        <>
            <div className='suggestion flex flex-col items-center gap-4 my-16 md:mx-10'>
                <h1 className='text-lg font-medium'>Suggested Doctors on Same Category </h1>
                <div className='w-full grid grid-cols-auto gap-2 pt-3 gap-y-6 px-3 sm:px-0'>
                    {relatedDoctor.slice(0, 5).map((item, index) => (

                        <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-gray-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 doctorList' key={index}>

                            <img className='' src={item.image} alt='' />

                            <div className='p-4 '>
                                <div className='flex items-center gap-2 text-sm text-center text-green-700 '>
                                    <p className='w-2 h-2 bg-green-600 rounded-full '></p>
                                    <p >Available</p>
                                </div>
                                <p className='text-base text-gray-900 font-semibold'>{item.name}</p>
                                <p className='text-sm text-gray-600'>{item.speciality}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='btn btn-dark p-2 rounded-full text-sm'>More Category</button>
            </div>

        </>
    )
}

export default RelatedDoctor