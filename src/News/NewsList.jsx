import React from "react";
import NewsCard from "./NewsCard";
import { Grid } from "grommet";

import useStore from "../useStore";

const NewsList = () => {
  const [news, setNews] = useStore((state) => [state.news, state.setNews]);

  return (
    <>
      <Grid columns={{ count: 3, size: "auto" }} gap="medium">
        {news.map((article, index) => {
          return <NewsCard key={index} article={article} />;
        })}
      </Grid>
    </>
  );
};

export default NewsList;
