import React, { useState, useRef } from "react";
import { StyledForgetPass } from "./StyledForgetPass";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

export const ForgetPass = ({ handleClickReset, handleClickLogin }) => {
  const [reset, setReset] = useState({ userName: "" });
  const form = useRef(null);
  const onChange = (e) =>
    setReset({ ...reset, [e.target.name]: e.target.value });

  const submitForm = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(reset);
  };
  return (
    <StyledForgetPass>
      <div className="close_reset" onClick={handleClickReset}>
        <CgClose />
      </div>
      <div className="reset_header">
        <h3 className="title">Lost your password?</h3>
        <p className="description">
          Please enter your username or email address. You will receive a link
          to create a new password via email. Remember now?
          <Link
            to=""
            onClick={() => {
              handleClickLogin();
              handleClickReset();
            }}
          >
            {" "}
            Back to login
          </Link>
        </p>
      </div>
      <div className="lost-password-form">
        <form action="" ref={form} onSubmit={submitForm}>
          <div className="form_group">
            <input
              type="text"
              name="userName"
              onChange={onChange}
              placeholder="Your username or email"
            />
          </div>
          <div className="form_group">
            <button type="submit" className="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </StyledForgetPass>
  );
};
