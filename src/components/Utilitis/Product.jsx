
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {product_title,price,product_image,product_id}=product;
    return (
        
            <div className="card card-compact  border  p-5 ">
  <figure className='w-95% rounded-xl h-1/2'>
    <img
    className='w-full h-full'
      src={product_image}
      alt={product_title} />
  </figure>
  <div className="">
    <h2 className=" my-6 font-semibold text-2xl text-[#09080F]">{product_title}</h2>
    <p className="font-medium text-xl text-[#09080F] opacity-60">Price : {price}K</p>
    <div className="my-9 card-actions ">
 <Link to={`/home/${product_id}`}>      <button className="font-semibold text-[18px] text-[#9538E2] px-8 py-3 border border-[#9538E2] rounded-[32px]">Show Details</button></Link>
    </div>
  </div>
</div>
            
        
    );
};
Product.propTypes={
    product:PropTypes.object.isRequired
}
export default Product;