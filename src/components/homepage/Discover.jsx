import React from "react";

function Discover(){
    return(
        <div className="w-[1266px] h-[652px] absolute top-[152px] border left-[40px] bg-[#123763] rounded-[16px] text-white flex items-center flex-col">
            <h1 className="text-[72px] font-semibold justify-center mt-[100px]">Discover Your Perfect Home</h1>
            <p className="absolute top-[232px] ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            <div className="absolute top-[320px] flex flex-col items-center">
                <div className="flex gap-[10px] z-10 bg-white w-[304px] h-[72px] items-center justify-center rounded-t-[8px] ">
                    <button className="w-[108px] h-[hug(40px)] rounded-[8px] bg-[#27AD77] py-[8px] px-[32px]">Sell</button>
                    <button className="w-[108px] h-[hug(40px)] rounded-[8px] text-[#27AD77] border-[1px] border-[#27AD77] py-[8px] px-[32px]">Rent</button>
                </div>
                <div className="w-[940px] h-[144px] bg-white text-black flex items-center justify-evenly rounded-[8px]">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Location</h4>
                        <input type="text" placeholder="Delhi, India" className="w-[228px] h-[56px] border-[1px] border-[#CCCCCC] rounded-[8px] placeholder: pl-5" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Type</h4>
                        <input type="text" placeholder="Type 21/24" className="w-[228px] h-[56px] border-[1px] border-[#CCCCCC] rounded-[8px] placeholder: pl-5" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Range</h4>
                        <input type="text" placeholder="$106 - $542" className="w-[228px] h-[56px] 
                        border-[#CCCCCC] border-[1px] rounded-[8px] placeholder: pl-5" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <p></p>
                        <button className="w-[160px] h-[56px] bg-[#FF8A20] text-white py-[12px] px-[32px] rounded-[8px]">
                            Search &#9827;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;