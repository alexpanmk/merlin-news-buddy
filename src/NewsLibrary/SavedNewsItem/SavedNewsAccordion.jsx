import React, { useState } from "react";
import { Tabs, Tab, Box, Accordion, AccordionPanel } from "grommet";
import useAirtableCRUD from "../../hooks/useAirtableCRUD";

const SavedNewsAccordion = () => {
  const [savedNewsList, setSavedNewsList] = useState([]);

  const { data, createRecord, updateRecord, deleteRecord } = useAirtableCRUD(
    import.meta.env.VITE_AIRTABLE_BASE_ID,
    "SavedNews"
  );

  return (
    <>
      <Accordion>
        {data.map((savedNews) => (
          <AccordionPanel
            key={savedNews.id}
            label={savedNews.fields.newsTitle}
            onClick={() => {
              console.log("AccordionPanel onClick");
            }}
          >
            <Tabs justify="start">
              <Tab title="Description">
                <Box pad="medium">{savedNews.fields.newsDescription}</Box>
              </Tab>
              <Tab title="Content"></Tab>
              <Tab title="Actionable Insights"></Tab>
              <Tab title="Affinity Map"></Tab>
            </Tabs>
          </AccordionPanel>
        ))}
      </Accordion>
    </>
  );
};

export default SavedNewsAccordion;
