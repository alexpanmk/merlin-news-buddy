import { useState, React } from "react";
import { TextArea, Box, Button } from "grommet";
import useAirtableCRUD from "../../../../hooks/useAirtableCRUD";

const InsightsInputBox = ({ inputValue, news, updateRecord }) => {
  const [textBoxValue, setTextBoxValue] = useState(inputValue);

  const handleButtonClick = () => {
    updateRecord({
      records: [
        {
          id: news.id,
          fields: {
            comment: textBoxValue,
          },
        },
      ],
    });
  };

  return (
    <>
      <Box pad="medium">
        <TextArea
          placeholder="Type here to add your insights"
          value={textBoxValue}
          onChange={(evt) => {
            setTextBoxValue(evt.target.value);
          }}
        />
      </Box>
      <Box direction="row" gap="small">
        <Button label="Save" onClick={handleButtonClick} />
        {/* <Button label="Clear" /> */}
      </Box>
    </>
  );
};

export default InsightsInputBox;
