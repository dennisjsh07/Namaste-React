import { Card_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={Card_IMG + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResCard;
