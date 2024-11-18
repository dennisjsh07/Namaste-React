import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const resId = useParams();
  const { id } = resId;

  const ResInfo = useRestaurantMenu(id); // custom hook

  const [showIndex, setShowIndex] = useState(null);

  if (ResInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[2]?.card?.card?.info;
  const item =
    ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel;

  // console.log(ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const categories =
    ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((i) => {
      return (
        i.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log("categories:", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>
      {/*accordians*/}
      {categories.map((i, index) => {
        return (
          <ResCategory
            data={i.card.card}
            key={i.card.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
