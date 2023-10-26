import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo, cloudinaryImageId} = resData;
    return(
      <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} rating </h4>
      <h4>{costForTwo} For TWO</h4>
      </div> 
    )
  }

  export default RestaurantCard;