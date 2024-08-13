import React from 'react'
import { Link } from 'react-router-dom';
import bookPic from "../assets/awardbooks.png"

function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-[#381dbf] px-4 lg:px24' >
        <div className='flex flex-col md:flex-row justify-around items-center gap-8' >
            <div className='md:w-1/2' >
               <h2 className='text-4xl text-white font-bold md-6 leading-snug '>2024 National Book Award for Fiction Shortlist</h2>
               <Link to='/shop' className='mt-12 block'><button className='bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>
            <div>
                <img src={bookPic} alt="" className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner