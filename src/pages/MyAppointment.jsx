import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

    const { doctors } = useContext(AppContext)

    return (
        <>
            <div className='appointments pb-28'>
                <p className='pb-3 mt-12 border-b font-medium text-lg'>My Appointments</p>
                <div>
                    {/* MAP THE DOCTORS FROM THE APP CONTEXT  */}
                    {doctors.slice(0, 3).map((item, index) => (
                        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                            <div>
                                <img className='w-32 cursor-grab border' src={item.image} alt='' />

                            </div>
                            <div className='flex-1 text-sm '>
                                <p className='font-semibold'>{item.name}</p>
                                <p>{item.speciality}</p>
                                <p className='text-zinc-700 font-medium mt-1'>Address : </p>
                                <p className='text-xs'>{item.address.line1}</p>
                                <p className='text-xs'>{item.address.line2}</p>
                                <p className='text-sm mt-1'><span className='text-sm font-medium text-neutral-700'>Date & Time : </span> 25 , July , 2024 | 8.30 PM</p>
                            </div>
                            <div></div>
                            <div className='flex flex-col gap-3 justify-end'>
                                <button className='text-sm border p-2 rounded-sm text-center sm:min-w-48'>Pay Online</button>
                                <button className='text-sm border p-2 rounded-sm text-center sm:min-w-48'>Cancel Appointment</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default MyAppointment