import React, { useEffect } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  getAllUser,
  registerAction,
} from "../redux/Actions/ManagerUsersAction";
import { useSelector } from "react-redux";
import { ManagerUsersService } from "../services/ManagerUsersService";

const Register = (props) => {
  const toggle = props.toggle;

  const dispatch = useDispatch();
  const { arrUsers } = useSelector((state) => state.ManagerUsersReducer);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Tên không được bỏ trống"),
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Vui lòng nhập đúng định dạng email"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu từ 6 đến 32 ký tự"),
      rePassword: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu từ 6 đến 32 ký tự")
        .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không đúng"),
    }),

    onSubmit: (values) => {
      let index = arrUsers.findIndex((user) => user.email === values.email);
      if (index != -1) {
        formik.setFieldError("email", "Email đã được đăng ký");
      } else {
        register();
        // console.log("object", values);
      }
    },
  });

  const register = async (data) => {
    try {
      const result = await ManagerUsersService.register(data);
      if (result.status === 200) {
        alert("Bạn đâ đăng ký thành công");
        toggle();
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <form className="form sign-up" onSubmit={formik.handleSubmit}>
      <div className="input-group__custom">
        <i className="bx bxs-user" />
        <input
          type="text"
          placeholder="Tên"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.name && formik.touched.name ? (
        <div style={{ color: "red", textAlign: "left" }}>
          {formik.errors.name}
        </div>
      ) : null}
      <div className="input-group__custom">
        <i className="bx bx-mail-send" />
        <input
          type="email"
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
      <div className="input-group__custom">
        <i className="bx bxs-lock-alt" />
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          name="rePassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.rePassword && formik.touched.rePassword ? (
        <div style={{ color: "red", textAlign: "left" }}>
          {formik.errors.rePassword}
        </div>
      ) : null}
      <button type="submit" disabled={!formik.isValid}>
        Đăng ký
      </button>
      <p>
        <span> Bạn đã có tài khoản? </span>
        <b onClick={() => toggle()} className="pointer">
          {" "}
          Đăng nhập{" "}
        </b>
      </p>
    </form>
  );
};

export default Register;
