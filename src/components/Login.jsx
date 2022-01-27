import React from "react";

const Login = (props) => {
  const toggle = props.toggle;
  return (
    <form className="form sign-in">
      <div className="input-group__custom">
        <i className="bx bxs-user" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group__custom">
        <i className="bx bxs-lock-alt" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Sign in</button>
      <p>
        <b> Forgot password? </b>
      </p>
      <p>
        <span> Don't have an account? </span>
        <b onClick={() => toggle()} className="pointer">
          {" "}
          Sign up here{" "}
        </b>
      </p>
    </form>
  );
};

export default Login;
