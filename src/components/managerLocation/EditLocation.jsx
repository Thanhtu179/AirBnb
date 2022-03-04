import React, { useEffect, useState } from "react";
import { Form, Input, Button, Rate, Image } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocationByIdAction,
  updateLocationByIdAction,
} from "../../redux/Actions/ManagerLocationAction";

const EditLocation = (props) => {
  let { id } = props;
  const [rate, setRate] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const dispatch = useDispatch();
  const { locationData } = useSelector((state) => state.ManagerLocationReducer);

  const handleChangeRate = (name) => {
    return (value) => {
      formik.setFieldValue(name, value * 2);
      setRate(value);
    };
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: locationData.name,
      province: locationData.province,
      country: locationData.country,
      valueate: locationData.valueate,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Tên không được bõ trống"),
      province: Yup.string().required("Tỉnh không được bõ trống"),
      country: Yup.string().required("Quốc gia không được bõ trống"),
    }),
    onSubmit: async (values) => {
      dispatch(updateLocationByIdAction(id, values));
    },
  });

  useEffect(() => {
    dispatch(getLocationByIdAction(id));
  }, []);

  return (
    <div className="container">
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{ margin: "0 2.5rem" }}
        onFinish={formik.handleSubmit}
      >
        <h2 style={{ margin: "2.5rem 0", fontWeight: 600 }}>
          <i className="fab fa-airbnb" style={{ marginRight: "1.5rem" }}></i>
          Thông tin vị trí
        </h2>
        {formik.errors.name && formik.touched.name ? (
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6,
            }}
            style={{ margin: 0 }}
          >
            <div className="text-danger">{formik.errors.name}</div>
          </Form.Item>
        ) : null}
        <Form.Item label="Tên Phòng">
          <Input
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </Form.Item>
        {formik.errors.province && formik.touched.province ? (
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6,
            }}
            style={{ margin: 0 }}
          >
            <div className="text-danger">{formik.errors.province}</div>
          </Form.Item>
        ) : null}
        <Form.Item label="Tỉnh">
          <Input
            name="province"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
          />
        </Form.Item>
        {formik.errors.country && formik.touched.country ? (
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 6,
            }}
            style={{ margin: 0 }}
          >
            <div className="text-danger">{formik.errors.country}</div>
          </Form.Item>
        ) : null}
        <Form.Item label="Quốc gia">
          <Input
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <span>
            <Rate
              allowHalf
              tooltips={desc}
              value={formik.values.valueate / 2}
              onChange={handleChangeRate("valueate")}
            />
            {formik.values.valueate ? (
              <span className="ant-rate-text">
                {desc[formik.values.valueate / 2 - 1]}
              </span>
            ) : (
              ""
            )}
          </span>
        </Form.Item>
        <div className="row" style={{ marginTop: "2.5rem" }}>
          <div className="col-12 align-items-center">
            <Button size="large" htmlType="submit" type="primary" ghost>
              Cập nhật vị trí
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditLocation;
