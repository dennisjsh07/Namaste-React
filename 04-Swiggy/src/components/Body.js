import ResCard from "./ResCard";
import Shimmer from "./shimmer";
// import ResList from "../utils/mockdata";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(resData);
    setResFilter(resData);
    setFilteredRest(resData);
  };

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  if (onlineStatus === false) {
    return <h1>check your internet connection!!!</h1>;
  }

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const searchFilteredRes = ResList.filter((i) =>
                i.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              console.log(searchFilteredRes);
              setFilteredRest(searchFilteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = ResList.filter((i) => i.info.avgRating > 4.5);
            // console.log('filteredList:',filteredList);
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {FilteredRest.map((i) => {
          return (
            <Link key={i.info.id} to={"/restaurants/" + i.info.id}>
              <ResCard resData={i} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
