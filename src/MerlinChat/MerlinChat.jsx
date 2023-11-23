//Merlin Chat component for OpenAI API
//TODO: Figure Grommet UI for chat
//DONE: States for chat

import { Box, Button, TextInput } from "grommet";

import { React, useState } from "react";

const MerlinChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <Box pad="medium" gap="medium">
      <Box height="medium" overflow="auto">
        {messages.map((msg, index) => (
          <Box key={index} pad="small" border={{ side: "bottom" }}>
            {msg}
          </Box>
        ))}
      </Box>
      <Box direction="row" gap="small">
        <TextInput
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <Button label="Send" onClick={sendMessage} />
      </Box>
    </Box>
  );
};

export default MerlinChat;
