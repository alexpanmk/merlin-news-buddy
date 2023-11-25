import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Text } from "grommet";
import { Save, Link } from "grommet-icons";
import useAirtableCRUD from "../hooks/useAirtableCRUD";

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
            <Save
              color="red"
              onClick={() => {
                createRecord({
                  newsTitle: article.title,
                  newsDescription: article.description,
                  scrapedContent: article.content,
                  link: article.url,
                  tagged: "Sample Tags",
                  comment: "Comments",
                });
              }}
            />
          }
          hoverIndicator
        />
        <Button
          icon={<Link color="plain" />}
          hoverIndicator
          onClick={() => {
            window.open(article.url, "_blank");
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
