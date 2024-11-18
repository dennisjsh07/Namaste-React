import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (props) => {
  const { title, itemCards } = props.data;
  const { showItems, setShowIndex } = props;
  const handleClick = () => {
    // setShowItems(!showItems); // toggle feature
    setShowIndex()
  };
  return (
    <div>
      <div className="w-6/12 m-auto my-4 p-4 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList data={itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
