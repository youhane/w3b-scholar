import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { Wrapper } from "./ScrollButton.styles";

function ScrollButon() {
  return (
    <Wrapper
      onClick={() =>
        window.scrollTo({
          behavior: "smooth",
          top: "0px",
        })
      }
    >
      <BsArrowUp /> Back to Top
    </Wrapper>
  );
}

export default ScrollButon;
