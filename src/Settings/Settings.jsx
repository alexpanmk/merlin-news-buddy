//Settings for API key
//TODO: OpenAI API key / To fall back on normal search and disable chat if OpenAI API key is not available.
//TODO: Theme mode switcher.
import { React, useState } from "react";
import { Button, TextInput, Box, Heading, Text } from "grommet";
import useStore from "../useStore";

const Settings = () => {
  const [openAIKeyInput, setOpenAIKeyInput] = useState("");
  const [newsAPIKeyInput, setNewsAPIKeyInput] = useState("");

  const [setNewsAPIKey, setOpenAIKey] = useStore((state) => [
    state.setNewsAPIKey,
    state.setOpenAIKey,
  ]);

  return (
    <>
      <Box height={"100%"} pad="medium" gap="medium" background={"white"}>
        <Heading level="3">Settings</Heading>
        <Text>API Keys</Text>
        <Box direction="row" gap="small">
          <TextInput placeholder="Enter your OpenAI API Key here" />
        </Box>
        <Box direction="row" gap="small">
          <TextInput placeholder="Enter your NewsAPI API Key here" />
        </Box>
        <Box direction="row" gap="small">
          <Button
            label="Save"
            onClick={() => {
              setOpenAIKey(openAIKeyInput);
              // setNewsAPIKey(newsAPIKeyInput);
            }}
          />
          <Button
            label="Clear"
            onClick={() => {
              setOpenAIKeyInput("");
              setNewsAPIKeyInput("");
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Settings;
