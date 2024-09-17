import React from 'react'

function Category() {
  return (
    <div className='w-[1145px] absolute top-[3000px] left-[104px] flex flex-col justify-center items-center'>
      <h1 className='text-[40px] font-semibold'>Listing Categories</h1>
      <p className='text-center w-[800px]'>Explore our property listings categorized for your convenience. Find homes, apartments, and commercial spaces tailored to your needs. Start browsing now to discover your perfect match!</p>

      <div className='flex gap-2 my-7'>
        <button className='w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]'>All</button>
        <button className='w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]'>Houses</button>
        <button className='w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]'>Villa</button>
        <button className='w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]'>Apartment</button>
      </div>
    </div>
  )
}

export default Category;
