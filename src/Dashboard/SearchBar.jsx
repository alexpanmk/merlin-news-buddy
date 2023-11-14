import React from "react";
import { Box, TextInput } from "grommet";
import NewsList from "../News/NewsList";

const SearchBar = () => {
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
