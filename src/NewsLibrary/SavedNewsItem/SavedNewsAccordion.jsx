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

//NewsLab RF store
import useRFStore from "../../useRFStore";

import ActionableInsights from "./AccordionPanel/ActionableInsights/ActionableInsights";

const SavedNewsAccordion = () => {
  const { nodes, addNode } = useRFStore();
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
              console.log(news.id);
            }}
          >
            <Tabs justify="start">
              <Tab title="Description">
                <Box pad="medium">{news.fields.newsDescription}</Box>
                <Box direction="row" pad="small" gap="small">
                  <Button
                    pad={"10"}
                    label="Delete"
                    onClick={() => deleteRecord(news.id)}
                  />
                  <Button
                    pad={"10"}
                    label="Send to News Lab"
                    onClick={() => {
                      const newID = String(nodes.length + 1);
                      const newNode = {
                        id: newID,
                        connectable: false,
                        data: {
                          label: news.fields.newsTitle,
                        },
                        style: {
                          minwidth: 300,
                        },
                        position: { x: 100, y: 25 },
                      };
                      addNode(newNode);
                    }}
                  />
                  <Button
                    pad={"10"}
                    label="Open News"
                    onClick={() => {
                      window.open(news.fields.link);
                    }}
                  />
                </Box>
              </Tab>
              <Tab title="Content"></Tab>
              <Tab title="Actionable Insights">
                <ActionableInsights news={news} updateRecord={updateRecord} />
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
