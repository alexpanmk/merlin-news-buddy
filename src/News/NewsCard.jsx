import React from "react";
import { Card, CardBody, CardHeader, Text } from "grommet";

const NewsCard = ({ article }) => {
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
    </Card>
  );
};

export default NewsCard;
