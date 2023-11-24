import { useState, React } from "react";
import { Box, TextInput } from "grommet";
import NewsList from "../News/NewsList";
import useStore from "../useStore";

//Custom styled components
import { FancySwitch } from "../styles/sharedStyles";
import { Slider } from "../styles/sharedStyles";

const SearchBar = () => {
  //For the search bar
  const [searchInput, setSearchInput] = useState("");

  //For the search keyword to be fetched
  const [search, setSearch] = useStore((state) => [
    state.search,
    state.setSearch,
  ]);

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
              setSearch(searchInput);
            }
          }}
          placeholder="Search News..."
          style={{ background: "white", marginBottom: "20px" }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
