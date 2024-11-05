import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { useContext, useEffect } from "react";
import { CartSetInLogo } from "../Layout/Layout";
import TitleChange from "../../../TitteChange";
import logo from '../../assets/download.jpeg'
const Header = () => {
const {pathname}=useLocation()

  const {cartadd,wishAdd}=useContext(CartSetInLogo)
 useEffect(()=>{

TitleChange(pathname)

 },[pathname])
    return (
        <header className=" w-11/12 mt-5 px-12 mx-auto">
          <div className={`navbar w-full px-12 rounded-t-2xl ${pathname=="/"?'bg-[#9538E2]':""} `}>
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
             <NavLink to='/' className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Home</NavLink>
      <NavLink to='/statistics' className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Statistics</NavLink>
      <NavLink to='/dashboard'className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Dashboard</NavLink>
      <NavLink to='/riyal'className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>riyal</NavLink>
      
        
      </ul>
    </div>
   <div className="flex gap-4 items-center">
    <div className=""><img className=" w-10 rounded-full" src={logo} alt="" /></div>
   <div className="font-bold text-3xl">Gadget Heaven</div></div>
  </div>
  <div className="navbar-center hidden  md:flex">
    <ul className="menu menu-horizontal gap-10 ">
    <NavLink to='/' className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Home</NavLink>
      <NavLink to='/statistics' className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Statistics</NavLink>
      <NavLink to='/dashboard'className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>Dashboard</NavLink>
      <NavLink to='/riyal'className={({isActive})=>`px-3 py-2 ${isActive?"text-yellow-400 font-bold underline":""}`}>riyal</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
<div className="flex gap-4">
<div className="border bg-white p-2 rounded-full relative">
<FaShoppingCart  />
<p className=" absolute -top-3 -right-0  ">{cartadd}</p>
</div>
  <div className="border bg-white p-2 relative rounded-full" > 
    <GiEternalLove></GiEternalLove>
    <p className=" absolute -top-3 -right-0  ">{wishAdd}</p>
  </div>
</div>

  </div>
</div>

        </header>
    );
};

export default Header;