import { useState } from "react";
import {
  Container,
  SearchInput,
  StyledButton,
} from "./Searchbar.styles";
import { BsSearch } from "react-icons/bs";

const Searchbar = ({ onSearch, setSearchQuery, searchQuery }) => {
  const [isFocus, setFocus] = useState(false);

  const handleMouseEnter = () => {
    setFocus(true);
  };
  const handleMouseLeave = () => {
    setFocus(false);
  };

  return (
    <Container>
          <SearchInput
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            focusing={isFocus}
          >
            <BsSearch />
            <input
              type="text"
              name="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchInput>
          <StyledButton onClick={() => onSearch(searchQuery)}>
            Search
          </StyledButton>
    </Container>
  );
};

export default Searchbar;
