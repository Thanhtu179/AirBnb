import React, { useState } from "react";
import { Pagination } from "antd";

const Table = (props) => {
  const [currPage, setCurrPage] = useState(0);
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);

  const handleChangePagination = (page) => {
    const start = Number(props.limit) * (page - 1);
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));
    setCurrPage(page - 1);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      <div
        className="pagination"
        style={{ textAlign: "center", marginTop: "1.5rem" }}
      >
        <Pagination
          total={props.bodyData.length}
          onChange={handleChangePagination}
        />
      </div>
    </div>
  );
};

export default Table;
