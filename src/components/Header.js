import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
const Header = () =>{
  const[btnReactName,setBtnReactName] = useState("LogIn");
    return(
    <div className="header">
      <div>
    <img className="logo" src={LOGO_URL}/>
  </div>
  <div className="nav-items">
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
  </ul>
  </div>
  <div>
    <button className="btn" onClick={()=>{btnReactName==="LogIn"?setBtnReactName("LogOut"):setBtnReactName("LogIn")}}>{btnReactName}</button>
  </div>
    </div>
  )}

  export default Header;
  