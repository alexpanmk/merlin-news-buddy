//Component for NewsLab which is an input to ask merlin question which in turn generate a node for the response
import { React, useState } from "react";
import { Box, Button, TextInput } from "grommet";

const AskMerlin = () => {
  const [inputValue, setInputValue] = useState("");

  //TODO: function for merlin response

  return (
    <>
      <Box pad={"small"}>
        <Box direction="row" gap="small">
          <TextInput
            placeholder="I'm Merlin and I'm here to help!"
            value={inputValue}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                // addCategoryNode(inputValue);
              }
            }}
          />
          <Button
            label="Add"
            onClick={() => {
              // addCategoryNode(inputValue);
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

export default AskMerlin;
