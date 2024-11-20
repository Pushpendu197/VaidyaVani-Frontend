import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import './Home.css'
import { faGraduationCap, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RelatedDoctor from '../Components/RelatedDoctor'

const Appointment = () => {
    const { docId } = useParams()
    const { doctors, currency } = useContext(AppContext)
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THUSDAY', 'FRIDAY', 'SATURDAY']
    const [docInfo, setDocInfo] = useState(null)

    // state variable for doctor slot ....
    const [docSlot, setDocSlot] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
        // console.log(docInfo)

    }

    // const get availble slots:
    const getAvailbleSlots = async () => {
        setDocSlot([])

        //getting current data
        let today = new Date()

        // calculate 7 days from today ....
        for (let i = 0; i < 7; i++) {
            //getting date with index ....
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)   //todays date + 1 upto 7 days [7 days from now]


            //setting end time of the date with index .......
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            //Settings hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            }
            else {
                //if the date is not today......
                currentDate.setHours(10)
                currentDate.setMinutes(0)

            }

            //store the data in a variable ....
            let timeSlots = []
            //check our current date is less than the endtime or not 
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                //add slot to array 
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })

                //Increment current time by 30 min - 1 hour 
                currentDate.setMinutes(currentDate.getMinutes() + 40)
            }

            setDocSlot(prev => ([...prev, timeSlots]))
        }

    }

    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docId])


    useEffect(() => {
        getAvailbleSlots()
    }, [docInfo])

    useEffect(() => {
        console.log(docSlot);

    }, [docSlot])


    return docInfo && (
        <>
            <div >
                {/* ...............Doctors Details ................................. */}
                <div className='sideabout flex flex-col sm:flex-row gap-4 pb-4'>
                    <div>

                    </div>
                    <div >
                        <img className='w-full sm:max-w-72 rounded-lg cursor-pointer border-dashed border-3 border-black-600' src={docInfo.image} alt='' />
                        <p className='border-dashed border-3 p-2 bg-gray-100 font-semibold'>{docInfo.name}</p>
                    </div>

                    <div className='  flex-1 border-3 border-yellow rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0' >
                        {/* right side Detaoils Section doctors info  */}
                        <p className='flex items-center gap-2 font-semibold text-lg'>{docInfo.name}
                            <img className='w-4' src={assets.verified_icon} alt='' /></p>
                        <div className='items-center text-sm mt-1 flex gap-3 '>
                            <p className='text-blue-600'><span className='text-gray-600'><FontAwesomeIcon icon={faGraduationCap} /> </span> {docInfo.degree} - {docInfo.speciality} </p>
                            <p className='experience border-2 bg-green-600 rounded-full px-2 text-white '>{docInfo.experience}</p>
                        </div>
                        <div>
                            <p className='text-gray-600 cursor-pointer'><span><FontAwesomeIcon icon={faLocationDot} /></span></p>
                        </div>

                        {/* Doctors About........ */}
                        <div className=' flex gap-1 mt-3 flex-col'>
                            <p className='font-semibold flex gap-2'>About <img src={assets.info_icon} /></p>
                            <p className='text-xs max-w-[2000px] mt-1'>{docInfo.about}</p>
                        </div>

                        <p className='mt-4 font-semibold fees'>Appointment Fee : <span className='text-lg text-gray-500'> {docInfo.fees} {currency}</span> </p>

                    </div>
                </div>

                {/* Booking Slots ................. */}
                <div className='mt-4 items-center font-medium pb-4 text-center'>
                    <p className='text-lg pt-4 '>Booking the slots for <span className='font-semibold text-gray-600'>{docInfo.name} , {docInfo.speciality}</span> </p>

                    <div className='flex gap-4 items-center w-full mt-8 overflow-x-scroll'>
                        {docSlot.length && docSlot.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center text-sm cursor-pointer min-w-16 p-2 border-1 ${slotIndex === index ? 'bg-gray-700 text-white' : 'border border-gray-600'}`} key={index}>
                                <p> {item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))}
                    </div>
                    {/* time .. */}
                    <div className='flex items-center gap-3 w-full overflow-x-scroll py-4'>
                        {docSlot.length && docSlot[slotIndex].map((item, index) => (
                            <p onClick={() => setSlotTime(item.time)} className={`text-sm flex-shrink-0 px-2 py-2 cursor-pointer ${item.time === slotTime ? 'bg-gray-500 text-white' : 'border border-gray-600'}`} key={index}>
                                {item.time.toLowerCase()}
                            </p>
                        ))}
                    </div>

                    <button className='btn btn-warning rounded-full mt-10 text-sm'>Book Appointment</button>
                </div >


                {/* Related Doctor... */}
                <RelatedDoctor docId={docId} speciality={docInfo.speciality} />

            </div >

        </>
    )
}

export default Appointment