import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo, cloudinaryImageId} = resData;
    return(
      <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-red-500" style={{backgroundColor:"f0f0f0"}}>
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId}/>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rating </h4>
      <h4>{costForTwo} For TWO</h4>
      </div> 
    )
  }

  export default RestaurantCard;