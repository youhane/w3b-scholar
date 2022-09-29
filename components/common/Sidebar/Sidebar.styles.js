<<<<<<< HEAD
import styled from "styled-components";
import {COLORS} from '../../../constants/styles'

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    width: max-content;
`

export const Top = styled.div`

`

export const Bottom = styled.div`

=======
import styled from "styled-components";
import {COLORS} from '../../../constants/styles'

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    width: max-content;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Top = styled.div`

`

export const Bottom = styled.div`

>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
`