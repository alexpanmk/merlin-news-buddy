// Note: NewsLab component
// TODO: Right click for new category node
// TODO: Function to create new category node
// TODO: Category node to encapsulate a component which allows editing and deleting of category
// UseLocalstorage to save lab state

import React, { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow,
  useNodesState,
} from "reactflow";

//CSS Stuffs
import "reactflow/dist/style.css";
import "./style.css";
import { Box } from "grommet";

//Child components
import AddCategory from "./AddCategory";

import useStore from "../useStore";

const NewsLab = () => {
  const [nodes, setNodes] = useState(initialNodes);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  //function to add node
  function addCategoryNode(content) {
    const newNodeID = String(nodes.length + 1);

    const newNode = {
      id: newNodeID,
      connectable: false,
      data: { label: content },
      position: { x: 100, y: 200 },
      style: {
        backgroundColor: "brown",
        color: "white",
        fontSize: "20px",
        //width according to text length
        minWidth: content.length * 10 + 50,
      },
    };
    setNewsLabNodes((newsLabNodes) => [...newsLabNodes, newNode]);
    setNodes((nodes) => [...nodes, newNode]);
  }

  //function to return screenToFlowPosition from mouse coordinates
  // const screenToFlowPosition = (mouseX, mouseY) => {
  //   const flow = document.querySelector(".react-flow");
  //   const flowRect = flow.getBoundingClientRect();
  //   const flowX = mouseX - flowRect.left;
  //   const flowY = mouseY - flowRect.top;
  //   return { flowX: flowX, flowY: flowY };
  // };

  return (
    <Box height={"100%"} width={"100%"} background={"white"}>
      <AddCategory addCategoryNode={addCategoryNode} />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onClick={(event) => {
          // const mouseX = event.clientX;
          // const mouseY = event.clientY;
          // const { flowX, flowY } = screenToFlowPosition(mouseX, mouseY);
          // console.log("Flow coordinates:", flowX, flowY);
          // console.log("Mouse coordinates:", mouseX, mouseY);
          // addNode(flowX, flowY);
        }}
        className="intersection-flow"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default NewsLab;
