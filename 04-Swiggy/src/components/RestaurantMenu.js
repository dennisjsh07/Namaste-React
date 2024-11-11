import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { Menu_Api } from "../utils/constants";

const RestaurantMenu = () => {
  const [ResInfo, setResInfo] = useState([]);
  const resId = useParams();
  const { id } = resId;
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(Menu_Api + id);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }

  if (ResInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[2]?.card?.card?.info;
  const item =
    ResInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel;
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
