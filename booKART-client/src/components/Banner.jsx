import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-[rgba(56,29,191,0.9)] flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-white'>Buy and Sell Your Books <span className='text-[#ffffff]'>For The Best Prices </span></h2>
            <p className='md:w-4/5 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eos ipsa, perferendis expedita ex iste quam aspernatur voluptatibus ut cum tenetur necessitatibus rerum animi accusamus tota.</p>
            <div>
                <input type="text"  name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-[#ff8539] mx-3 px-6 py-2 text-white font-medium hover:bg-[#0000004a] transition-all ease-in duration-200'>Search</button>
            </div>
        </div>
        {/* right side */}
        <div><BannerCard></BannerCard></div>
      </div>
    </div>
  )
}

export default Banner
