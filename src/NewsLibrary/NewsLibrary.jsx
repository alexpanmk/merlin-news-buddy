import React from "react";
import { Box } from "grommet";
import LibraryList from "./LibraryList";

const NewsLibrary = () => {
  return (
    <>
      <Box gridArea="main" pad="small">
        <LibraryList />
      </Box>
    </>
  );
};

export default NewsLibrary;
