import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Logo from './../../public/site-logo.svg'

function Routing() {
  return (
    <div className='bg-slate-500'>
      <div>
        <div>
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
        </div>
        <div>

        </div>
      </div>

      <Routes>
        <h1>Hello World!</h1>
        <Route path='' element={<></>} />
      </Routes>
    </div>
  )
}

export default Routing;
