import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id}
                 className="p-2 m-2 border-b-6 text-left ">
                    <div className="flex justify-between">
                    <img src={CDN_URL+item.card.info.imageId} className="w-20 h-30"/>
                    <button className="w-20 h-10 m-2  bg-orange-400" onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                    
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>-₹ {item.card.info.price?
                        item.card.info.price/100
                        :item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    <div>
                    
                        </div>    
                </div>
            )
            
        )}
        </div>
    )
}

export default ItemList;