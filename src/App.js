import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () =>{
  return(
  <div className="App">
<Header/>
<Body/>
  </div>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
