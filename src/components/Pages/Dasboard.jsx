import { useContext, useState } from "react";
import { SendCartProduct } from "../Layout/Layout";
import CartWsihListProduct from "../Utilitis/CartWsihListProduct";
import success from '../../assets/Group.png'
import { Link } from "react-router-dom";
const Dasboard = () => {
    const [bool,setBool]=useState(true)
    
   
    const {cartProduct,wsihProduct,cost,handleClose,sortPrice}=useContext(SendCartProduct)
    
    
    const handleCart=bool=>{
        setBool(bool)
    }
    
    
      const handlePurse=()=>{
        document.getElementById('my_modal_1').showModal()
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
            <h3 className="text-[#0B0B0B] font-bold text-2xl">Total Cost:{cost}k</h3>
            <button onClick={()=>sortPrice(true)} className="font-semibold text-[#9538E2] border text-xl border-[#9538E2] px-6 py-3 rounded-[32px]">Sort by Price</button>
            <button onClick={()=>handlePurse()} className="font-medium text-white bg-[#9538E2] py-3 text-xl px-6 rounded-[32px]">Purchase</button>
        </div>
      </div>


      <div className={`w-10/12 my-11 mx-auto space-y-3 ${bool?"":'hidden'}`}>
        {
         cartProduct.map((product,id)=><CartWsihListProduct key={id} product={product} cart={true}></CartWsihListProduct>)
        }
      </div>
      <div className={`w-10/12 my-11 mx-auto space-y-3 ${!bool?"":'hidden'}`}>
     
        {
         wsihProduct.map((product,id)=><CartWsihListProduct key={id} cart={false} product={product}></CartWsihListProduct>)
        }
      </div>



{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn hidden" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
 
  <div className="text-center modal-box"> 
    <div className="flex justify-center mb-4"><img src={success} alt="" /></div>
    <h3 className="font-bold text-lg">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing.
    </p>
    <p>{cost}</p>
    <div className="">
      <form method=" " className="w-full font-bold text-center">
        {/* if there is a button in form, it will close the modal */}
        <Link to='/'><button onClick={()=>handleClose()} className="btn w-full text-black text-xl">Close</button></Link>
      </form>
    </div>
  </div>
</dialog>
 
        </div>
    );
};

export default Dasboard;