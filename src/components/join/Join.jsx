import React from "react";
import {Link} from "react-router-dom";

import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";

import "./Join.css";

const Join = () => {
  return (
    <div id="form-join">
      <div className="join-register">
        <h3>Have an account?</h3>
        <Link
          to="/sign-in"
          className="join a-form"
          style={{ textDecoration: "none" }}
        >
          Sign In
        </Link>
      </div>
      <Form text="Registration">
        <Input id="name" className="box name" />
        <Input id="adress" className="box adress" />
        <Input id="login" className="box" />
        <Input id="email" className="box" />
        <Input id="password" className="box" />
        <Input id="phone" className="box" />
        <Input id="category" className="box category" />
        <Input id="bio" className="box bio" />
      <h6>
        By creating a WORLDART account you agree to our <br />
        <Link className="a-form" href="/about">
          Terms of Service
        </Link>
        &nbsp;&nbsp;&nbsp;and
        <Link className="a-form" href="about">
          &nbsp;&nbsp;&nbsp;Privace Policy
        </Link>
        .
      </h6>
      <Button buttonText="Register"></Button>
      </Form>
    </div>
  );
};

export default Join;
