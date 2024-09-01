// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="math" label="Math Operations" />
        <DraggableNode type="dataTransform" label="Data Transformation" />
        <DraggableNode type="imageProcessing" label="Image Processing" />
      </div>
    </div>
  );
};
