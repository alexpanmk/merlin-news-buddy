import React from "react";
import { Box } from "grommet";
import SavedNewsAccordion from "./SavedNewsItem/SavedNewsAccordion";

const NewsLibrary = () => {
  return (
    <>
      <Box gridArea="main" pad="small">
        <SavedNewsAccordion />
      </Box>
    </>
  );
};

export default NewsLibrary;
