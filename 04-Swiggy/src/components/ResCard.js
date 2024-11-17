import { Card_IMG } from "../utils/constants";

const ResCard = (props) => {
  console.log("props", props);
  const { resData } = props;
  console.log("resData ->", resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img className="rounded-lg" src={Card_IMG + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

// input => restaurant card => promoted restaurant card.
export const WithPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        {console.log("promoted props", props)}
        <label className="absolute bg-black text-white rounded-lg p-2 m-2">Promted</label>
        <ResCard {...props}/>
      </div>
    );
  };
};

export default ResCard;
