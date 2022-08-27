import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { StyledLogin } from "./StyledLogin";

export const Login = ({
  handleClickReset,
  handleClickLogin,
  handleClickRegister,
}) => {
  /* Setting the state of the form to false and then setting the state of the user to an object with a
name and password. Then it is setting the form to a ref. Then it is setting the handleChange to set
the user state to the current user state and the target name and target value. Then it is setting
the handleSubmit to prevent the default action and reset the form and then log the user. Then it is
setting the handlePassword to set the type to the current type. */
  const [type, setType] = useState(false);
  const [user, setUser] = useState({ name: "", password: "" });
  const form = useRef(null);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(user);
  };
  const handlePassword = (e) => {
    setType((current) => !current);
  };
  return (
    <StyledLogin>
      <div className="close_login" onClick={handleClickLogin}>
        <CgClose />
      </div>
      <div className="login_header">
        <h3 className="login_title">Sign In</h3>
        <p className="login_description">
          Don't have an account yet?
          <Link
            to="/"
            onClick={() => {
              handleClickRegister();
              handleClickLogin();
            }}
          >
            {" "}
            Sign up{" "}
          </Link>
          for free
        </p>
      </div>
      <div className="login_body">
        <form ref={form} method="post" onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              type="text"
              id="name"
              onChange={handleChange}
              className="form-control form-input"
              name="name"
              placeholder="Your username or email"
              required
            />
          </div>
          <div className="form_group">
            <input
              type={type ? "text" : "password"}
              id="password"
              onChange={handleChange}
              className="form-control form-input"
              name="password"
              placeholder="Password"
              required
            />
            <div className="show_hide_btn" onClick={handlePassword}>
              {type ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="form_group checkbox_group">
            <div className="checkbox">
              <label
                className="form-label form-label-checkbox"
                htmlFor="ip_rememberme"
              >
                <input
                  type="checkbox"
                  id="ip_rememberme"
                  onChange={handleChange}
                  className="form-checkbox"
                  name="checkbox"
                  value="Stay signed in"
                  required
                />
                <label htmlFor="ip_rememberme">Stay signed in</label>
              </label>
            </div>
            <div className="forget_password">
              <Link
                to="/"
                onClick={() => {
                  handleClickReset();
                  handleClickLogin();
                }}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="form_group">
            <button type="Submit" className="button form_submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </StyledLogin>
  );
};
