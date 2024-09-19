import React, { useState } from 'react'
import Listings from './Listings';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function Category() {
  const [listingData, setListingData] = useState([
    {
      id: 1,
      category: "Houses",
      name: "Grand Family House",
      location: "Boudha Road, Kathmandu",
      price: 350,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 2,
      category: "Villa",
      name: "The Elements",
      location: "Lakeside, Pokhara",
      price: 489,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 3,
      name: "The Trisara",
      location: "Meena Market, Jaisalmer",
      price: 299,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 4,
      name: "Premier Inn",
      location: "Garden of Eden, Mysuru",
      price: 548,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1608022099316-02dbaebb4d7e?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 5,
      name: "Everest View Hotel",
      location: "Lukla, Solukhumbu",
      price: 500,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1689849714441-6372a33af0d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 6,
      name: "Himalayan Lodge",
      location: "Thamel, Kathmandu",
      price: 120,
      rating: 3.8,
      img: "https://images.unsplash.com/photo-1531876137992-22b6ce5221f1?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 7,
      name: "Mountain Peak Resort",
      location: "Nagarkot, Bhaktapur",
      price: 400,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1600298882698-312a4137fd33?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 8,
      name: "Peaceful Garden Hotel",
      location: "Pokhara Lakeside, Pokhara",
      price: 150,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1688741552673-063e12f98edd?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 9,
      name: "Golden Temple Inn",
      location: "Patan Durbar Square, Lalitpur",
      price: 200,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1555574010-6a2107d14bc6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 10,
      name: "Heritage Hotel",
      location: "Bhaktapur Durbar Square, Bhaktapur",
      price: 250,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1725345653429-8b3926cc229c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 11,
      name: "Annapurna Hotel",
      location: "Durbar Marg, Kathmandu",
      price: 550,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 12,
      name: "Lakeside Paradise Resort",
      location: "Begnas Lake, Pokhara",
      price: 380,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1715037446553-41bd9a998e95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 13,
      name: "Safari Wildlife Hotel",
      location: "Chitwan National Park, Chitwan",
      price: 330,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1713793185245-49a4aa6cef36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 14,
      name: "Cloud Nine Boutique Hotel",
      location: "Lazimpat, Kathmandu",
      price: 480,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1660557989695-14fac79c086d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 15,
      name: "Royal Mountain Lodge",
      location: "Dhampus, Kaski",
      price: 410,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false,
    },
    {
      id: 16,
      name: "The Desert Villa",
      location: "Dhulikhel, Kavrepalanchok ",
      price: 500,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1456105278754-a5f20fc9ccad?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shadow: false
    }    
  ]);

  const handleFilter = (val) => {
    setListingData((prev) =>
      prev.filter((item) => 
        String(item.category) === String(val)  
      ))
  }
  return (
    <div className="w-[1145px] absolute top-[3000px] left-[104px] flex flex-col justify-center items-center">
      <h1 className="text-[40px] font-semibold">Listing Categories</h1>
      <p className="text-center w-[800px]">
        Explore our property listings categorized for your convenience. Find
        homes, apartments, and commercial spaces tailored to your needs. Start
        browsing now to discover your perfect match!
      </p>

      
      <div className="flex gap-2 my-7">
              <button
                value="home"
                onClick={() => handleFilter('home')}
                className="w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]"
              >
                All
              </button>
              <button className="w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]">
                Houses
              </button>
              <button className="w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]">
                Villa
              </button>
              <button className="w-[121px] h-[40px] border-[1px] border-[#FF8A20] text-[#FF8A20] rounded-[8px]">
                Apartment
              </button>
        </div>
        

      <div className="flex gap-4 py-[25px] flex-wrap ">
        {listingData.map((item) => (
          <>
            <div
              key={item.id}
              className={`min-w-[247px] h-[375px] cursor-pointer p-3 rounded-[16px] ${
                item.shadow ? "shadow-custom-shadow" : ""
              }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-[247px] h-[244px] object-cover rounded-[16px]"
              />
              <h1 className="text-[20px] pt-3 font-semibold">{item.name}</h1>
              <span className="flex items-center text-[12px] gap-1 py-2">
                <IoLocationSharp />
                {item.location}
              </span>
              <span className="font-bold flex items-center justify-between">
                <h1>${item.price}</h1>
                <span className="flex items-center gap-1">
                  <IoIosStar className="text-[#FFC000]" />
                  {item.rating}
                </span>
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Category;
