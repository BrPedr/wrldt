import React from "react";
import { useState } from "react";

const Input = ({ id, className }) => {
  const [term, setTerm] = useState("");

  return (
    <React.Fragment>
      <label for={id}>
        <input
          className={className}
          type="text"
          id={id}
          name={id}
          value={term}
          placeholder={id}
          onChange={(event) => setTerm(event.target.value)}
          required
        />
      </label>
      <br />
    </React.Fragment>
  );
};

export default Input;
