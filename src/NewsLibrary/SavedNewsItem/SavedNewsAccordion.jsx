import React, { useState } from "react";
import {
  Button,
  TextArea,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionPanel,
} from "grommet";
import useAirtableCRUD from "../../hooks/useAirtableCRUD";
import useStore from "../../useStore";

const SavedNewsAccordion = () => {
  const { data, deleteRecord, updateRecord } = useAirtableCRUD(
    import.meta.env.VITE_AIRTABLE_BASE_ID,
    "SavedNews"
  );

  return (
    <>
      <Accordion>
        {data.map((news) => (
          <AccordionPanel
            key={news.id}
            label={news.fields.newsTitle}
            onClick={() => {
              console.log("AccordionPanel onClick");
            }}
          >
            <Tabs justify="start">
              <Tab title="Description">
                <Box pad="medium">{news.fields.newsDescription}</Box>
                <Button
                  pad={"10"}
                  label="Delete"
                  onClick={() => deleteRecord(news.id)}
                />
              </Tab>
              <Tab title="Content"></Tab>
              <Tab title="Actionable Insights">
                <TextArea
                  placeholder="Type here to add your insights"
                  value={news.fields.comment}
                  onChange={(event) => {}}
                />
                <Box direction="row" gap="small">
                  <Button
                    label="Save"
                    onClick={() => {
                      updateRecord(news.id, { comment: news.fields.comment });
                    }}
                  />
                  {/* <Button label="Clear" /> */}
                </Box>
              </Tab>
              <Tab title="Affinity Map"></Tab>
            </Tabs>
          </AccordionPanel>
        ))}
      </Accordion>
    </>
  );
};

export default SavedNewsAccordion;
