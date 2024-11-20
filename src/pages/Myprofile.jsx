import React, { useState } from 'react'
import { assets } from '../assets/assets'
// import Upload from '../Components/Upload'
import UploadCloud from '../Components/UploadCloud'

const Myprofile = () => {
    const [userData, setUserData] = useState({
        name: 'Pushpendu Dey ',
        image: assets.profile_pic,
        email: 'darukheto123@ghmail.com',
        phone: '+91 6289207991',
        address: {
            code: "89/2 rajakatra main road",
            pincode: "Kolkata : 700001",
        },
        gender: 'Male',
        dob: '7/01/2003',
        bloodgroup: 'B+'

    })

    const [isEdit, setIsEdit] = useState(false)

    return (
        <>
            <div className='container'>
                <div className='row '>
                    <div className='col-auto'>
                        {/* information section......... */}
                        <div className='myProfile pb-24 max-w-lg flex flex-col gap-2'>
                            <img src={userData.image} alt='' className='w-36 rounded-sm cursor-grab' />

                            {
                                isEdit ? <input className='text-2xl font-medium max-w-[15rem] mt-3' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='text-2xl font-medium mt-3'>{userData.name}</p>
                            }
                            <hr />
                            <div>
                                <p className='mt-3  '>CONTACT INFORMATION </p>
                                <div className='grid grid-cols-[1fr_2fr] gap-y-3 mt-3 text-sm'>
                                    <p className='font-medium'>Email Id : </p>
                                    <p>{userData.email}</p>
                                    <p className='font-medium'>Contact no : </p>
                                    {
                                        isEdit ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p>{userData.phone}</p>
                                    }
                                    <p className='font-medium'>Address : </p>
                                    {
                                        isEdit
                                            ? <p>
                                                <input type='text' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.code, code: e.target.value } }))} value={userData.address.code} />
                                                <br />
                                                <input type='text' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.code, pincode: e.target.value } }))} value={userData.address.pincode} />
                                            </p>
                                            : <p>
                                                {userData.address.code}
                                                <br />
                                                {userData.address.pincode}
                                            </p>
                                    }
                                </div>
                            </div>
                            {/* BASIC INFO PART */}
                            <div className='basicInfo'>
                                <p className='mt-3'>BASIC INFORMATION</p>
                                <div className=' grid grid-cols-[1fr_2fr] gap-y-3 mt-3 text-sm'>
                                    <p className=''>Gender : </p>
                                    {
                                        isEdit ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </select> : <p>{userData.gender}</p>
                                    }
                                    <p className="font-medium">Date of Birth : </p>
                                    {
                                        isEdit ?
                                            <input type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} /> : <p>{userData.dob}</p>
                                    }

                                    <p className=''>Blood Group : </p>
                                    {
                                        isEdit ? <select className='max-w-48 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, bloodgroup: e.target.value }))} value={userData.bloodgroup}>
                                            <option value='A+'>A positive (A+)</option>
                                            <option value='A-'>B negative (B-)</option>
                                            <option value='B+'>B positive (B+)</option>
                                            <option value='B-'>B negative (B-)</option>
                                            <option value='O+'>O positive (O+)</option>
                                            <option value='O-'>O negative (O-)</option>
                                            <option value='AB+'>AB positive (AB+)</option>
                                            <option value='AB-'>AB negative (AB-)</option>
                                        </select> : <p> {userData.bloodgroup}</p>
                                    }

                                </div>
                            </div>

                            {/* BUTTONS  */}
                            <div className='mt-10 '>
                                {
                                    isEdit ?
                                        <button className='btn btn-dark rounded-full px-6 py-2 text-sm' onClick={() => setIsEdit(false)}>Save information</button> :
                                        <button className='btn btn-dark rounded-full px-6 py-2 text-sm' onClick={() => setIsEdit(true)}>Edit Information</button>
                                }

                            </div>

                        </div >
                    </div>


                    <div className='col'>
                        {/* file upload section ... */}
                        <div className=''>
                            {/* <Upload /> */}
                            <UploadCloud />
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Myprofile