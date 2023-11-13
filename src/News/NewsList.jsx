import React from "react";
import NewsCard from "./NewsCard";
import { Grid } from "grommet";

const NewsList = () => {
  return (
    <>
      <Grid columns={{ count: 3, size: "auto" }} gap="medium">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Grid>
    </>
  );
};

export default NewsList;
