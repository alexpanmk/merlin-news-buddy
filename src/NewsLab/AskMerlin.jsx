//Component for NewsLab which is an input to ask merlin question which in turn generate a node for the response
import { React, useState } from "react";
import { Box, Button, TextInput } from "grommet";

//Langchain
import useLangchain from "../hooks/useLangchain";

const AskMerlin = ({ nodes, addNode }) => {
  const [inputValue, setInputValue] = useState("");
  const { llmPredict } = useLangchain();

  //TODO: function for merlin response
  function merlinResponse(content) {
    let answer = "";
    llmPredict(content).then((response) => {
      answer = response.content;
      const nodeContent =
        "Question: " + content + "\n" + "Answer: " + answer + "\n";

      const newNodeID = String(nodes.length + 1);

      const newNode = {
        id: newNodeID,
        connectable: false,
        data: { label: nodeContent },
        position: { x: 100, y: 200 },
        style: {
          backgroundColor: "grey",
          color: "white",
          fontSize: "20px",
          //width according to text length
          minWidth: content.length * 10 + 50,
        },
      };
      addNode(newNode);
    });
  }

  return (
    <>
      <Box pad={"small"}>
        <Box direction="row" gap="small">
          <TextInput
            placeholder="I'm Merlin and I'm here to help!"
            value={inputValue}
            onChange={(evt) => {
              setInputValue(evt.target.value);
            }}
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                merlinResponse(inputValue);
              }
            }}
          />
          <Button
            label="Ask"
            onClick={() => {
              merlinResponse(inputValue);
            }}
          />

          <Button
            label="Clear"
            onClick={() => {
              setInputValue("");
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AskMerlin;
