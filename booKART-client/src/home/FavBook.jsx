import React from 'react'
import { Link } from 'react-router-dom';
import FavBookIMG from '../assets/favoritebook.jpg'

function FavBook() {
  return (
    <div  className=' flex flex-col md:flex-row justify-between items-center gap-12 px-4 lg:px-24 my-20'>
        <div className='md:w-1/2'>
        <img src={FavBookIMG} alt="" className='rounded md:w-10/12 ' /></div>
        <div className='md:w-1/2 space-y-5'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus in ipsa alias excepturi at eveniet mollitia repudiandae fuga iste eaque magnam sit accusantium perspiciatis blanditiis similique, soluta, optio maiores quisquam iure qui odit voluptatum </p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>500+</h3>
                    <p className='text-base'>Registered User</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>100+</h3>
                    <p className='text-base'>PDF Downloaded</p>
                </div>
            </div>
            <Link to='/shop' className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
        </div>
        
  )
}

export default FavBook