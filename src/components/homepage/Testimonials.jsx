import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Park Tea Hyung",
            address: "Sparkling Tower",
            heading: "Nice And Comfortable House For Family",
            matter: "Staying here was an absolute delight! The house is spacious, cozy, and perfect for our family. We felt right at home from the moment we walked in. Highly recommend for anyone looking for comfort and convenience!",
            
        }
    ]
  return (
    <div className='w-[1349px] h-[806px] absolute top-[4900px] bg-[#27AD77] flex justify-center items-center px-20'>
      <div className='w-[700px]'>
        <h1 className='text-[40px] font-semibold w-[75%] leading-tight text-white'>Nice And Comfortable House For Family</h1>
        <p className='w-[75%] py-4 text-white'>" Staying here was an absolute delight! The house is spacious, cozy, and perfect for our family. We felt right at home from the moment we walked in. Highly recommend for anyone looking for comfort and convenience! "</p>
        <span className='text-[40px] flex mb-4 gap-3'>
            <FaStar className='fill-[#FFC000]' />
            <FaStar className='fill-[#FFC000]' />
            <FaStar className='fill-[#FFC000]' />
            <FaStar className='fill-[#FFC000]' />
            <FaStar className='fill-[#FFC000]' />
        </span>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-[20px] font-bold text-white'>Park Tea Hyung</h1>
                <h1 className='text-white'>Sparkling Tower</h1>
            </div>
            <div className='px-16 text-[32px] flex gap-4 text-white'>
                <FaArrowRight className='rotate-180 cursor-pointer' />
                <FaArrowRight className='cursor-pointer' />
            </div>
        </div>
        
      </div>
      <div className='w-[600px] h-[550px] bg-orange-200 rounded-[16px]'>

      </div>
    </div>
  )
}

export default Testimonials
