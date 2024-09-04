import React from 'react'
import Discover from './Discover';
import Listings from './Listings';

function Homepage() {
  return (
    <div className='w-[100vw]'>
      <Discover />
      <Listings />
    </div>
  )
}

export default Homepage;
