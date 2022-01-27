import React, { useEffect, useState } from "react";

import { managerReviewsService } from "../services/ManagerReviewsService";
import numberWithCommas from "../utils/numberWithCommas";

const applicationKeyItems = {
  elevator: "thang máy",
  hotTub: "Bồn nước nóng",
  pool: "Hồ bơi",
  indoorFireplace: "Lò sưởi trong nhà",
  dryer: "May sấy tóc",
  gym: "phòng gym",
  kitchen: "nhà bếp",
  heating: "Tủ y tế",
  wifi: "Wifi",
  cableTV: "Tivi truyền hình cáp",
};

const CardRoom = (props) => {
  const item = props.item;
  const [reviews, setReviews] = useState([]);

  let applications = [];

  for (let key in item) {
    if (item[key] === true) {
      applications.push(applicationKeyItems[key]);
    }
  }

  useEffect(() => {
    const getReviewListByRoomId = async (id) => {
      try {
        const response = await managerReviewsService.getReviewListByRoomId(id);
        setReviews(response.data);
        // console.log("reve", response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getReviewListByRoomId(item._id);
  }, []);

  return (
    <div className="card-room">
      <div className="card-room__images">
        <div
          className="card-room__images__item"
          style={{
            backgroundImage: `url(${
              item.image
                ? item.image
                : "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"
            })`,
          }}
        ></div>
        <div className="card-room__images__icon">
          <i className="bx bx-heart icon__item"></i>
          <i className="bx bxs-heart icon__item--hover"></i>
        </div>
      </div>
      <div className="card-room__content">
        <div className="card-room__content__info">
          <div className="card-room__content__info__left">
            <p>
              {item.description.length > 50
                ? item.description.substring(0, 50) + " ..."
                : item.description}
            </p>
            <h3>{item.name}</h3>
            <div className="applications">
              <div className="applications-room">
                <span>{`${item.guests} người`}</span>
                <span>{`${item.bedRoom} phòng ngủ`}</span>
                <span>{`${item.bath} phòng ngủ`}</span>
              </div>
              <div className="applications-item">
                {(applications.length > 4
                  ? applications.slice(0, 3)
                  : applications
                ).map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card-room__content__info__right">
            <div className="card-room__content__info__right__item">
              <i className="bx bx-heart icon__item"></i>
              <i className="bx bxs-heart icon__item--hover"></i>
            </div>
          </div>
        </div>
        <div className="card-room__content__rate-price">
          <div className="card-room__content__rate-price__rate">
            <div className="rate">
              <span className="rate__start">
                <i className="bx bxs-star" />
                4.58
              </span>
              <span className="rate__user-count">{`( ${reviews.length} đánh giá)`}</span>
            </div>
          </div>
          <div className="card-room__content__rate-price__price">
            <p>
              <span>{numberWithCommas(item.price)}</span> đ / đêm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
