//Merlin Chat component for OpenAI API
//TODO: Figure Grommet UI for chat
//DONE: States for chat

import { React, useState } from "react";
import { Header, Box, Button, TextInput } from "grommet";

import useLangchain from "../hooks/useLangchain";

const MerlinChat = () => {
  //init langchain llmResult
  const { llmPredict, naturalLanguageSearch } = useLangchain();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    const newMessage = "User: " + inputValue + "\n";
    setMessages([...messages, newMessage]);

    //Append response from OpenAI API

    naturalLanguageSearch(inputValue).then((response) => {
      const responseMessage = "Merlin: " + response.content + "\n";
      setMessages([...messages, responseMessage]); // Append the response message to the messages state
    });
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
              sendMessage("User");
            }
          }}
        />
        <Button label="Send" onClick={sendMessage} />
      </Box>
    </Box>
  );
};

export default MerlinChat;
