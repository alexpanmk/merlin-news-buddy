//Component for NewsLab which include a text input and button to add a node (brown bg by default
import React from "react";
import { Box, Button, TextInput } from "grommet";

const AddCategory = () => {
  return (
    <>
      <Box pad="medium">
        <Box direction="row" gap="small">
          <TextInput placeholder="Type here to add a category" />
          <Button label="Add" />
          {/* <Button label="Clear" /> */}
        </Box>
      </Box>
    </>
  );
};

export default AddCategory;
