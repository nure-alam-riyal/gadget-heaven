import { useState } from "react";



const Dasboard = () => {
    const [bool,setBool]=useState(true)
    const handleCart=bool=>{
        setBool(bool)
    }
    return (
        <div>
                <div className="hero  bg-[#9538E2] py-10 mb-10">
  <div className="hero-content  text-center">
    <div className="w-8/12 text-white">
      <h1 className="text-[32px] m-0 font-bold">Dashboard</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
 
 <div  className="flex gap-6 justify-center"> 
      
       <button onClick={()=>handleCart(true)} className={`py-3 px-20 border rounded-[32px] border-white ${bool? 'bg-white font-bold text-[#9538E2] ':"text-white font-semibold "}`}>Cart</button>
       <button onClick={()=>handleCart(false)} className={`py-3 px-20 border rounded-[32px] border-white ${!bool? "bg-white font-bold text-[#9538E2] ":"text-white font-semibold "}`}>Wishlist</button>
 </div>
    </div>
  </div>
</div>

      <div className=" md:flex justify-between w-11/12 mx-auto px-20 items-center">
        <div className="text-[#0B0B0B] font-bold text-3xl">{`${bool?'Cart':"Wishlist"}`}</div>
        <div className={`flex gap-4 items-center ${bool?"":'hidden'}`}>
            <h3 className="text-[#0B0B0B] font-bold text-2xl">Total Cost:00000</h3>
            <button className="font-semibold text-[#9538E2] border text-xl border-[#9538E2] px-6 py-3 rounded-[32px]">Sort by Price</button>
            <button className="font-medium text-white bg-[#9538E2] py-3 text-xl px-6 rounded-[32px]">Purchase</button>
        </div>
      </div>



 
        </div>
    );
};

export default Dasboard;