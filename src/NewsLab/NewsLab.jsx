import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const NewsLab = () => {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default NewsLab;
