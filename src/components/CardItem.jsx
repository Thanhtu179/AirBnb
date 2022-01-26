import React from "react";

const CardItem = (props) => {
  return (
    <div className={`card-item ${props.circle ? "circle" : ""}`}>
      {props.img ? (
        <div
          className={`card-item__img`}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      ) : null}
      {props.icon ? (
        <div className="card-item__icon">
          <i className={props.icon}></i>
        </div>
      ) : null}
      <div className="card-item__content">
        <h4>
          {props.title.length > 25
            ? props.title.substring(0, 25) + " ..."
            : props.title}
        </h4>
        {props.description ? <p>{props.description}</p> : null}
      </div>
    </div>
  );
};

export default CardItem;
