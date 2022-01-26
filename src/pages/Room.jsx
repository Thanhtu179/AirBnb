import React, { useRef } from "react";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import Button, { OutlineButton } from "../components/Button";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import CardItem from "../components/CardItem";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

import img from "../assets/image/tyziiu.jpg";
import { DatePicker } from "antd";

const roomImages = [
  "https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg",
  "https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg",
  "https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg",
  "https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg",
  "https://anhdep123.com/wp-content/uploads/2021/01/hinh-gai-xinh-deo-mat-kinh-toc-dai.jpg",
];

const AdvantagesItems = [
  {
    icon: "bx bx-home",
    title: "Toàn bộ ngôi nhà",
    description: "Bạn sẽ có chung cư cao cấp cho riêng mình",
  },
  {
    icon: "bx bx-map",
    title: "Địa điểm tuyệt vời",
    description: "100% khách hàng gần đây sếp hang 5 sao cho vị trí này",
  },
  {
    icon: "bx bxs-key",
    title: "Trải nghiệm nhân phòng tuyệt vời",
    description:
      "100% khách hàng gần đây sếp hang 5 sao cho qui trình nhân phòng",
  },
  {
    icon: "bx bx-bookmark",
    title: "Trải nghiệm nhân phòng tuyệt vời",
    description: "Khách thường tìm kiếm tiện nghi phổ biến này",
  },
];

const serviceItems = [
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
  { icon: "bx bx-tv", title: "TV với truyền hình cádiv tiêu chuẩn" },
];

const roomContentItems = [
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
  {
    img: img,
    title: "Thanh Tu",
    description: "tháng 1 năm 2021",
    comment:
      "An apartment with a nice sea view from the 39th floor.  There is a pretty spacious area and enough amenities for a  group of people such as a family or a gang of friends.",
  },
];

const rateTitleItem = [
  "Mức độ sạch sẽ",
  "Độ chính xác",
  "Liên lạc",
  "Nhận phòng",
  "Vị trí",
  "Giá trị",
];

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Room = () => {
  const number_user__toggle_el = useRef(null);
  const number_user__content_el = useRef(null);
  clickOutsideRef(number_user__content_el, number_user__toggle_el);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const renderRateItem = (title, rate, index) => {
    return (
      <div className="room__rate__content__item" key={index}>
        <div className="room__rate__content__item__title">{title}</div>
        <div className="room__rate__content__item__progress">
          <p>
            <span style={{ width: `${rate * 20}%` }}></span>
          </p>
          {rate}
        </div>
      </div>
    );
  };

  const renderCommentItem = (item, index) => {
    return (
      <div className="room__comments__item" key={index}>
        <CardItem
          circle={true}
          img={item.img}
          title={item.title}
          description={item.description}
        />
        <p>{item.comment}</p>
      </div>
    );
  };

  const renderCommentItemDesktop = (item, index) => {
    return (
      <div className="room__comments--desktop__item" key={index}>
        <CardItem
          circle={true}
          img={item.img}
          title={item.title}
          description={item.description}
        />
        <p>{item.comment}</p>
      </div>
    );
  };

  const renderRateCount = (rate, numberUser) => {
    return (
      <div className="rate">
        <span className="rate__start">
          <i className="bx bxs-star" />
          {rate}
        </span>
        <span className="rate__user-count">{`(${numberUser} đánh giá)`}</span>
      </div>
    );
  };

  return (
    <div>
      <Helmet title="Chi tiết phòng">
        <Header />
        <div className="container">
          <div className="room">
            <div className="room__header">
              <div className="room__header__left">
                <i className="bx bx-chevron-left"></i>
                <span>Nhà riêng</span>
                <span>AirBnb</span>
              </div>
              <div className="room__header__right">
                <div className="room__header__right__item">
                  <i className="bx bx-upload"></i>
                  Chia sẽ
                </div>
                <div className="room__header__right__item">
                  <i className="bx bx-heart"></i>
                  Lưu
                </div>
              </div>
            </div>
            <div className="room__detail">
              <h1>Blue Ocean view from your bed and balcony</h1>
              <div className="room__detail__content">
                <div className="room__detail__content__rate-location">
                  {renderRateCount(4.5, 12)}
                  <div className="room__detail__content__rate-location__location">
                    <span>Thành phố Nha Trang, Khánh Hòa, Việt Nam</span>
                  </div>
                </div>
                <div className="room__detail__content__action">
                  <div className="room__detail__content__action__item">
                    <i className="bx bx-upload"></i>
                    Chia sẽ
                  </div>
                  <div className="room__detail__content__action__item">
                    <i className="bx bx-heart"></i>
                    Lưu
                  </div>
                </div>
              </div>
              <div className="room__detail__images">
                {roomImages.map((item, index) => (
                  <div
                    key={index}
                    className="room__detail__images__item"
                    style={{
                      backgroundImage: `url(${item})`,
                    }}
                  ></div>
                ))}
                <div className="room__detail__images__item-btn">
                  <i className="bx bxs-grid"></i>
                  <p>Hiển thị tất cả hình ảnh</p>
                </div>
              </div>
            </div>
            <div className="room__info">
              <div className="room__info__left">
                {/* info  title*/}
                <div className="info__title">
                  <div className="info__title__left">
                    <h2>
                      Toàn bộ căn hộ condo <span>Chủ nhà Phong</span>
                    </h2>
                    <div className="applications">
                      <div className="applications-room">
                        <span>4 phòng khách</span>
                        <span>4 phòg ngủ</span>
                        <span>4 giường</span>
                        <span>4 phòng tắm</span>
                      </div>
                    </div>
                  </div>
                  <div className="info__title__right">
                    <div className="info__title__right__img">
                      <img src={img} alt={img} />
                    </div>
                  </div>
                </div>
                {/* end info  title*/}

                {/* info  advantages*/}
                <Section borderTop={true}>
                  <SectionBody>
                    <div className="info__advantages">
                      {AdvantagesItems.map((item, index) => (
                        <CardItem
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </SectionBody>
                </Section>
                {/* end info  advantages*/}

                {/* info  description*/}
                <Section borderTop={true}>
                  <SectionBody>
                    <div className="info__description">
                      <p>
                        Quang cảnh vô cùng rộng nhìn ra Thái Bình Dương và toàn
                        bộ vịnh Nha Trang!! Anh có thể ở lại căn hộ của tôi. Tọa
                        lạc tại tầng 39 tòa nhà Napoleon Castle trên đường
                        Nguyễn Đình Chiểu, Nha Trang. Có 2 phòng ngủ, một ban
                        công lớn, một nhà bếp, một bàn ăn, một bộ sofa trong
                        phòng
                      </p>
                      <button className="info__description__btn">
                        Hiển thị thêm <i className="bx bx-chevron-right"></i>
                      </button>
                    </div>
                  </SectionBody>
                </Section>
                {/* end info  description*/}

                {/* info service */}
                <Section borderTop={true}>
                  <SectionTitle>
                    <h2>Nơi này có những gì cho bạn</h2>
                  </SectionTitle>
                  <SectionBody>
                    <div className="info__service">
                      <Grid col={2} lgCol={1} gap={20}>
                        {serviceItems.map((item, index) => (
                          <div className="info__service__item" key={index}>
                            <i class={item.icon}></i>
                            {item.title}
                          </div>
                        ))}
                      </Grid>
                      <OutlineButton className="info__service__btn">
                        Hiển thị tất cả 28 tiện nghi
                      </OutlineButton>
                    </div>
                  </SectionBody>
                </Section>
                {/*end info service */}
              </div>
              <div className="room__info__right">
                <div className="book-ticket">
                  <div className="book-ticket__title">
                    <div className="book-ticket__title__price">
                      <p>
                        <span>$12</span> / đêm
                      </p>
                    </div>
                    <div className="book-ticket__title__rate">
                      {renderRateCount(4.5, 12)}
                    </div>
                  </div>
                  <div className="book-ticket__info">
                    <div className="book-ticket__info__date ">
                      <div className="check-in-date date-customer">
                        <div className="label">Nhận phòng</div>
                        <DatePicker
                          className="date-input"
                          onChange={onChange}
                        />
                      </div>
                      <div className="check-out-date date-customer">
                        <div className="label">Trả phòng</div>
                        <DatePicker
                          className="date-input"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="book-ticket__info__number-user">
                      <button
                        className="book-ticket__info__number-user__toggle"
                        ref={number_user__toggle_el}
                      >
                        <div className="book-ticket__info__number-user__toggle__title">
                          <h5>Khách</h5>
                          <p>1 khách</p>
                        </div>
                        <div className="book-ticket__info__number-user__toggle__icon">
                          <i className="bx bx-chevron-down"></i>
                        </div>
                      </button>
                      <div
                        className="book-ticket__info__number-user__content"
                        ref={number_user__content_el}
                      >
                        <div className="book-ticket__info__number-user__content__menus">
                          <div className="book-ticket__info__number-user__content__menus__item">
                            <div className="book-ticket__info__number-user__content__menus__item__title">
                              <h4>Người lớn</h4>
                              <p>Từ 13 tuổi trở lên</p>
                            </div>
                            <div className="book-ticket__info__number-user__content__menus__item__btns">
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                            </div>
                          </div>
                          <div className="book-ticket__info__number-user__content__menus__item">
                            <div className="book-ticket__info__number-user__content__menus__item__title">
                              <h4>Trẻ em</h4>
                              <p>Độ tuổi 2 - 12</p>
                            </div>
                            <div className="book-ticket__info__number-user__content__menus__item__btns">
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                            </div>
                          </div>
                          <div className="book-ticket__info__number-user__content__menus__item">
                            <div className="book-ticket__info__number-user__content__menus__item__title">
                              <h4>Em bé</h4>
                              <p>Dưới 12 tuổi</p>
                            </div>
                            <div className="book-ticket__info__number-user__content__menus__item__btns">
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                            </div>
                          </div>
                          <div className="book-ticket__info__number-user__content__menus__item">
                            <div className="book-ticket__info__number-user__content__menus__item__title">
                              <h4>Thú cưng</h4>
                              <p>Bạn muốn mang theo động vật</p>
                            </div>
                            <div className="book-ticket__info__number-user__content__menus__item__btns">
                              <button>-</button>
                              <span>1</span>
                              <button>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="book-ticket__info__number-user__content__btn">
                          <button>Đóng</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="book-ticket__btn">
                    Kiểm tra tình trạng còn phòng
                  </Button>
                </div>
              </div>
            </div>
            {/* Room rate */}
            <div className="room__rate">
              <Section borderTop={true}>
                <SectionTitle>{renderRateCount(4.5, 12)}</SectionTitle>
                <SectionBody>
                  <div className="room__rate__content">
                    {rateTitleItem.map((item, index) =>
                      renderRateItem(item, 4.5, index)
                    )}
                  </div>
                </SectionBody>
              </Section>
            </div>
            {/* end Room rate */}

            {/*  Room comment */}
            <Section>
              <SectionBody>
                <div className="room__comments">
                  <Grid col={2} mdCol={1}>
                    {roomContentItems.map((item, index) =>
                      renderCommentItem(item, index)
                    )}
                  </Grid>
                  <OutlineButton className="room__comments__btn">
                    Hiển thị tất cả đánh giá
                  </OutlineButton>
                </div>
                <div className="room__comments--desktop">
                  {roomContentItems.map((item, index) =>
                    renderCommentItemDesktop(item, index)
                  )}
                  <OutlineButton className="room__comments--desktop__btn">
                    Hiển thị tất cả đánh giá
                  </OutlineButton>
                </div>
              </SectionBody>
            </Section>
            {/* end Room comment */}
          </div>
        </div>
        <Footer />
      </Helmet>
    </div>
  );
};

export default Room;
