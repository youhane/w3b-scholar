import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;
`;

export const Title = styled.h1`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  background: linear-gradient(91.62deg, #3c9fd7 0%, #009483 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  margin: 1.75rem 0 3rem;
  @media only screen and (max-width: 1024px) {
    margin: 1.75rem 0 6rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
  }
  @media only screen and (max-width: 414px) {
    img {
      width: 15%;
    }
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftFormWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  width: 15rem;
  padding-bottom: 7.5rem;

  align-content: flex-start;

  background: #3c9fd7;
  opacity: 0.8;
  border-radius: 24px 0px 0px 24px;
  img {
    width: 20rem;
  }
  @media only screen and (max-width: 1024px) {
    border-radius: 24px 24px 0px 0px;
    padding: 2.5rem 2.5rem 0rem;
    width: 22rem;
    height: 11.25rem;
    img {
      width: 20rem;
      padding: 0;
    }

    #line {
      display: none;
    }
    @media only screen and (max-width: 414px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 16rem;
      height: 5.5rem;
      img {
        width: 12rem;
        padding: 0;
      }
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  background: #ffffff;
  justify-content: space-between;
  padding: 2.5rem 2.5rem 2rem;
  border-radius: 0px 24px 24px 0px;

  input {
    padding: 0 0.5rem;
    height: 1.5rem;
    opacity: 0.6;
    border-radius: 6px;
    margin-bottom: 0.5rem;

    :focus{
      outline: none;
    }
  }
  input[type="file"] {
    display: none;
  }
  label {
    font-family: "Rubik";
    font-size: 1rem;
    line-height: 24px;
    margin-bottom: 0.25rem;
    color: ${COLORS.darkGrey};
  }

  @media only screen and (max-width: 1024px) {
    border-radius: 0px 0px 24px 24px;
    width: 22rem;
  }

  @media only screen and (max-width: 414px) {
    width: 16rem;
    input {
      height: 1.25rem;
      opacity: 0.6;
      border: 2px solid #3c9fd7;
      border-radius: 4px;
      margin-bottom: 0.75rem;
    }
    input[type="file"] {
      display: none;
    }
    label {
      font-family: "Rubik";
      font-size: 0.75rem;
      line-height: 24px;
      margin-bottom: 0.5rem;
      color: ${COLORS.darkGrey};
    }
  }
`;

export const StyledButton = styled.button`
  background: ${(props) => (props.color ? props.color : COLORS.pink)};
  border: none;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 1rem 2rem;
  color: ${COLORS.white};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
  width: fill-available;

  cursor: pointer;

  :hover {
    background: #c75a8f;
  }

  span {
    font-size: 1.2rem;
    display: flex;
  }
`;

export const FileLabelWrapper = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${(props) => (props.color ? props.color : COLORS.white)};
  border: 2px solid #da75af;
  border-radius: 0.5rem;
  justify-content: center;
  gap: 1rem;
  padding: 0.6rem 1rem;
  color: ${COLORS.pink}!important;
  font-family: "Rubik";
  font-weight: 400;
  font-size: 0.75rem !important;
  line-height: 1.5rem;
  width: fill-available;
  cursor: pointer;

  :hover {
    background: #f5f5f5;
  }

  span {
    font-size: 1.2rem;
    display: flex;
  }
  img {
    height: 1.1rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 1rem;
    font-family: "Rubik";
    font-weight: 400;
    font-size: 0.9rem !important;
    line-height: 1.5rem;
    img {
      height: 0.75rem;
    }
  }

  @media only screen and (max-width: 414px) {
    font-size: 0.75rem !important;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 0.5rem 0;
    color: ${COLORS.darkGrey};
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  label {
    font-size: 1rem !important;
    img {
      height: 1.75rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    label {
      padding: 0.5rem 1rem;
      font-family: "Rubik";
      font-weight: 400;
      font-size: 1rem !important;
      line-height: 1.5rem;
      img {
        height: 0.75rem;
      }
    }
  }
`;

export const SmallLabel = styled.label`
  font-size: 0.75rem !important;
  color: ${COLORS.pink}!important;
  text-decoration: underline;
  text-decoration-color: ${COLORS.pink};
`;

export const ErrorWrapper = styled.div`
  color: #c80303;
  font-family: "Rubik";
  font-size: 0.65rem;
  display: ${props => props.show? 'flex': 'none'};
  margin: 0 0 0.5rem;
`;

export const InputWrapper = styled.input`
  border: ${props => props.wrong? '2px solid #c80303': '2px solid #3c9fd7'};

`;
