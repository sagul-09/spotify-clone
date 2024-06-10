import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className="w-full flex justify-betweem  items-center font-semibold">
        <div className="flex items-center gap-2">
            <img className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
    </div>
    </>
  )
}

export default Navbar