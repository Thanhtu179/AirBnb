import React, { useRef, useEffect, useCallback } from "react";

import svgSignIn from "../assets/image/undraw_different_love_a3rg.svg";
import svgSignUp from "../assets/image/undraw_creative_team_r90h.svg";
import Login from "../components/Login";
import Register from "../components/Register";
import { Link } from "react-router-dom";

const LoginRegister = (props) => {
  const loginRegisterRef = useRef(null);
  const timeOut = useRef(null);
  const toggle = useCallback(() => {
    loginRegisterRef.current.classList.toggle("sign-in");
    loginRegisterRef.current.classList.toggle("sign-up");
  });

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      loginRegisterRef.current.classList.add("sign-in");
    }, 200);

    return () => {
      clearInterval(timeOut.current);
    };
  }, []);

  return (
    <div id="login-register" className="login-register" ref={loginRegisterRef}>
      <Link to="/" className="btn-back-home">
        <i className="bx bx-left-arrow-alt"></i>
        <span>Về trang chủ</span>
      </Link>
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <Register toggle={toggle} />
          </div>
          <div className="form-wrapper">
            <div className="social-list align-items-center sign-up">
              <div className="align-items-center facebook-bg">
                <i className="bx bxl-facebook" />
              </div>
              <div className="align-items-center google-bg">
                <i className="bx bxl-google" />
              </div>
              <div className="align-items-center twitter-bg">
                <i className="bx bxl-twitter" />
              </div>
              <div className="align-items-center insta-bg">
                <i className="bx bxl-instagram-alt" />
              </div>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <Login toggle={toggle} />
          </div>
          <div className="form-wrapper">
            <div className="social-list align-items-center sign-in">
              <div className="align-items-center facebook-bg">
                <i className="bx bxl-facebook" />
              </div>
              <div className="align-items-center google-bg">
                <i className="bx bxl-google" />
              </div>
              <div className="align-items-center twitter-bg">
                <i className="bx bxl-twitter" />
              </div>
              <div className="align-items-center insta-bg">
                <i className="bx bxl-instagram-alt" />
              </div>
            </div>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome back</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              obcaecati, accusantium molestias, laborum, aspernatur deserunt
              officia voluptatum tempora dicta quo ab ullam. Assumenda enim
              harum minima possimus dignissimos deserunt rem.
            </p>
          </div>
          <div className="img sign-in">
            <img src={svgSignIn} alt="welcome" />
          </div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
            <img src={svgSignUp} alt="welcome" />
          </div>
          <div className="text sign-up">
            <h2>Join with us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              obcaecati, accusantium molestias, laborum, aspernatur deserunt
              officia voluptatum tempora dicta quo ab ullam. Assumenda enim
              harum minima possimus dignissimos deserunt rem.
            </p>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
};

export default LoginRegister;
