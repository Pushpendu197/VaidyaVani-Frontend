import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'

const Doctors = () => {
    const { speciality } = useParams()
    console.log(speciality);

    const { doctors } = useContext(AppContext)

    //FILTER SECTION
    const [filterDoc, setFilterDoc] = useState([])
    const [showFilter, setShowFilter] = useState([false])

    const navigate = useNavigate()
    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }
    useEffect(() => {
        applyFilter()
    }, [doctors, speciality])

    return (
        <>
            <div>
                <p className='text-center text-2xl'>Specialist Doctors</p>
                <div className='flex flex-col sm:flex-row items-start gap-4 mt-5'>
                    <button className={`p-2 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters <FontAwesomeIcon icon={faFilter} /></button>
                    < div className={`flex flex-col gap-4 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
                        {/* ${speciality === "" ? "bg-indigo-100" : ""} */}
                        <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className='btn btn-outline-primary'>General Physician</p>
                        <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className='btn btn-outline-secondary'>Gynecologist</p>
                        <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className='btn btn-outline-warning'>Dermatologist</p>
                        <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className='btn btn-outline-success'>Pediatricians</p>
                        <p onClick={() => speciality === 'ENT' ? navigate('/doctors') : navigate('/doctors/ENT')} className='btn btn-outline-dark'>ENT</p>
                        <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className='btn btn-outline-primary'>Neurologist</p>
                        <p onClick={() => speciality === 'Opthalmologist' ? navigate('/doctors') : navigate('/doctors/Opthalmologist')} className='btn btn-outline-info'>Opthalmologist</p>
                        <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className='btn btn-outline-danger'>Gastroenterologist</p>
                    </div>
                    <div className='w-full grid grid-cols-auto gap-2 gap-y-6  pb-16 '>
                        {
                            filterDoc.map((item, index) => (

                                <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-gray-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 doctorList' key={index}>

                                    <img className='' src={item.image} alt='' />

                                    <div className='p-4 '>
                                        <div className='flex items-center gap-2 text-xs text-center text-green-700  '>
                                            <p className='w-2 h-2 bg-green-600 rounded-full '></p>
                                            <p >Available</p>
                                        </div>
                                        <p className='text-base text-gray-900 font-semibold'>{item.name}</p>
                                        <p className='text-sm text-gray-600'>{item.speciality}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Doctors