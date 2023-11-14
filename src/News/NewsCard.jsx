import React from "react";
import { Button, Card, CardBody, CardHeader, CardFooter, Text } from "grommet";

import { Favorite, ShareOption } from "grommet-icons";

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
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
