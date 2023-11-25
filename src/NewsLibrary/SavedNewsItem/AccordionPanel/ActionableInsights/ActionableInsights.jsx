import { useState, React } from "react";
import InsightsInputBox from "./InsightsInputBox";
import { Box } from "grommet";

const ActionableInsights = ({ news, updateRecord }) => {
  const [inputValue, setInputValue] = useState(news.fields.comment);

  return (
    <Box>
      <InsightsInputBox
        news={news}
        updateRecord={updateRecord}
        inputValue={inputValue}
      />
    </Box>
  );
};

export default ActionableInsights;
