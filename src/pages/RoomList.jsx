import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardRoom from "../components/CardRoom";
import { ButtonSelect } from "../components/Button";
import mapImage from "../assets/image/map.jpg";

import { managerRoomsService } from "../services/ManagerRoomsService";

const RoomList = () => {
  let id = "616953dfefe193001c0a5b4e";
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const handlePaginationChange = (page) => {
    setCurrentPage(page - 1);
  };

  useEffect(() => {
    const start = pageSize * currentPage;
    const end = start + pageSize;
    setDataShow(data.slice(start, end));
    window.scrollTo(0, 0);
  }, [data, currentPage]);

  useEffect(() => {
    const getRoomsByLocation = async (id) => {
      try {
        const response = await managerRoomsService.getRoomListByLocation(id);
        // console.log("reve", response.data);
        setData(response.data);
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err.response);
      }
    };
    getRoomsByLocation(id);
  }, []);

  return (
    <Helmet title="Danh sách phòng">
      <Header fluid={true} />
      <div className="room-list">
        <div className="container">
          <div className="room-list__header--tablet">
            <div className="room-list__header--tablet__title">
              <div className="room-list__header--tablet__title__icon">
                <i className="bx bx-chevron-left"></i>
              </div>
              <div className="room-list__header--tablet__title__name">
                <p>Nha Trang Bay</p>
              </div>
              <div className="room-list__header--tablet__title__icon">
                <i className="bx bx-filter-alt"></i>
              </div>
            </div>
            <div className="room-list__header--tablet__btns">
              <div className="room-list__header--tablet__btns__item">
                <ButtonSelect>Loại nơi ở</ButtonSelect>
              </div>
              <div className="room-list__header--tablet__btns__item">
                <ButtonSelect>Loại nơi ở</ButtonSelect>
              </div>
              <div className="room-list__header--tablet__btns__item">
                <ButtonSelect>Giá</ButtonSelect>
              </div>
              <div className="room-list__header--tablet__btns__item">
                <ButtonSelect>Phòng và phòng ngủ</ButtonSelect>
              </div>
            </div>
          </div>
          <div className="room-list__btns">
            <div className="room-list__btns__item">
              <ButtonSelect>Loại nơi ở</ButtonSelect>
            </div>
            <div className="room-list__btns__item">
              <ButtonSelect>Giá</ButtonSelect>
            </div>
            <div className="room-list__btns__item">
              <ButtonSelect>Phòng và phòng ngủ</ButtonSelect>
            </div>
            <div className="room-list__btns__item">
              <ButtonSelect>Bộ lọc khác</ButtonSelect>
            </div>
          </div>
        </div>
        <div className="room-list__content">
          <div className="room-list__content__left">
            <div className="container">
              <div className="room-list__content__left__title">
                <span>{`Có ${data.length} chổ ở`}</span>
                <h2>Khu vực Nha Trang</h2>
              </div>
              <div className="room-list__content__left__rooms">
                {dataShow.map((item, index) => (
                  <Link
                    to={`/room/${item._id}`}
                    className="room-list__content__left__rooms__item"
                    key={index}
                  >
                    <CardRoom item={item} />
                  </Link>
                ))}
              </div>
              <div className="room-list__content__left__pagination">
                <Pagination
                  total={data.length}
                  onChange={handlePaginationChange}
                />
                <p>{`${currentPage + 1} - ${
                  data.length % pageSize === 0
                    ? Math.floor(data.length / pageSize)
                    : Math.floor(data.length / pageSize) + 1
                } trong số ${data.length} chổ ở`}</p>
                <span>
                  Nhập ngày để xem giá đầy đủ. Áp dụng phụ phí. Có thể phát sinh
                  thuế.
                </span>
              </div>
            </div>
          </div>
          <div className="room-list__content__right">
            <div
              className="room-list__content__right__img"
              style={{
                backgroundImage: `url(${mapImage})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer fluid={true} />
    </Helmet>
  );
};

export default RoomList;
