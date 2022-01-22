import React from "react";

const CardRecentLocation = (props) => {
  let item = props.item;
  return (
    <div className="card-recent-location">
      <div
        className="card-recent-location__image"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div className="card-recent-location__content">
        <h4>
          {item.displayName.length > 25
            ? item.displayName.substring(0, 25) + " ..."
            : item.displayName}
        </h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CardRecentLocation;
