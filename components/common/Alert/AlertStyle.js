import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }



  100% {
    opacity: 0;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const AlertWrapper = styled.div`
  background-color: rgba(230, 244, 241, 0.86);
  max-width: 6rem;
  padding: 0.4rem 0.8rem;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
  border-radius: 4px;
  line-height: 16px;
  text-align: center;
  color: #002e5b;
  margin-top: 1.25rem;
  margin-right: .5rem;

  visibility: visible;
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;

  @media (max-width: 1024px) {
    font-size: 4px;
  }
`;
