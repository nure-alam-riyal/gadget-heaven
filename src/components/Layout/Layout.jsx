import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const HandleCart =createContext({})
export const SendCartProduct=createContext({})
export const DeleteProduct=createContext({})

export const CartSetInLogo=createContext(0)

const Layout = () => {
    const [cost,setCost]=useState(0)
    const [cartadd,setCartDigit]=useState(0)
    const [wishAdd,setWish]=useState(0)
 
const [cartProduct,setCartProduct]=useState([])
const [wsihProduct,setwsihProduct]=useState([])
function handleCart({product}){
    const findProduct =[...cartProduct].find((p)=>p.product_id ==product.product_id)
    console.log(findProduct);
      if(findProduct){
        toast.error("item already stay in cart ",{
            position:"top-center"
           })
      } 
      else{
        setCost(product.price+cost)
    setCartProduct([...cartProduct,product])
    setCartDigit(cartadd+1)
    toast.success("item added to cart successfully",{
        position:"top-center"
       })
 
 
    
      }
    }
      function handleWshilist({product}){
    
        const findProduct =[...wsihProduct].find((p)=>p.product_id ==product.product_id)
        console.log(findProduct);
        if(findProduct){
            toast.error("item already stay in cart ",{
            position:"top-center"
        })
        }
        else{
            setwsihProduct([...wsihProduct,product])
            setWish(wishAdd+1)
            toast.success("item added wishList successfully",{
                position:"top-center"
               })
            
        }
       
          }
          function handleClose(){
            
                setCost(0)
                setCartProduct([])
                setCartDigit(0)
               
                
            
            

          }
       const handleDelete=(product,cart)=>{
               if(cart){
                const cartProductnew=cartProduct.filter(product1=>product1.product_id !== product.product_id)
                setCartProduct(cartProductnew)
                setCost(cost-product.price)
                setCartDigit(cartadd-1)
                toast.warning("item removed to cart successfully",{
                    position:"top-center"
                   })
                
               }
               if(!cart){
                const wsihProductnew=wsihProduct.filter(product1=>product1.product_id !== product.product_id)
                setwsihProduct(wsihProductnew)
                setWish(wishAdd-1)
                toast.warning("item removed wishList successfully",{
                    position:"top-center"
                   })
               }

          }
          const sortPrice =()=>{
            const newcartProduct=[...cartProduct].sort((a,b)=>b.price-a.price)
            setCartProduct(newcartProduct)
            console.log(newcartProduct)
             }
      

    return (

   
        <HandleCart.Provider value={{handleCart,handleWshilist}}>
        <SendCartProduct.Provider value={{cartProduct,wsihProduct,cost,handleClose,sortPrice}}>
        <CartSetInLogo.Provider value={{cartadd,wishAdd}} >
       <DeleteProduct.Provider value={handleDelete}>
       <div className="">
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
       </DeleteProduct.Provider>
        </CartSetInLogo.Provider>
  </SendCartProduct.Provider>
     </HandleCart.Provider>
        
        
        
    );
};


export default Layout;