import React, { useEffect } from "react";
import { Accordion, AccordionPanel, Box } from "grommet";
import UseStore from "../UseStore";

//To bring in savedNews from store and all corresponding methods

const LibraryList = () => {
  //   const { animate, multiple, ...rest } = props;

  const [savedNews, setSavedNews] = UseStore((state) => [
    state.savedNews,
    state.setSavedNews,
  ]);

  useEffect(() => {
    //To stub fetch logic for Airtable
    setSavedNews();
  }, []);

  return (
    <Box>
      <Accordion>
        {/* <Accordion animate={animate} multiple={multiple}> */}
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
