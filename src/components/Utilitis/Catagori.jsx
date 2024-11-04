import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
const Catagori = ({catagorie}) => {
   const {type}=catagorie;
    return (
       
            <NavLink to={`/${type}`}
             className={(isActive)=>isActive ? "":" " }  > <div className='bg-[#09080F0D] bg-opacity-5 px-10 py-4 rounded-[32px]'> {type}     </div></NavLink>
            
    
    );
};
Catagori.propTypes={
    catagorie:PropTypes.object.isRequired
}
export default Catagori;