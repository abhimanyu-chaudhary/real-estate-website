import React, { useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function Listings() {
    const listingData = [
        {name: "Grand Family House", location: "Boudha Road, Kathmandu", price: 350, rating: 4.2, img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: true},
        {name: "The Elements", location: "Lakeside, Pokhara", price: 489, rating: 4.5, img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: false},
        {name: "The Trisara", location: "Meena Market, Jaisalmer", price: 299, rating: 4.7, img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: false},
        {name: "Premier Inn", location: "Garden of Eden, Mysuru", price: 548, rating: 4.1, img: "https://images.unsplash.com/photo-1608022099316-02dbaebb4d7e?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: true},
        {name: "Grand Family House", location: "Boudha Road, Kathmandu", price: 350, rating: 4.2, img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: true},
        {name: "The Elements", location: "Lakeside, Pokhara", price: 489, rating: 4.5, img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: false},
        {name: "The Trisara", location: "Meena Market, Jaisalmer", price: 299, rating: 4.7, img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: false},
        {name: "Premier Inn", location: "Garden of Eden, Mysuru", price: 548, rating: 4.1, img: "https://images.unsplash.com/photo-1608022099316-02dbaebb4d7e?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", shadow: false},
    ]


  return (
    <div className='w-[1132px] absolute top-[908px] left-[104px] '>
      <div className='flex justify-between items-center'>
        <h1 className='text-[48px] font-semibold'>Newest Listings</h1>
        <button className='w-[128px] h-[56px] py-[12px] px-[32px] rounded-[8px] bg-[#FF8A20]'>
            View All
        </button>
      </div>
      <div className='flex gap-4 py-[25px] flex-wrap '>
        {listingData.map((item, index) => (
          <div key={index} className={`min-w-[247px] h-[375px] p-3 rounded-[16px] ${item.shadow ? "shadow-custom-shadow" : ""}`}>
            <img src={item.img} alt="" className='w-[247px] h-[244px] object-cover rounded-[16px]' />
            <h1 className='text-[20px] pt-3 font-semibold'>{item.name}</h1>
            <span className='flex items-center text-[12px] gap-1 py-2'><IoLocationSharp />{item.location}</span>
            <span className='font-bold flex items-center justify-between'>
              <h1>${item.price}</h1>
              <span className='flex items-center gap-1' >
                  <IoIosStar className='text-[#FFC000]' />
                  {item.rating}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listings;
