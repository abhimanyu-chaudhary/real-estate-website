import React from 'react'
import iphone from './../../../public/iphone.png'

function Download() {
  return (
    <div className='w-[1245px] h-[792px] absolute top-[6200px]  flex justify-between items-center mb-40'>
      <div className='w-[408px] h-[792px] rounded-tr-[70px] rounded-br-[70px] bg-[#27AD77]'>
        <div className='relative top-[40px] left-[150px] rounded-[16px]'>
            <img className='object-fill rounded-[16px] w-[357px] h-[712px] ' src={iphone} alt="" />
        </div>
      </div>
      <div>
        <h1 className='w-[500px] text-[40px] font-semibold leading-tight '>Need A Home Loan? Get Pre-Approved</h1>
        <p className='w-[500px] py-5'>Need a home loan? Get pre-approved today! Our streamlined process makes it easy to secure financing before you start searching for your dream home. With competitive rates, flexible terms, and expert support, we guide you every step of the way.</p>
        <p className='w-[500px]'>
        Pre-approval gives you the confidence to make an offer quickly, knowing exactly what you can afford. Don’t wait-start your pre-approval now for a hassle-free home-buying experience!
        </p>
        <button className='w-[151px] h-[56px] bg-[#FF8A20] rounded-[8px] mt-5 text-white font-semibold'>Read More</button>
      </div>
    </div>
  )
}

export default Download;
