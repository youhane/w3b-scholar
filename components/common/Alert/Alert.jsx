import React from "react";
import { AlertWrapper } from "./AlertStyle";

const Alert = (props) => {
  return (
    <AlertWrapper>
      <span>{props.message}</span>
    </AlertWrapper>
  );
};

export default Alert;
