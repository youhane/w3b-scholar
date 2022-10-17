import React, { useState } from "react";

import { Wrapper } from "./InputBox.styles";

const InputBox = ({ type, label, errorMessage, state, setState }) => {
  const inputBoxId = label.toLowerCase().replace(" ", "_");

  return (
    <Wrapper className={state}>
      <div className="input-box">
        <label htmlFor={inputBoxId}>{label}</label>
        <input
          type={type}
          id={inputBoxId}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <p className="error-message">{errorMessage}</p>
      </div>
    </Wrapper>
  );
};

export default InputBox;
