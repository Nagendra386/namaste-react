import { LOGO_URL } from "../utils/constants";
import { useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
  const[btnReactName,setBtnReactName] = useState("LogIn");
  // console.log("header rendered");
  // useEffect(()=>{console.log("useeffect rendered")});
  // console.log("")

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
//subscribing to the store using a selector
 const cartItems = useSelector((store)=>store.cart.items)
 console.log(cartItems);

    return(
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
    <img className="w-40" src={LOGO_URL}/>
  </div>
  <div className="flex items-center">
  <ul className="flex p-4 m-4">
    <li className="px-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
    <li className="px-4"><Link to="/">Home</Link></li>
    <li className="px-4"><Link to="/about">About Us</Link></li>
    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
    <li className="px-4 font-bold"><Link to="./cart">Cart - ({cartItems.length} Items)</Link></li>
    <button className="px-4" onClick={()=>{btnReactName==="LogIn"?setBtnReactName("LogOut"):setBtnReactName("LogIn")}}>{btnReactName}</button>
    <li className="px-4 font-bold">{loggedInUser}</li>
  </ul>
  <div>
    
  </div>
  </div>
 
    </div>
  )}

  export default Header;
  