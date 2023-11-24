//Settings for API keys and theme modes (dark/light)
//TODO: OpenAI API key / To fall back on normal search and disable chat if OpenAI API key is not available.
//TODO: Air Table Bearer Token and Table Name
//TODO: Theme mode switcher.

import { TextInput, Box, Heading, Text } from "grommet";

import React from "react";

const Settings = () => {
  return (
    <>
      <Box pad="medium" gap="medium">
        <Heading level="3">Settings</Heading>
        <Box direction="row" gap="small">
          <TextInput placeholder="Enter your OpenAI API Key here" />
        </Box>
      </Box>
    </>
  );
};

export default Settings;
