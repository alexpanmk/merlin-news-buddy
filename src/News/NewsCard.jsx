import React from "react";
import { Card, CardBody, CardHeader, Text } from "grommet";

const NewsCard = () => {
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
          Card title
        </Text>
      </CardHeader>
      <CardBody pad="small">Card body</CardBody>
    </Card>
  );
};

export default NewsCard;
