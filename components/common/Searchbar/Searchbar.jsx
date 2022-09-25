import { useEffect, useState } from "react";
import {
  Container,
  SearchInput,
  Wrapper,
  StyledButton,
  StyledForm,
} from "./Searchbar.styles";
import { BsSearch } from "react-icons/bs";

const Searchbar = ({ onSearch, setSearchQuery, searchQuery }) => {
  // TODO: Make SearchBar Responsive

  const [isFocus, setFocus] = useState(false);

  const handleMouseEnter = () => {
    setFocus(true);
  };
  const handleMouseLeave = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Wrapper>
        <StyledForm>
          <SearchInput
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            focusing={isFocus}
          >
            <BsSearch />
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchInput>
          <StyledButton onClick={() => onSearch(searchQuery)}>
            Search
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Searchbar;
