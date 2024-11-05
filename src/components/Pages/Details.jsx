import { FaShoppingCart } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { HandleCart } from "../Layout/Layout";
import Item from "../Utilitis/item";





const Details = () => {
    const [product,setProduct]=useState([])
    const products=useLoaderData()
    const {product_id}=useParams()
    const {handleCart,handleWshilist}=useContext(HandleCart)

    const handleCart1=(id)=>{
             handleCart(id)
    }
    const handleWshilist1=(id)=>{
        handleWshilist(id)
        console.log(id)
}
  
  
        useEffect(()=>{
        const  findProduct = products.find((product)=>product.product_id === parseInt(product_id))
        setProduct(findProduct)
       
        },[product_id, products])
   
//   console.log(product)
  const {product_image,product_title,price,description,specification,availability,rating} =product;
 
    // console.log(specification)
    return (
        <div>
            <div className="relative  ">
        <div className="hero rounded-2xl bg-[#9538E2] pb-48 mb-80">
  <div className="hero-content  text-center mt-10">
    <div className="w-8/12 text-white">
      <h1 className="text-3xl m-0 font-bold">Product Details</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>

    </div>
  </div>
</div>

<div className=' border border-black border-opacity-50 b  p-4  bg-white w-8/12 mx-auto absolute top-[65%] left-[18%] rounded-[32px] '>
    <div className="flex gap-4  ">
        <div className=" bg-gray-50 w-5/12 h-full"><img className=" bg-gray-200 w-full" src={product_image} alt="" /></div>
        <div className="w-7/12 text-[#09080F] space-y-5">
        <h2 className="text-[28px] font-semibold ">{product_title}</h2>
        <p className="text-xl font-semibold opacity-60">Price :{price} k</p>
        <button className="text-sm text-[#309C08] px-5 py-2 rounded-3xl font-medium border border-[#309C08] bg-[#309C08] bg-opacity-10">{`${availability?"In Stock":"Uninstock"}`}</button>
        <p className=" opacity-80">{description}</p>
        <div> 
            <h3 className="font-bold text-xl">Specification:</h3>
            <ol className=" list-decimal opacity-60 ml-10">
               
                 <Item item={specification}></Item>
               
            </ol>

        </div>
        <div>
            <h3 className="font-bold text-lg ">Rating :</h3>
            <div className="flex items-center gap-3">
              
                <ReactStars
    count={5}
   
 
  className='bg-orange-300 text-4xl'
    activeColor="#ffd700"
  />
                <p className="py-1 px-3 bg-gray-100 rounded-badge">{rating}</p>
            </div>
        </div>
        <div className="flex gap-4 items-center">
           <div onClickCapture={()=>handleCart1({product})} className="text-white flex gap-1 items-center px-3 py-2 rounded-3xl text-lg bg-[#9538E2]">
            <p>Add to Cart</p>
            <FaShoppingCart></FaShoppingCart>
           </div>
            <button onClick={()=>handleWshilist1({product})} className="p-2 border rounded-full">
                <GiEternalLove></GiEternalLove>
            </button>
        </div>

        </div>
    </div>
</div>
        </div>
        </div>
    );
};

export default Details;