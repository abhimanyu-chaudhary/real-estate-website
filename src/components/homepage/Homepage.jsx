import React from 'react'
import Discover from './Discover';
import Listings from './Listings';
import Accordion from './Accordion';
import Loan from './Loan';

function Homepage() {
  return (
    <div className='w-[100vw]'>
      <Discover />
      <Listings />
      <Loan />
    </div>
  )
}

export default Homepage;
