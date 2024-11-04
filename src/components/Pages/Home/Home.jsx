import { Link, Outlet } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'
import { useEffect, useState } from 'react'
import Catagori from '../../Utilitis/catagori';


const Home = () => {



    const [catagoris,setCatagoris]=useState([])
   
   
  
    useEffect(()=>{
 
  fetch('catagoris.json').then(res=>res.json()).then(data=>setCatagoris(data))
 
    },[])

    return (
        <div className="w-11/12 mx-auto p-12">
        <div className="relative  ">
        <div className="hero rounded-2xl bg-[#9538E2] pb-48 mb-80">
  <div className="hero-content  text-center mt-10">
    <div className="w-8/12 text-white">
      <h1 className="text-5xl m-0 font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
  <Link to="/dashboard">    <button className="btn py-2 px-4  bg-white font-bold text-[#9538E2]">Show Now</button></Link>
    </div>
  </div>
</div>
<div className='border p-4 bg-white bg-opacity-30  w-6/12 mx-auto absolute top-[65%] left-[25%] rounded-[32px] border-white'>
    <img className=' rounded-3xl w-full h-full ' src={banner} alt="" />
</div>
        </div>

        <h3  className='text-center my-10 text-[#0B0B0B] font-bold text-4xl'>
        Explore Cutting-Edge Gadgets
        </h3>


        <div className='md:flex gap-5'>
            <div className='flex flex-col gap-4 w-1/4 border p-4 rounded-lg '>
                {
                    catagoris.map((catagorie)=><Catagori key={catagorie} catagorie={catagorie} ></Catagori>)
                    
                }
            </div>
            <div className='w-3/4 '>
                <Outlet></Outlet>
                
            </div>






        </div>







        </div>
    );
};

export default Home;