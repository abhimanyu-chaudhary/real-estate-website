import React from 'react'
import Discover from './Discover';
import Listings from './Listings';
import Accordion from './Accordion';

function Homepage() {
  return (
    <div className='w-[100vw]'>
      <Discover />
      <Listings />
      
    </div>
  )
}

export default Homepage;
