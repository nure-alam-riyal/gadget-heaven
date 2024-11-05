import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Product from "../../../Utilitis/product";
import { useState,useEffect } from "react";
// import Catagori from "../../../Utilitis/catagori";

const Catsgories = () => {
    const [products1,setProducts]=useState([])
    const {catagoris}=useParams()
    const products=useLoaderData()
    const {pathname}=useLocation();
    // const spreadProduct=[...products]
    console.log(pathname)
 
    
  useEffect(() =>{
  
                        // fetch("../../../../../public/Products.json").then(res=>res.json()).then(data=>setProducts(data))
                        const fillter=[...products].filter((product)=>product.category== catagoris)
    if(fillter.length>0){
           
            setProducts(fillter)
        }
        else if(!pathname)
            setProducts(products)
        else
        setProducts(products)

}, [catagoris,products,pathname])
  
  //riyaldir==


    return (
        <div>
            
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products1.map(product=><Product key={product.product_id} product={product}></Product>)
                        
                }
            </div>
        </div>
    );
};

export default Catsgories;