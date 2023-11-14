import React from "react";
import { TextInput } from "grommet";
import NewsList from "../News/NewsList";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <NewsList />
    </>
  );
};

export default Dashboard;
