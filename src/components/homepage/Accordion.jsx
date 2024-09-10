import React from 'react'
import AccordionToggle from './AccordionToggle';

function Accordion() {
  return (
    <div className='flex gap-10'>
        <div className='flex flex-col gap-8 '>
            <h1 className='text-[40px] font-semibold leading-tight'>We Help You To Find Your Dream House</h1>
            <img className='w-[900px] rounded-[16px]' src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='flex flex-col'>
            <h1 className='w-[568px]'>"Explore the finest selection of homes and properties, perfectly located in vibrant communities. Whether you're buying, selling, or renting, we provide personalized service to meet all your real estate needs. Your dream home awaits with competitive pricing, modern amenities, and a seamless buying experience. Begin your property journey with confidence today!"</h1>
            <AccordionToggle />
        </div>
    </div>
  )
}

export default Accordion;
