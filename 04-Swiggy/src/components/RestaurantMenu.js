import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const resId = useParams();
  const { id } = resId;

  const ResInfo = useRestaurantMenu(id); // custom hook

  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[2]?.card?.card?.info;
  const item =
    ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel;

  // console.log(ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const categories = ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((i)=>{
    return i.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  })
  console.log("categories:", categories);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {item.map((item) => {
          return (
            <li key={item.dish.info.id}>
              {item.dish.info.name} -{" "}
              {item.dish.info.price / 100 || item.dish.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
