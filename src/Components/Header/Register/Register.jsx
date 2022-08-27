import React, { useState, useRef } from "react";
import { StyledRegisterForm } from "./StyledRegister";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Register = ({ handleClickRegister, handleClickLogin }) => {
  /* Setting the state of the user object. */
  const [type, setType] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
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
    <StyledRegisterForm>
      <div className="close_register" onClick={handleClickRegister}>
        <CgClose />
      </div>
      <div className="register_header">
        <h3 className="register_title">Sign Up</h3>
        <p className="register_description">
          Already have an account?
          <Link
            to="/"
            onClick={() => {
              handleClickLogin();
              handleClickRegister();
            }}
          >
            {" "}
            Log in{" "}
          </Link>
        </p>
      </div>
      <div className="register_body">
        <form action="" ref={form} onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              type="text"
              id="name"
              className="form-control form-input"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_group">
            <input
              type="text"
              id="reg_username"
              className="form-control form-input"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_group">
            <input
              type="email"
              id="reg_email"
              className="form-control form-input"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form_group">
            <input
              type={type ? "text" : "password"}
              id="reg_password"
              className="form-control form-input"
              onChange={handleChange}
              name="password"
              placeholder="Password"
              required
            />
            <div className="show_hide_btn" onClick={handlePassword}>
              {type ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="form_group">
            <label
              className="form-label form-label-checkbox"
              htmlFor="ip_rememberme"
            >
              <input
                type="checkbox"
                id="checkbox"
                className="form-checkbox"
                onChange={handleChange}
                name="checkbox"
                value="yes"
                required
              />
              <label htmlFor="checkbox">
                Yes, I agree with Privacy Policy and Terms of Use
              </label>
            </label>
          </div>
          <div className="form_group form_submit">
            <button type="submit" className="submit_btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </StyledRegisterForm>
  );
};
