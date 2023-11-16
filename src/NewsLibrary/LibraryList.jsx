import React, { useEffect } from "react";
import { Accordion, AccordionPanel, Box } from "grommet";
import useStore from "../useStore";
import useAirtableCRUD from "../hooks/NewsLibrary/useAirtableCRUD";

const LibraryList = () => {
  //Initiate the useAirtableCRUD hook
  const { data, createRecord, updateRecord, deleteRecord } = useAirtableCRUD(
    import.meta.env.VITE_AIRTABLE_BASE_ID,
    "SavedNews"
  );

  console.log("data", data);

  return (
    <Box>
      <Accordion>
        <AccordionPanel label="Panel 1">
          <Box background="light-2" overflow="auto" height="medium">
            <Box height="large" flex={false}>
              Panel 1 contents
            </Box>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box background="light-2" style={{ height: "50px" }}>
            Panel 2 contents
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 3">
          <Box background="light-2" style={{ height: "300px" }}>
            Panel 3 contents
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};

export default LibraryList;
