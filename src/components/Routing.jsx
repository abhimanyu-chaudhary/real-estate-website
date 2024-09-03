import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Logo from './../../public/site-logo.svg'

function Routing() {
  return (
    <div className='w-[1440px] h-[120px]'>
      <div>
        <div>
            <Link to='/'>
                <img src={Logo} className='w-[161px] h-[32px] relative top-[44px] left-[104px]' alt="" />
            </Link>
        </div>
        <div className='flex gap-8 w-[516px] h-[48px] relative top-[18px] left-[462px] '>
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
      </div>

      <Routes>
        
        <Route path='' element={<></>} />
      </Routes>
    </div>
  )
}

export default Routing;
