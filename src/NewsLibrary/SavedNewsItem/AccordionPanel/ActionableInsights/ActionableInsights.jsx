import { useState, React } from "react";
import InsightsInputBox from "./InsightsInputBox";
import { Box } from "grommet";

// import { updateRecord } from "../../../hooks/useAirtableCRUD";

const ActionableInsights = ({ news }) => {
  const [inputValue, setInputValue] = useState(news.fields.comment);

  return (
    <Box>
      <InsightsInputBox inputValue={inputValue} />
    </Box>
  );
};

export default ActionableInsights;
