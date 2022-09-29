<<<<<<< HEAD
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.footer`
    background: ${COLORS.darkblue};
    color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;
    font-weight: 500;

    img{
        width: 2%;
    }

    p{
        color: white;
    }

    @media (max-width: 768px) {
        gap: 1rem;
        
        img{
            width: 10%;
        }
    }
`
=======
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.footer`
  background: ${COLORS.darkblue};
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  font-weight: 500;

  img {
    width: 2%;
  }

  p {
    color: white;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    img {
      width: 10%;
    }
  }
`;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
