import React from 'react'
import carddata from '../api/seriesData.json'
import Box from './Box'
const Card = () => {
    return (
        <>
         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5 p-4 bg-black'>
            {carddata.map((curElem) => {
                return (
                    <Box key={curElem.id} curElem={curElem} />)
            })}
            </div>
        </>
    )
}

export default Card