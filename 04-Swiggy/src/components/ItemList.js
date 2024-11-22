import { useDispatch } from "react-redux";
import { Card_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  //   console.log("props :", props.data);
  let items = props.data;
  // console.log("items:", items);
  const dispatch = useDispatch();
  const addItemHandler = (item)=>{
    dispatch(addItem(item)); //item is the action.payload from the cart slice...
  }
  return (
    <div>
      {items.map((i) => {
        return (
          <div
            key={i.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <span>{i.card.info.name}</span>
                <span>
                  - ₹
                  {i.card.info.price
                    ? i.card.info.price / 100
                    : i.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{i.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={()=>addItemHandler(i)}>
                  Add +
                </button>
              </div>
              <img src={Card_IMG + i.card.info.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
