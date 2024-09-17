import React from 'react'

function Loan() {
  return (
    <div className='w-[1245px] absolute top-[2432px] left-[104px] h-[200px] flex justify-between items-center mb-40'>
      <div>
        <h1 className='w-[500px] text-[40px] font-semibold leading-tight '>Need A Home Loan? Get Pre-Approved</h1>
        <p className='w-[500px] py-5'>Need a home loan? Get pre-approved today! Our streamlined process makes it easy to secure financing before you start searching for your dream home. With competitive rates, flexible terms, and expert support, we guide you every step of the way.</p>
        <p className='w-[500px]'>
        Pre-approval gives you the confidence to make an offer quickly, knowing exactly what you can afford. Don’t wait-start your pre-approval now for a hassle-free home-buying experience!
        </p>
        <button className='w-[151px] h-[56px] bg-[#FF8A20] rounded-[8px] mt-5 text-white font-semibold'>Read More</button>
      </div>
      <div className='w-[608px] h-[692px] rounded-tl-[70px] rounded-bl-[70px] bg-[#27AD77]'>
        <div className='w-[600px] h-[500px] bg-[#E6E6E6] relative right-[100px] top-[100px] rounded-[16px]'>
            <img className='object-fill rounded-[16px] w-full h-full' src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Loan;
