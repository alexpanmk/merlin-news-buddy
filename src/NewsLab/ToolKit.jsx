import React from "react";
import { Box, Tab, Tabs } from "grommet";

import AddCategory from "./AddCategory";
import AskMerlin from "./AskMerlin";

const ToolKit = ({ addCategoryNode }) => {
  return (
    <>
      <Box gridArea="main" pad="small">
        <Tabs justify="start">
          <Tab title="Add Category">
            <AddCategory addCategoryNode={addCategoryNode} />
          </Tab>
          <Tab title="Ask Merlin">
            <AskMerlin />
          </Tab>
        </Tabs>
      </Box>
    </>
  );
};

export default ToolKit;
