import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div className='flex items-center justify-center font-bold bg-gradient-to-r from-red-500'>
                
                <div className="flex items-center justify-center shadow-2xl w-full  md:w-96 h-150">

                    <form className="space-y-6 bg-[#e44769] p-6 shadow-md rounded-xl w-80 md:w-200">
                        <h1 className='flex justify-center text-3xl font-bold'>REGISTER</h1>
                        <label className="block text-2xl font-bold mb-3">User Name</label>
                        <input type='text' autoComplete='off' className='bg-white h-12 w-70 md:w-95 rounded-2xl p-4' placeholder='Enter User Name'></input>
                        <label className='block text-2xl font-bold mb-3'>E-Mail</label>
                        <input type='text' autoComplete='off' className='bg-white h-12 w-70 md:w-95 rounded-2xl p-4' placeholder='Enter Mail'></input>
                        <label className='block text-2xl font-bold mb-3'>Password</label>
                        <input type='text' autoComplete='off' className='bg-white h-12 w-70 md:w-95 rounded-2xl p-4' placeholder='Enter Password'></input>

                        <div className="px-8 md:px-18">
                            <button className='px-2 py-2 w-50 font-bold rounded-md text-2xl h-12 bg-gradient-to-tr from-orange-500 to-green-900 hover:from-pink-800'>Submit</button>
                        </div>
                        <p className='px-7 md:px-15'>
                            Already have an Accont <Link to="/Login" className='text-blue-900 font-semibold'> Login </Link>
                        </p>
                    </form>


                </div>
                
            </div>
        </>
    )
}

export default Register