import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Park Tea Hyung",
      address: "Sparkling Tower",
      heading: "Nice And Comfortable House For Family",
      matter:
        "Staying here was an absolute delight! The house is spacious, cozy, and perfect for our family. We felt right at home from the moment we walked in. Highly recommend for anyone looking for comfort and convenience!",
      image:
        "https://images.unsplash.com/photo-1602872029708-84d970d3382b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Maya Singh",
      address: "Sunshine Residency",
      heading: "A Perfect Home in a Quiet Neighborhood",
      matter:
        "The house exceeded our expectations! It’s located in a peaceful area, with great amenities nearby. The layout is fantastic, and our kids loved the spacious rooms. We would definitely recommend this property to other families!",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "James Johnson",
      address: "Emerald Greens",
      heading: "Beautiful and Modern House",
      matter:
        "We couldn’t have asked for a better experience. The house is modern, well-maintained, and has all the features we were looking for. It’s close to schools and parks, making it ideal for families. A great place to call home!",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Ananya Patel",
      address: "Serenity Villa",
      heading: "Fantastic House with Amazing Views",
      matter:
        "The property is everything we wanted and more. Spacious rooms, stunning views, and excellent facilities. We felt comfortable and secure from day one. The neighborhood is family-friendly, and we’re so happy we made this choice!",
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      address: "Riverfront Gardens",
      heading: "A Home That’s Truly a Haven",
      matter:
        "This house is a real gem! The atmosphere is calm and inviting, and the attention to detail is remarkable. Our family instantly fell in love with the large backyard and cozy living spaces. Perfect for families who value comfort.",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Sofia Morales",
      address: "Maple Estate",
      heading: "Charming House in a Prime Location",
      matter:
        "We were so impressed with the location and the house itself. Everything is nearby—shops, parks, schools—yet the neighborhood is quiet and peaceful. The house is clean, well-maintained, and perfect for a growing family.",
      image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      name: "Liam Chen",
      address: "Rosewood Heights",
      heading: "Spacious and Inviting Home",
      matter:
        "This house felt like home from the minute we walked in. It’s spacious, with a lot of natural light, and has been thoughtfully designed for families. We love how everything is so accessible, and the quality of the house is excellent.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "Meera Gupta",
      address: "Harborview Residences",
      heading: "Elegant and Family-Friendly House",
      matter:
        "We are so happy with our decision to move here! The house is elegant, well-located, and perfect for family life. The open floor plan and spacious rooms made us feel at ease right away. Highly recommend to anyone looking for a family home!",
      image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "Ethan Williams",
      address: "Lakeside Terrace",
      heading: "A Dream Home for the Family",
      matter:
        "We’ve found our dream home! It’s a perfect balance of modern design and cozy comfort. The neighborhood is fantastic, and the house itself offers everything a family needs. We couldn’t be happier with our decision!",
      image: "https://images.unsplash.com/photo-1615875474908-f403116f5287?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  const [num, setNum] = useState(Math.floor(Math.random()* data.length));
  const rate = Math.floor(Math.random()* 3 + 1);

//   const handleChange = () => {
//     const setNum = Math.floor(Math.random()* data.length);
//   }

  return (
    <div >
        <div className="w-[1349px] h-[806px] absolute top-[4900px] bg-[#27AD77] flex justify-center items-center px-20 select-none">
            <div className="w-[700px]">
              <h1 className="text-[40px] font-semibold w-[75%] leading-tight text-white min-h-[90px]">
                {data[num].heading}
              </h1>
              <p className="w-[75%] py-4 text-white min-h-[90px]">
                {data[num].matter}
              </p>
              <span className="text-[30px] flex mb-4 gap-3">
                {
                    data.map(() => (
                        <FaStar className="fill-[#FFC000]" /> 
                    ))
                }
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-[20px] font-bold text-white">
                    {data[num].name}
                  </h1>
                  <h1 className="text-white">{data[num].address}</h1>
                </div>
                <div className="px-16 text-[32px] flex gap-4 text-white">
                  <FaArrowRight className="rotate-180 cursor-pointer" onClick={() => setNum(Math.floor(Math.random()* data.length))} />
                  <FaArrowRight className="cursor-pointer" onClick={() => setNum(Math.floor(Math.random()* data.length))} />
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[550px] bg-orange-200 rounded-[16px]">
              <img className="w-full h-full object-cover rounded-[16px]" src={data[num].image} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Testimonials;
