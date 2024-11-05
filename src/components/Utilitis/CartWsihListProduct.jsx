import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DeleteProduct, HandleCart } from '../Layout/Layout';

const CartWsihListProduct = ({product,cart}) => {
    const handleDelete=useContext(DeleteProduct)
    const {handleCart}=useContext(HandleCart)
   
   const {product_title,price,product_image,description,}=product
    return (
        <div className='flex justify-between p-4 border items-center rounded-2xl'>
            <div className='flex text-[#09080F] gap-6 items-center '>
                <div className=''><img className='w-40 rounded-3xl' src={product_image} alt="" /></div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-2xl'>{product_title}</h1>
                    <p className='opacity-60'>{description}</p>
                    <p className='font-semibold text-xl'>Price :{price}k</p>
                    <button onClick={()=>handleCart(product)} className={`${!cart?"":"hidden"} px-5 py-2 rounded-3xl text-lg bg-[#9538E2] font-bold`}>{!cart?"Add To Cart":""}</button>
                </div>
            </div>
            <div onClick={()=>handleDelete(product,cart)}><img className='w-14' src="https://img.icons8.com/?size=100&id=47258&format=png&color=000000" alt="" /></div>
        </div>
    );
};
CartWsihListProduct.propTypes={
    product:PropTypes.object,
    cart:PropTypes.bool
}
export default CartWsihListProduct;