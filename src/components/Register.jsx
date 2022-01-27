import React from "react";

const Register = (props) => {
  const toggle = props.toggle;
  return (
    <form className="form sign-up">
      <div className="input-group__custom">
        <i className="bx bxs-user" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group__custom">
        <i className="bx bx-mail-send" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-group__custom">
        <i className="bx bxs-lock-alt" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="input-group__custom">
        <i className="bx bxs-lock-alt" />
        <input type="password" placeholder="Confirm password" />
      </div>
      <button>Sign up</button>
      <p>
        <span> Already have an account? </span>
        <b onClick={() => toggle()} className="pointer">
          {" "}
          Sign in here{" "}
        </b>
      </p>
    </form>
  );
};

export default Register;
