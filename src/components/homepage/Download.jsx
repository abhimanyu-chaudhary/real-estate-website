import React from 'react'
import iphone from './../../../public/iphone.png'
import screen from './../../../public/screen.png'
import appStore from './../../../public/Appstore Logo.png'
import playStore from './../../../public/Google Play Logo.png' 

function Download() {
  return (
    <div className='w-[1245px] h-[792px] absolute top-[5900px] flex gap-[200px] items-center mb-40'>
      <div className='w-[408px] h-[792px] rounded-tr-[70px] rounded-br-[70px] bg-[#27AD77]'>
        <div className='relative top-[40px] left-[150px] rounded-[16px]'>
            <img className='object-fill  w-[357px] h-[712px] shadow-custom-shadow rounded-[65px]' src={iphone} alt="" />
            <img className='absolute top-[24px] left-[25px]' src={screen} alt="" />
        </div>
      </div>
      <div>
        <h1 className='w-[500px] text-[40px] font-semibold leading-tight '>Download The Application TO Find Your Dream House</h1>
        <p className='w-[500px] py-5'>Looking for your perfect home? Our app makes it easier than ever! Explore a wide range of properties tailored to your needs with just a few taps. Whether you're searching for a cozy apartment, a spacious family home, or a luxury estate, our app provides detailed listings, virtual tours, and personalized recommendations to help you find your dream house.</p>
        <p className='w-[500px]'>
        Download now and start your journey to your ideal home today!
        </p>
        <div className='flex my-8'>
            <img className='cursor-pointer' src={playStore} alt="" />
            <img className='cursor-pointer' src={appStore} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Download;
