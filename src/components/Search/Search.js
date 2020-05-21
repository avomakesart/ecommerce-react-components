import React, { useState } from "react";
import {
  Container,
  SearchButton,
  SearchBackground,
  SearchInput,
  Button,
  SearchContainer,
  CloseButton,
  CloseContainer,
} from "./Search.styles";

export default function Search() {
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    setSearch(!search);
  };

  return (
    <Container>
      <SearchButton onClick={handleClick} />
      {search && (
        <SearchBackground>
          <CloseContainer>
            <CloseButton onClick={handleClick} />
          </CloseContainer>
          <form>
            <SearchContainer>
              <SearchInput
                type="search"
                placeholder="What are you looking for?"
              />
              <Button type="submit">Search</Button>
            </SearchContainer>
          </form>
        </SearchBackground>
      )}
    </Container>
  );
}
