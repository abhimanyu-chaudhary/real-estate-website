import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

function AccordionToggle() {
    const [query, setQuery] = useState([
        {
          id: 1,
          head: "Lifetime Warranty",
          value: "Enjoy peace of mind with our lifetime warranty on all properties. We stand by the quality of our homes, ensuring long-term durability and value for your investment.",
          toggle: true,
        },
        {
          id: 2,
          head: "Cheapest Compared To Other Competitors",
          value: "Get the best deals in the market! Our prices are unbeatable, offering premium properties at the most affordable rates compared to other real estate competitors.",
          toggle: false,
        },
        {
          id: 3,
          head: "Strategic Location",
          value: "Find properties in prime locations, offering easy access to essential services, entertainment, and transport hubs. Live where convenience meets comfort.",
          toggle: false,
        },
        {
          id: 4,
          head: "Low Tax",
          value: "Benefit from low property taxes, allowing you to save more on your investment. Our properties are situated in areas with favorable tax policies for homeowners.",
          toggle: false,
        }
      ]);
      
      const toggleHandler = (id) => {
        setQuery((prev) => 
          prev.map((item) => 
            item.id === id ? {...item, toggle: !item.toggle} : item
          )
        )
      }

  return (
    <div>
      {query.map(item => { 
        return (
            <div className={`min-h-[70px] ${item.toggle && "shadow-custom-shadow" } rounded-[8px] p-3 mb-4 transition ease-in-out delay-100  origin-top ${!item.toggle && "border-[2px] border-slate-300"}`}>
              <div className='flex justify-between pr-2'>
                <h1 className='font-bold'>{item.head}</h1>
                <span className='cursor-pointer transition ease-in-out delay-300' onClick={() => toggleHandler(item.id)}>{item.toggle ? <FaAngleUp /> : <FaAngleDown /> }</span>
              </div>
                <p className='my-2 px-5'>{item.toggle && item.value}</p>
            </div>
        )
      })}
    </div>
  )
}

export default AccordionToggle;
