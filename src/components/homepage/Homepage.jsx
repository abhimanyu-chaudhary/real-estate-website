import React from 'react'
import Discover from './Discover';
import Listings from './Listings';
import Accordion from './Accordion';
import Loan from './Loan';
import Category from './Category';
import Testimonials from './Testimonials';
import Download from './Download';

function Homepage() {
  return (
    <div className='max-w-[100vw]'>
      <Discover />
      <Listings />
      <Loan />
      <Category />
      <Testimonials />
      <Download />
    </div>
  )
}

export default Homepage;
