import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Logo from './../../public/site-logo.svg'
import User from './../../public/user.jpeg'
import Homepage from './homepage/Homepage'
import Explore from './explorepage/Explore'
import Agency from './agencypage/Agency'
import Blog from './blogpage/Blog'
import About from './aboutpage/About'
import Contact from './contactpage/Contact'

function Routing() {
  return (
    <div className='w-[1349px] h-[120px] absolute bg-orange-300'>
      <div>
        <div>
            <Link to='/'>
                <img src={Logo} className='w-[161px] h-[32px] absolute top-[44px] left-[104px]' alt="" />
            </Link>
        </div>
        <div className='flex gap-8 w-[516px] h-[48px] absolute top-[44px] left-[462px] '>
            {[
              { title: "Home", sign: '/'},
              { title: "Explore", sign: '/explore'},
              { title: "Agency", sign: '/agency'},
              { title: "Blog", sign: '/blog'},
              { title: "About", sign: '/about'},
              { title: "Contact", sign: '/contact'},
            ].map((elem, index) => {
              return (
                <div >
                  <Link to={elem.sign} key={index}>
                    <div className='text-[#123763] font-semibold'>
                     {elem.title}
                    </div>
                  </Link>
                </div>
                
              )
            })}
        </div>
        <div className='w-[56px] h-[56px] absolute top-[32px] left-[1086px] rounded-full bg-[#E6E6E6] border-[1px] border-[#FF8A20]'>
          <img className='rounded-full' src={User} alt="" />
        </div>
        <button className='w-[hug(156px)] h-[hug(56px)] px-[32px] py-[12px] bg-[#FF8A20] absolute top-[32px] left-[1182px] rounded-[8px] font-semibold text-white'>Add Listing</button>
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routing;
