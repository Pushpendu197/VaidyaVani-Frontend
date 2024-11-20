import React, { useState } from 'react'
import './contact.css'

const Login = () => {
    const [state, setState] = useState('Sign Up')

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className='container '>

                <div className='row containers '>
                    <form className="border-dashed border-2 w-2/6 mx-auto">
                        <div className='flex flex-col m-auto p-8'>

                            <p className='text-2xl mb-2'>{state === 'Sign Up' ? 'Create Account ' : 'Login User'}</p>
                            <p className='text-sm mb-4'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book Appointment</p>
                            {
                                state === 'Sign Up' && <div className="mb-3">
                                    <label for="text" className="form-label">Full Name : </label>
                                    <input type="text" onChange={(e) => setName(e.target.name)} value={name} className="form-control" id="name" name='username' placeholder="Enter your Name" required />
                                </div>
                            }



                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email Address : </label>
                                <input type="email" onChange={(e) => setName(e.target.email)} value={email} className="form-control" id="email" name='email' placeholder="name@example.com" required />
                            </div>

                            <div className='mb-3'>
                                <label for="inputPassword5" className="form-label">Password</label>
                                <input type="password" onChange={(e) => setName(e.target.password)} value={password} id="inputPassword5" className="form-control" placeholder="Enter the Password" />
                            </div>



                            <button type='submit' className='btn btn-warning'>Login</button>
                            {
                                state === 'Sign Up' ? <p className='mt-4 text-sm'>Already have an account ? <span onClick={() => setState('Login')} className='cursor-pointer text-purple-600 font-semibold'>Login</span></p> :
                                    <p className='mt-4 text-sm'>Create an new account ? <span onClick={() => setState('Sign Up')} className='cursor-pointer text-purple-600 font-semibold'>Click here </span></p>
                            }
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login