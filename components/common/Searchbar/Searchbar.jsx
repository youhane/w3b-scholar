import { useState } from "react";
import {
  Container,
  SearchInput,
  Wrapper,
  StyledButton,
  StyledForm,
} from "./Searchbar.styles";

const Searchbar = (props) => {
  // TODO: Make SearchBar Responsive

  const [isFocus, setFocus] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");

  const handleMouseEnter = () => {
    setFocus(true);
  };
  const handleMouseLeave = () => {
    setFocus(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = enteredSearch;
    console.log(query);
    props.onSearch(query);
  };

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={handleSearch}>
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

            <input
              type="text"
              name="search"
              onChange={(event) => setEnteredSearch(event.target.value)}
            />
          </SearchInput>
          <StyledButton type="submit" onClick={handleSearch}>
            Search
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Searchbar;
