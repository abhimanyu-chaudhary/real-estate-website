import React from 'react'
import AccordionToggle from './AccordionToggle';

function Accordion() {
  return (
    <div className='flex gap-10'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-[40px] font-semibold leading-tight'>We Help You To Find Your Dream House</h1>
            <img className=' rounded-[16px]' src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col gap-7'>
            <h1 className='w-[600px]'>"Discover the best homes in vibrant communities. Whether buying, selling, or renting, we offer personalized service to meet your real estate needs. Find your dream home with competitive pricing, modern amenities, and a smooth experience."</h1>
            <AccordionToggle />
        </div>
    </div>
  )
}

export default Accordion;
