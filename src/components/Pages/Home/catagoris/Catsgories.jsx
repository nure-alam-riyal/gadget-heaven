import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../../Utilitis/product";
import { useState,useEffect } from "react";

const Catsgories = () => {
    const [products1,setProducts]=useState([])
    const {catagoris}=useParams()
    const products=useLoaderData()
    const spreadProduct=[...products]
    
  useEffect(() =>{
  
const fillter=spreadProduct.filter((product)=>product.category== catagoris)
    
if(fillter.length>0){
    setProducts(fillter)
}

else if(fillter.length==0)
    setProducts(products)
}, [catagoris, products, spreadProduct])
  
  


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