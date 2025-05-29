import React from 'react'

const Box = (props) => {
    return (
        <div className=' text-amber-50 max-w-md w-full h-[550px] px-6 py-3 space-y-4 bg-[#5a020b] border-1 black rounded-md mt-2.5 hover:scale-105 transition delay-150 duration-300 ease-in-out '>
            <div className='flex justify-center rounded-md h-[50%] w-[100%]'>
                <img src={props.curElem.img_url} alt="image" className='rounded-xl ' />

            </div>
            <div>
                <h2 className='font-semibold'>Name: {props.curElem.name}</h2>
                <h1 classNam>Rating: {props.curElem.rating}</h1>
                <p className='text-justify mt-1 '> Summary: {props.curElem.description}</p>
                <p className='text-justify mt-1 '> Genre: {props.curElem.genre}</p>
                <a href={props.curElem.watch_url} target='_blank'>
                    <button className='bg-[#e863cb] px-2 py-2 font-bold rounded-2xl text-l m-3'>Watch now</button></a>
            </div>
        </div>
    )
}


export default Box