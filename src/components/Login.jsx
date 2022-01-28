import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { getAllUser, loginAction } from "../redux/Actions/ManagerUsersAction";

const Login = (props) => {
  const toggle = props.toggle;

  const { arrUsers, errorMessage } = useSelector(
    (state) => state.ManagerUsersReducer
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Vui lòng nhập đúng định dạng email"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu từ 6 đến 32 ký tự"),
    }),
    onSubmit: (values) => {
      let index = arrUsers.findIndex((user) => user.email == values.email);
      if (index == -1) {
        formik.setFieldError("email", "Tài khoản không tồn tại");
      } else {
        dispatch(loginAction(values));
        // console.log("first", values);
      }
    },
  });

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    formik.setFieldError("email", errorMessage);
    formik.setFieldError("password", errorMessage);
  }, [errorMessage]);

  return (
    <form className="form sign-in" onSubmit={formik.handleSubmit}>
      <div className="input-group__custom">
        <i className="bx bxs-user" />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.email && formik.touched.email ? (
        <div style={{ color: "red", textAlign: "left" }}>
          {formik.errors.email}
        </div>
      ) : null}
      <div className="input-group__custom">
        <i className="bx bxs-lock-alt" />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.password && formik.touched.password ? (
        <div style={{ color: "red", textAlign: "left" }}>
          {formik.errors.password}
        </div>
      ) : null}
      <button type="submit" disabled={!formik.isValid}>
        Đăng nhập
      </button>
      <p>
        <b> Quên mật khẩu? </b>
      </p>
      <p>
        <span> Bạn chưa có tài khoản? </span>
        <b onClick={() => toggle()} className="pointer">
          {" "}
          Đăng ký{" "}
        </b>
      </p>
    </form>
  );
};

export default Login;
