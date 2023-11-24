//Component for NewsLab which include a text input and button to add a node (brown bg by default
import { React, useState } from "react";
import { Box, Button, TextInput } from "grommet";

//Styled components
import { FancyButton } from "../styles/sharedStyles";

const AddCategory = ({ addCategoryNode }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Box pad="medium">
        <Box direction="row" gap="small">
          <TextInput
            placeholder="Type here to add a category post-it!"
            value={inputValue}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
          />
          <Button
            label="Add"
            onClick={() => {
              addCategoryNode(inputValue);
            }}
          />

          <Button
            label="Clear"
            onClick={() => {
              setInputValue("");
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AddCategory;
