<<<<<<< HEAD
import React from "react";
import { LinkButton } from "./ShareButton.styles";
=======
import React from 'react'
import { LinkButton } from './ShareButton.styles'
import {RiShareBoxLine} from 'react-icons/ri'
>>>>>>> f3b06e6b2c7b8d0c1b24fe2643c7d0b40d533245

function ShareButton({ shareLink }) {
  return (
<<<<<<< HEAD
    <LinkButton onClick={() => shareLink()}>
      <svg
        height="10"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-box-arrow-up-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
        />
        <path
          fillRule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
        />
      </svg>
      Share
    </LinkButton>
  );
=======
    <LinkButton onClick={() => shareLink()}><RiShareBoxLine/> Share</LinkButton>
  )
>>>>>>> f3b06e6b2c7b8d0c1b24fe2643c7d0b40d533245
}

export default ShareButton;
