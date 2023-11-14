import React from "react";
import { Box, TextInput } from "grommet";
import NewsList from "../News/NewsList";
import UseStore from "../UseStore";

const SearchBar = () => {
  const [search, setSearch] = UseStore((state) => [
    state.search,
    state.setSearch,
  ]);
  return (
    <>
      <Box gridArea="main" pad="small">
        <TextInput
          placeholder="Search News..."
          style={{ background: "white", marginBottom: "20px" }}
        />
        <NewsList />
      </Box>
    </>
  );
};

export default SearchBar;
