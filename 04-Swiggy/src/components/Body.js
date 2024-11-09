import ResCard from "./ResCard";
import ResList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [ResFilter, setResFilter] = useState(ResList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResFilter.filter((i) => i.card.card.info.avgRating > 4);
            setResFilter(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ResFilter.map((i) => {
          return <ResCard key={i.card.card.info.id} resData={i} />;
        })}
      </div>
    </div>
  );
};

export default Body;
