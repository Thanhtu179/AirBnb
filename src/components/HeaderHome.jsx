import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import logo from "../assets/image/logo-full-dark.png";
import logoMini from "../assets/image/logo-black.png";
import UserControlButton from "../components/UserControlButton";
import CardItem from "../components/CardItem";
import { managerLocationService } from "../services/ManagerLocationService";
import { history } from "../App";

const clickOutsideInputRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.add("active");
      toggle_ref.current.classList.add("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
        toggle_ref.current.classList.remove("active");
      }
    }
  });
};

const clickOutside = (toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      toggle_ref.current.classList.add("active");
    } else {
      // user click outside toggle and content
      if (toggle_ref.current && !toggle_ref.current.contains(e.target)) {
        toggle_ref.current.classList.remove("active");
      }
    }
  });
};

const HeaderHome = () => {
  const inputLocationToggle = useRef(null);
  const inputLocationContent = useRef(null);
  const checkInDate = useRef(null);
  const checkOutDate = useRef(null);
  const numberUsersContent = useRef(null);
  const numberUsersToggle = useRef(null);
  const formSearchRef = useRef(null);
  const [arrLocation, setArrLocation] = useState([]);
  const [numberUser, setNumberUser] = useState({
    adult: 0,
    children: 0,
    baby: 0,
    pet: 0,
  });

  let { children, adult, baby, pet } = numberUser;

  const handleChangeNumberUser = (number, nameId) => {
    setNumberUser({
      ...numberUser,
      [`${nameId}`]: numberUser[`${nameId}`] + number,
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      checkIn: "",
      checkOut: "",
      guests: 0,
      locationId: "",
      locationName: "Thêm địa điểm",
    },

    onSubmit: (values) => {
      if (values.locationId !== "") {
        history.push(`/room-list/${values.locationId}`);
        // console.log("first", values);
      } else {
        alert("Vui long chon dia diem");
      }
    },
  });

  const handleChangeLocation = (item) => {
    formik.setFieldValue("locationId", item._id);
    formik.setFieldValue("locationName", item.province);
  };

  clickOutsideInputRef(inputLocationContent, inputLocationToggle);
  clickOutsideInputRef(numberUsersContent, numberUsersToggle);
  clickOutside(checkInDate);
  clickOutside(checkOutDate);
  clickOutside(formSearchRef);

  useEffect(() => {
    const getAllLocations = async () => {
      try {
        const result = await managerLocationService.getAllLocations();
        if (result.status === 200) {
          setArrLocation(result.data);
          // console.log("first", result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllLocations();
  }, []);

  useEffect(() => {
    let total = adult + children + baby;
    formik.setFieldValue("guests", total);
  }, [numberUser]);

  return (
    <div className="header-home">
      <div className="container header-home__wrap fluid">
        <div className="header-home__logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="header-home__logo--desktop">
          <Link to="/">
            <img src={logoMini} alt={logoMini} />
          </Link>
        </div>
        <div className="header-home__search-menu">
          <div className="header-home__search-menu__title">
            <ul>
              <li className="header-home__search-menu__title__item active">
                Nơi trải nghiệm
              </li>
            </ul>
          </div>
        </div>
        <div className="header-home__nav">
          <div className="header-home__nav__item">
            <Link to="/">Trở thành chủ nhà</Link>
          </div>
          <div className="header-home__nav__item">
            <Link to="/">
              <i className="bx bx-world"></i>
            </Link>
          </div>
          <div className="header-home__nav__item">
            <UserControlButton bgWhite={true} />
          </div>
        </div>
      </div>
      <div className="header-home__search-menu__info">
        <form
          className="header-home-search-form"
          onSubmit={formik.handleSubmit}
          ref={formSearchRef}
        >
          <div
            className="form-group header-home-search-form__location"
            ref={inputLocationToggle}
          >
            <p>Địa điểm</p>
            <input
              type="text"
              placeholder="Thêm địa điểm"
              name="locationName"
              onChange={formik.handleChange}
              value={formik.values.locationName}
            />
            <div
              className="header-home-search-form__location__menu"
              ref={inputLocationContent}
            >
              {arrLocation.map((item, index) => (
                <div
                  className="header-home-search-form__location__menu__item"
                  key={index}
                  onClick={() => handleChangeLocation(item)}
                >
                  <CardItem
                    img={item.image ? item.image : "https://picsum.photos/200"}
                    title={item.province}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="form-group" ref={checkInDate}>
            <p>Nhận phòng</p>
            <input
              type="date"
              placeholder="Thêm ngày"
              name="checkIn"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div className="form-group" ref={checkOutDate}>
            <p>Trả phòng</p>
            <input
              type="date"
              placeholder="Thêm ngày"
              name="checkOut"
              onChange={formik.handleChange}
            ></input>
          </div>
          <div
            className="form-group form-group--btn header-home-search-form__number-users"
            ref={numberUsersToggle}
          >
            <div>
              <p>Khách</p>
              <input
                type="text"
                placeholder="Thêm khách"
                name="guests"
                onChange={formik.handleChange}
                value={formik.values.guests}
              />
            </div>
            <button type="submit">
              <i className="bx bx-search-alt-2"></i>
              <span>Tìm kiếm</span>
            </button>
            <div
              className="header-home-search-form__number-users__menu"
              ref={numberUsersContent}
            >
              <div className="header-home-search-form__number-users__menu__item">
                <div className="header-home-search-form__number-users__menu__item__title">
                  <h3>Người lớn</h3>
                  <p>Từ 13 tuổi trở lên</p>
                </div>
                <div className="header-home-search-form__number-users__menu__item__btns">
                  <span onClick={() => handleChangeNumberUser(-1, "adult")}>
                    -
                  </span>
                  <p>{adult}</p>
                  <span onClick={() => handleChangeNumberUser(1, "adult")}>
                    +
                  </span>
                </div>
              </div>
              <div className="header-home-search-form__number-users__menu__item">
                <div className="header-home-search-form__number-users__menu__item__title">
                  <h3>Trẻ em</h3>
                  <p>Độ tuổi 2 - 12</p>
                </div>
                <div className="header-home-search-form__number-users__menu__item__btns">
                  <span onClick={() => handleChangeNumberUser(-1, "children")}>
                    -
                  </span>
                  <p>{children}</p>
                  <span onClick={() => handleChangeNumberUser(1, "children")}>
                    +
                  </span>
                </div>
              </div>
              <div className="header-home-search-form__number-users__menu__item">
                <div className="header-home-search-form__number-users__menu__item__title">
                  <h3>Em bé</h3>
                  <p>Dưới 2 tuổi</p>
                </div>
                <div className="header-home-search-form__number-users__menu__item__btns">
                  <span onClick={() => handleChangeNumberUser(-1, "baby")}>
                    -
                  </span>
                  <p>{baby}</p>
                  <span onClick={() => handleChangeNumberUser(1, "baby")}>
                    +
                  </span>
                </div>
              </div>
              <div className="header-home-search-form__number-users__menu__item">
                <div className="header-home-search-form__number-users__menu__item__title">
                  <h3>Thú cưng</h3>
                  <p>Bạn muốn mang theo động vật</p>
                </div>
                <div className="header-home-search-form__number-users__menu__item__btns">
                  <span onClick={() => handleChangeNumberUser(-1, "pet")}>
                    -
                  </span>
                  <p>{pet}</p>
                  <span onClick={() => handleChangeNumberUser(1, "pet")}>
                    +
                  </span>
                </div>
              </div>
              <div className="header-home-search-form__number-users__menu__item">
                <p>
                  Nếu bạn may mắn có nhiều hơn 2 thú cưng đi cùng, hãy nhớ cho
                  Chủ nhà biết
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderHome;
