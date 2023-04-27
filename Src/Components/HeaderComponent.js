import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import useOnline from '../Constants/useOnline';

const HeaderComponent =()=>{
  const [loggedIn,setloggedIn] = useState(false)
  const isOnline = useOnline();
  return(
    <div className='header-container'>
      <div className="header">
        <img className="logo" src="https://s.yimg.com/fz/api/res/1.2/BVX6A5KuE.Sq1pB.zFMbbA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/2fbe7635-a8b7-324a-818a-0396af59f2ef/t_500x300"/>
      </div>
      <div><h2>{isOnline ? "✅" : "🔴"}</h2></div>
      <div className="nav-items">
      <ul >
       <li><Link to='/'>Home</Link></li>
       <li><Link to="/About">About</Link></li>
       <li><Link to="/Contact">Contact us</Link></li>
       <li>Cart</li>
       <li><Link to="/Instamart">InstaMart</Link></li>
      </ul>
      </div>
      { loggedIn ? (
      <button onClick={()=>{
        setloggedIn(false);
      }}>login</button>) : 
      (<button onClick={()=>{
        setloggedIn(true);
      }}>logout</button>)}
    </div>
)}

export default HeaderComponent