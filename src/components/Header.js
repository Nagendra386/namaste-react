import { LOGO_URL } from "../utils/constants";
import { useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () =>{
  const[btnReactName,setBtnReactName] = useState("LogIn");
  // console.log("header rendered");
  // useEffect(()=>{console.log("useeffect rendered")});
  // console.log("")
    return(
    <div className="header">
      <div>
    <img className="logo" src={LOGO_URL}/>
  </div>
  <div className="nav-items">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li>Cart</li>
  </ul>
  </div>
  <div>
    <button className="btn" onClick={()=>{btnReactName==="LogIn"?setBtnReactName("LogOut"):setBtnReactName("LogIn")}}>{btnReactName}</button>
  </div>
    </div>
  )}

  export default Header;
  