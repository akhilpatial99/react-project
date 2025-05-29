import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex items-center justify-center font-bold bg-gradient-to-r from-cyan-900'>
      <div className=" flex items-center justify-center shadow-1xl w-full md:w-96 h-150">

        <form className="space-y-6 bg-[#4f8bcf] w-80  p-6 md:p-6 shadow-md rounded-xl md:w-135">
          <h1 className='flex justify-center text-3xl py-5 font-bold'>LOGIN</h1>
          <label className="block text-2xl  font-bold mb-3">Name</label>
          <input type='text' autoComplete='off' className='bg-white h-12 w-70 px-2 md:w-95 rounded-2xl' placeholder='Enter Name'></input>
          <label className='block text-2xl font-bold mb-3'>Password</label>
         <input type='text' autoComplete='off' className='bg-white h-12 w-70 px-2 md:w-95 rounded-2xl' placeholder='Enter Your Password'></input>
          <div className="flex gap-3 items-center">
            <input type="checkbox" />
            <h1 className='text-base'>Remember password</h1>
          </div>
          <div className="px-15 md:px-25">
          <button className='px-14 py-2 font-bold rounded-md text-2xl h-12 bg-gradient-to-tr from-red-500 to-blue-900 hover:from-pink-800'>Login</button>
</div>
        <p className='px-2 md:px-14'>
          Don't have an account ? <Link to="/Register" className='text-red-600 font-semibold'> Register </Link>
        </p>
        </form>


      </div>
    </div>
  )
}

export default Login