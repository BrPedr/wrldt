import React from "react";
import './Form.css'

const Form = ({ text, children }) => {
  return (
    <div className="form">
      <h2>{text}</h2>
      <form action="">{children}</form>
    </div>
  );
};

export default Form;
