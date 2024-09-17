import React from 'react'
import Discover from './Discover';
import Listings from './Listings';
import Accordion from './Accordion';
import Loan from './Loan';
import Category from './Category';

function Homepage() {
  return (
    <div className='max-w-[100vw]'>
      <Discover />
      <Listings />
      <Loan />
      <Category />
    </div>
  )
}

export default Homepage;
