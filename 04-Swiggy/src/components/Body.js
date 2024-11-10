import ResCard from "./ResCard";
import Shimmer from "./shimmer";
// import ResList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {
  const [ResList, setResFilter] = useState([]);
  const [FilteredRest, setFilteredRest] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(resData);
    setResFilter(resData);
    setFilteredRest(resData);
  };

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={()=>{
            const searchFilteredRes = ResList.filter((i)=>i.info.name.toLowerCase().includes(SearchText.toLowerCase()));
            console.log(searchFilteredRes);
            setFilteredRest(searchFilteredRes);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ResList.filter((i) => i.info.avgRating > 4.5);
            // console.log('filteredList:',filteredList);
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {FilteredRest.map((i) => {
          return <ResCard key={i.info.id} resData={i} />;
        })}
      </div>
    </div>
  );
};

export default Body;
