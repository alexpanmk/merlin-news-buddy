import React, { useEffect } from "react";
import { Accordion, AccordionPanel, Box } from "grommet";
import UseStore from "../UseStore";

//To bring in savedNews from store and all corresponding methods

const LibraryList = () => {
  const [savedNews, setSavedNews] = UseStore((state) => [
    state.savedNews,
    state.setSavedNews,
  ]);

  useEffect(() => {
    //To stub fetch logic for Airtable
    setSavedNews();
  }, []);

  return <div>LibraryList</div>;
};

export default LibraryList;
