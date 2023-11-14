import { useState, React } from "react";
import { Box, TextInput } from "grommet";
import NewsList from "../News/NewsList";
import UseStore from "../UseStore";

const SearchBar = () => {
  //For the search bar
  const [searchInput, setSearchInput] = useState("");

  //For the search keyword to be fetched
  const [search, setSearch] = UseStore((state) => [
    state.search,
    state.setSearch,
  ]);

  return (
    <>
      <TextInput
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearch(searchInput);
          }
        }}
        placeholder="Search News..."
        style={{ background: "white", marginBottom: "20px" }}
      />
    </>
  );
};

export default SearchBar;
