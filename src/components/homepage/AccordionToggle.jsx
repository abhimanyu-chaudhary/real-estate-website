import React from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

function AccordionToggle() {
    const query = [
        {
          "head": "Lifetime Warranty",
          "value": "Enjoy peace of mind with our lifetime warranty on all properties. We stand by the quality of our homes, ensuring long-term durability and value for your investment."
        },
        {
          "head": "Cheapest Compared To Other Competitors",
          "value": "Get the best deals in the market! Our prices are unbeatable, offering premium properties at the most affordable rates compared to other real estate competitors."
        },
        {
          "head": "Strategic Location",
          "value": "Find properties in prime locations, offering easy access to essential services, entertainment, and transport hubs. Live where convenience meets comfort."
        },
        {
          "head": "Low Tax",
          "value": "Benefit from low property taxes, allowing you to save more on your investment. Our properties are situated in areas with favorable tax policies for homeowners."
        }
      ]
      
  return (
    <div>
      {query.map(item => {
        return (
            <div>
              <div className='flex justify-between pr-5'>
                <h1 className='font-bold'>{item.head}</h1>
                <span className='cursor-pointer'><FaAngleDown /></span>
              </div>
                <p className='my-2 px-5'>{item.value}</p>
            </div>
        )
      })}
    </div>
  )
}

export default AccordionToggle;
