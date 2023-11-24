import React from "react";
import { Box, Tab, Tabs } from "grommet";

import AddCategory from "./AddCategory";
import AskMerlin from "./AskMerlin";

const ToolKit = ({ addCategoryNode, nodes, addNode }) => {
  return (
    <>
      <Box gridArea="main" pad="small">
        <Tabs justify="start">
          <Tab title="Add Category">
            <AddCategory addCategoryNode={addCategoryNode} />
          </Tab>
          <Tab title="Ask Merlin">
            <AskMerlin nodes={nodes} addNode={addNode} />
          </Tab>
        </Tabs>
      </Box>
    </>
  );
};

export default ToolKit;
