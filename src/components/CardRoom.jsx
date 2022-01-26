import React from "react";

const CardRoom = (props) => {
  return (
    <div className="card-room">
      <div className="card-room__images">
        <div
          className="card-room__images__item"
          style={{
            backgroundImage: `url("https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg")`,
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
            <p>Toàn căn hộ chung cư cao cấp tại việt nam</p>
            <h3>Blue Ocean view from your bed and balcony</h3>
            <div className="applications">
              <div className="applications-room">
                <span>4 phòng khách</span>
                <span>4 phòg ngủ</span>
                <span>4 giường</span>
                <span>4 phòng tắm</span>
              </div>
              <div className="applications-item">
                <span>Máy giặc</span>
                <span>Wifi</span>
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
              <span className="rate__user-count">(13 đánh giá)</span>
            </div>
          </div>
          <div className="card-room__content__rate-price__price">
            <p>
              <span>$12 </span>/ đêm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
