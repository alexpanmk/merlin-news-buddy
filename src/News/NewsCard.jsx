import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Text } from "grommet";
import { Favorite, Link } from "grommet-icons";
import useAirtableCRUD from "../hooks/useAirtableCRUD";

const handleSaveNews = () => {
  console.log("click");

  const newRecord = {
    records: [
      {
        fields: {
          newsTitle: "NewRecord",
          newsDescription: "SampleDescription",
          scrapedContent: "Sample scraped content ",
          tagged: "Sample Tags",
          comment: "Comments",
        },
      },
    ],
  };
};

const NewsCard = ({ article }) => {
  const { createRecord } = useAirtableCRUD(
    import.meta.env.VITE_AIRTABLE_BASE_ID,
    "SavedNews"
  );

  return (
    <Card background={"white"}>
      <CardHeader
        align="center"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        pad="small"
      >
        <Text weight="bold" size="large">
          {article.title}
        </Text>
      </CardHeader>
      <CardBody pad="small">{article.description}</CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button
          icon={
            <Favorite
              color="red"
              onClick={() => {
                createRecord({
                  newsTitle: article.title,
                  newsDescription: article.description,
                  scrapedContent: article.content,
                  tagged: "Sample Tags",
                  comment: "Comments",
                });
              }}
            />
          }
          hoverIndicator
        />
        <Button icon={<Link color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
