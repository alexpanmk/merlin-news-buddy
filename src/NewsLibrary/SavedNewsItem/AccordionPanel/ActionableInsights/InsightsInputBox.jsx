import { useState, React } from "react";
import { TextArea, Box, Button } from "grommet";

const InsightsInputBox = ({ inputValue }) => {
  const [textBoxValue, setTextBoxValue] = useState(inputValue);

  return (
    <>
      <TextArea
        placeholder="Type here to add your insights"
        value={textBoxValue}
        onChange={(evt) => {
          setTextBoxValue(evt.target.value);
        }}
      />
      <Box direction="row" gap="small">
        <Button
          label="Save"
          onClick={() => {
            // updateRecord(news.id, { comment: news.fields.comment });
          }}
        />
        {/* <Button label="Clear" /> */}
      </Box>
    </>
  );
};

export default InsightsInputBox;
