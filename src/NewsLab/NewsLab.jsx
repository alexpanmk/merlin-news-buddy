import ReactFlow, { Controls, Background } from "reactflow";
import { Box } from "grommet";
import "reactflow/dist/style.css";

const NewsLab = () => {
  return (
    <Box height={"100%"} width={"100%"} background={"white"}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};

export default NewsLab;
