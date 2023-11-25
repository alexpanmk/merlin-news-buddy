import React from "react";
import NewsList from "../News/NewsList";
import SearchBar from "./SearchBar";
import { Box } from "grommet";

const Dashboard = () => {
  return (
    <>
      <Box gridArea="main" pad="small">
        <SearchBar />
        <NewsList />
      </Box>
    </>
  );
};

export default Dashboard;
