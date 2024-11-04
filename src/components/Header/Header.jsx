import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
const Header = () => {
const {pathname}=useLocation()
  
    return (
        <header>
          <div className={`navbar w-11/12 mx-auto px-20 ${pathname=="/"?'bg-[#9538E2]':""} `}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to='/' className={`px-3 py-2`}>Home</NavLink>
      <NavLink to='/statistics' className='px-3 py-2'>Statistics</NavLink>
      <NavLink to='/dashboard'className='px-3 py-2'>Dashboard</NavLink>
        
      </ul>
    </div>
    <div className="font-bold text-3xl">Gadget Heaven</div>
  </div>
  <div className="navbar-center hidden  md:flex">
    <ul className="menu menu-horizontal gap-10 ">
      <NavLink to='/' className={`px-3 py-2`}>Home</NavLink>
      <NavLink to='/statistics' className='px-3 py-2'>Statistics</NavLink>
      <NavLink to='/dashboard'className='px-3 py-2'>Dashboard</NavLink>
      
      
    </ul>
  </div>
  <div className="navbar-end">
<div className="flex gap-4">
<div className="border bg-white p-2 rounded-full">
<FaShoppingCart  />
</div>
  <div className="border bg-white p-2 rounded-full" > 
    <GiEternalLove></GiEternalLove>
  </div>
</div>

  </div>
</div>

        </header>
    );
};

export default Header;