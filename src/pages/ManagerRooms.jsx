import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Input, Popconfirm, Image } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import {
  deleteRoomByIdAction,
  getAllRoom,
} from "../redux/Actions/ManagerRoomsAction";
import { openDrawer } from "../redux/Actions/AdminControlAction";
import { setLoading } from "../redux/Actions/ManagerRoomsAction";

import AddRoom from "../components/managerRooms/AddRoom";
import EditRoom from "../components/managerRooms/EditRoom";
import EditRoomImage from "../components/managerRooms/EditRoomImage";

const { Search } = Input;

const ManagerRooms = () => {
  const dispatch = useDispatch();
  const { arrRoom, loading } = useSelector(
    (state) => state.ManagerRoomsReducer
  );
  const [arrSearch, setArrSearch] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 6,
    total: 1,
  });
  let data = [];

  const handleTableChange = ({ pagination }) => {
    dispatch(setLoading(true));
    setPagination({ pagination });
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  };

  const handleSearch = (value) => {
    let key = value.toLowerCase();
    let arr = arrRoom.filter((item) => item.name?.toLowerCase().includes(key));
    if (arr?.length > 0) {
      setPagination({ ...pagination, total: arr.length });
      setArrSearch(arr);
    } else {
      setPagination({ ...pagination, total: 1 });
      setArrSearch([]);
    }
  };

  useEffect(() => {
    dispatch(getAllRoom());
  }, []);

  useEffect(() => {
    setPagination({ ...pagination, total: arrRoom.length });
  }, [arrRoom]);

  if (arrSearch) {
    data = arrSearch;
  } else {
    data = arrRoom;
  }

  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "_id",
      width: "12%",
    },
    {
      title: "Tên phòng",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      width: "20%",
      render: (text, room) => {
        return (
          <div className="align-items-center">
            {room.image ? (
              <Image
                width={75}
                src={room.image}
                placeholder={
                  <Image preview={false} src={room.image} width={500} />
                }
              />
            ) : (
              <Image
                width={75}
                height={75}
                src="error"
                fallback="data:image/png;base64,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"
              />
            )}
            <div style={{ marginLeft: "1.5rem" }}>
              <Button
                shape="round"
                type="primary"
                ghost
                onClick={() => {
                  dispatch(
                    openDrawer(
                      "Chỉnh sữa hình ảnh phòng",
                      <EditRoomImage id={room._id} />
                    )
                  );
                }}
              >
                Chỉnh sữa ảnh
              </Button>
            </div>
          </div>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "locationId",
      width: "15%",
      render: (text, room) => {
        return (
          <div>
            {room.locationId ? (
              <p>{room.locationId.province}</p>
            ) : (
              <p>Vị trí chưa cụ thể</p>
            )}
          </div>
        );
      },
    },
    {
      title: "GestMax",
      dataIndex: "guests",
      width: "5%",
    },
    {
      title: "",
      dataIndex: "_id",
      render: (text, room) => {
        return (
          <div className="align-items-center" ragment>
            <NavLink to={`/room/${room._id}`}>
              <Button shape="round" type="primary" ghost>
                Chi tiết
              </Button>
            </NavLink>
            <Button
              shape="round"
              icon={<EditOutlined />}
              type="primary"
              ghost
              style={{ margin: "0 10px" }}
              onClick={() =>
                dispatch(
                  openDrawer(
                    "Chỉnh sữa thông tin phòng",
                    <EditRoom id={room._id} />
                  )
                )
              }
            />
            <Popconfirm
              title="Bạn có muốn xóa phòng này？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                dispatch(deleteRoomByIdAction(room._id));
              }}
            >
              <Button danger shape="round" icon={<DeleteOutlined />} />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h2 className="page-header__title">Quản lý thông tin phòng</h2>
        <div className="page-header__btns">
          <div className="page-header__btns__add-btn">
            <Button
              type="primary"
              ghost
              shape="round"
              className="mb-3"
              onClick={() => {
                dispatch(openDrawer("Thêm phòng", <AddRoom />));
              }}
            >
              Thêm phòng
            </Button>
          </div>
          <div className="page-header__btns__search-btn">
            <Search
              className="mb-3"
              placeholder="input search text"
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            columns={columns}
            rowKey={"_id"}
            dataSource={data}
            pagination={pagination}
            onChange={handleTableChange}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerRooms;
