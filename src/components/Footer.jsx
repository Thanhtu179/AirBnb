import React from "react";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";

const introduceItems = [
  { path: "/", displayName: "Phương thức hoạt động của AirBnb" },
  { path: "/", displayName: "Trang tin tức" },
  { path: "/", displayName: "Nhà đầu tư" },
  { path: "/", displayName: "AirBnb Plus" },
  { path: "/", displayName: "AirBnb Luxe" },
  { path: "/", displayName: "HotelTonight" },
  { path: "/", displayName: "AirBnb for Work" },
  { path: "/", displayName: "Nhờ có AirBnb, mọi điều có thể" },
  { path: "/", displayName: "Cơ hội nghề nghiệp" },
  { path: "/", displayName: "Thư của nhà sáng lập" },
];

const communityItems = [
  { path: "/", displayName: "Sự đa dạng và cảm xúc thân thuộc" },
  { path: "/", displayName: "Tiện nghi phù hợp cho người khuyết tật" },
  { path: "/", displayName: "Đối tác liên kết AirBnb" },
  { path: "/", displayName: "Chổ ở cho tuyến đầu" },
  { path: "/", displayName: "Lượt giới thiệu của khách" },
  { path: "/", displayName: "AirBnb.org" },
];

const welcomeGuestItems = [
  { path: "/", displayName: "Cho thuê nhà" },
  { path: "/", displayName: "Tổ chức trải nghiệm trực tuyến" },
  { path: "/", displayName: "Tổ chức trải nghiệm" },
  { path: "/", displayName: "đón tiếp khác có trách nhiệm" },
  { path: "/", displayName: "Trung tâm trải nghiệm" },
  { path: "/", displayName: "Trung tâm cộng đồng" },
];

const supportItems = [
  {
    path: "/",
    displayName: "Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi",
  },
  { path: "/", displayName: "Trung tâm trợ giúp" },
  { path: "/", displayName: "Các tùy chọn hủy" },
  { path: "/", displayName: "Hổ trợ dân cư" },
  { path: "/", displayName: "Tin cậy và an toàn" },
];

const Footer = (props) => {
  return (
    <div className="footer">
      <div className={`container ${props.fluid ? "fluid" : null}`}>
        <div className="footer__info">
          <Grid col={4} lgCol={2} mdCol={1} gap={30}>
            <div>
              <div className="footer__info__title">Giới thiệu</div>
              <div className="footer__info__content">
                {introduceItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    {item.displayName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="footer__info__title">Cộng đồng</div>
              <div className="footer__info__content">
                {communityItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    {item.displayName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="footer__info__title">Đón tiếp khách</div>
              <div className="footer__info__content">
                {welcomeGuestItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    {item.displayName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="footer__info__title">Hổ trợ</div>
              <div className="footer__info__content">
                {supportItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    {item.displayName}
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
        </div>
        <div className="footer__copies">
          <div className="footer__copies__left">
            <p>© 2022 Airbnb, Inc.</p>
            <ul>
              <li>
                <Link to="/">Quền riêng tư</Link>
              </li>
              <li>
                <Link to="/">Điều khoản</Link>
              </li>
              <li>
                <Link to="/">Sơ đồ trang web</Link>
              </li>
            </ul>
          </div>
          <div className="footer__copies__right">
            <div className="footer__copies__right__setting">
              <Link to="/">
                <i className="bx bx-world"></i>
                Tiếng Việt (VN)
              </Link>
              <Link to="/">
                <i className="bx bx-dollar"></i>
                USD
              </Link>
            </div>
            <div className="footer__copies__right__social">
              <Link to="/">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link to="/">
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link to="/">
                <i className="bx bxl-instagram-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
