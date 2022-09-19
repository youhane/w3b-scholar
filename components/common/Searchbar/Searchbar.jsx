import { useCallback, useState, useRef } from "react";
import {
  Container,
  SearchInput,
  Wrapper,
  StyledButton,
} from "./Searchbar.styles";

const Searchbar = (props) => {
  const [isFocus, setFocus] = useState(false);

  const searchInputRef = useRef();

  const handleMouseEnter = () => {
    setFocus(true);
  };
  const handleMouseLeave = () => {
    setFocus(false);
  };

  const handleClick = useCallback(() => {
    const query = searchInputRef.current.value;
    if (query.length !== 0) {
      props.onSearch(query);
    }
  });

  return (
    <Container>
      <Wrapper>
        <SearchInput
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          focusing={isFocus}
        >
          <svg
            fill="currentColor"
            className="bi bi-box-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" ref={searchInputRef} />
        </SearchInput>
        <StyledButton onClick={handleClick}>Search</StyledButton>
      </Wrapper>
    </Container>
  );
};

export default Searchbar;
