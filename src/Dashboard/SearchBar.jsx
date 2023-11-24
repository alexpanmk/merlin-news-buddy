import { useState, React } from "react";
import { Box, TextInput } from "grommet";
import NewsList from "../News/NewsList";
import useStore from "../useStore";

//Custom hooks
import useLangchain from "../hooks/useLangchain";

const SearchBar = () => {
  //For the search bar
  const [searchInput, setSearchInput] = useState("");

  //init langchain function natuaralLanguageSearch
  const { naturalLanguageSearch } = useLangchain();

  //For the search keyword to be fetched
  const [newsFetch, AIMode] = useStore((state) => [
    state.newsFetch,
    state.AIMode,
  ]);

  //NL Search function
  function NLSearch(searchInput) {
    const getSearchParam = naturalLanguageSearch(searchInput)
      .then((response) => {
        newsFetch(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Handle Search
  function handleSearch() {
    AIMode ? NLSearch(searchInput) : newsFetch(searchInput);
  }
  return (
    <>
      <Box direction="row" gap="small">
        <TextInput
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder={
            AIMode
              ? "Merlin is here to help!"
              : "Type here to search with keywords!"
          }
          style={{ background: "white", marginBottom: "20px" }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
