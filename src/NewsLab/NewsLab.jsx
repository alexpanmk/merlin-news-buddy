// Note: NewsLab component
import React, { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  useReactFlow,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "./style.css";
import { Box } from "grommet";

const initialNodes = [
  {
    id: "1",
    connectable: false,
    data: {
      label: "Crypto Exchanges, Not Just FTX, Are All a Mess Right Now",
    },
    style: {
      minwidth: 300,
    },
    position: { x: 100, y: 25 },
  },
  {
    id: "2",
    connectable: false,
    type: "input",
    data: { label: "Bitcoin jumps as ETF hopes drive the token to $30,000" },
    position: { x: 100, y: 200 },
    style: {
      minwidth: 300,
    },
  },
];

const initialEdges = [];

const NewsLab = () => {
  const [nodes, setNodes] = useState(initialNodes);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  return (
    <Box height={"100%"} width={"100%"} background={"white"}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        className="intersection-flow"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default NewsLab;
