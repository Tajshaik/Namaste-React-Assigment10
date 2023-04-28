import React, { useState } from "react";
//import '../App.css';
import { Link } from "react-router-dom";
import useOnline from '../Constants/useOnline';

const HeaderComponent =()=>{
  const [loggedIn,setloggedIn] = useState(false)
  const isOnline = useOnline();
  return(
    <div className='h-16 flex justify-between bg-pink-100 shadow-md'>
      <div className="w-52">
        <img  src="https://s.yimg.com/fz/api/res/1.2/BVX6A5KuE.Sq1pB.zFMbbA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/2fbe7635-a8b7-324a-818a-0396af59f2ef/t_500x300"/>
      </div>
      <div><h2 className="py-8">{isOnline ? "✅" : "🔴"}</h2></div>
      <div >
      <ul className="flex py-3">
       <li className="m-2 text-xl font-bold"><Link to='/'>Home</Link></li>
       <li className="m-2 text-xl font-bold"><Link to="/About">About</Link></li>
       <li className="m-2 text-xl font-bold"><Link to="/Contact">Contact us</Link></li>
       <li className="m-2 text-xl font-bold">Cart</li>
       <li className="m-2 text-xl font-bold"><Link to="/Instamart">InstaMart</Link></li>
      </ul>
      </div>
      { loggedIn ? (
      <button className="bg-gray-100 m-2  rounded-md font-bold" onClick={()=>{
        setloggedIn(false);
      }}>login</button>) : 
      (<button className="bg-gray-100 m-2  rounded-md font-bold" onClick={()=>{
        setloggedIn(true);
      }}>logout</button>)}
    </div>
)}

export default HeaderComponent