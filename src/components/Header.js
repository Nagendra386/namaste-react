import { LOGO_URL } from "../utils/constants";
import { useState,useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
  const[btnReactName,setBtnReactName] = useState("LogIn");
  // console.log("header rendered");
  // useEffect(()=>{console.log("useeffect rendered")});
  // console.log("")

  const onlineStatus = useOnlineStatus();

    return(
    <div className="header">
      <div>
    <img className="logo" src={LOGO_URL}/>
  </div>
  <div className="nav-items">
  <ul>
    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/grocery">Grocery</Link></li>
    <li>Cart</li>
  </ul>
  </div>
  <div>
    <button className="btn" onClick={()=>{btnReactName==="LogIn"?setBtnReactName("LogOut"):setBtnReactName("LogIn")}}>{btnReactName}</button>
  </div>
    </div>
  )}

  export default Header;
  