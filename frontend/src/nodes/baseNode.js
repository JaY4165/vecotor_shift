// baseNode.js
import React from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { top: 10 };

const createBaseNode = (NodeContent, defaultData = {}) => {
  return ({ id, data }) => {
    const nodeData = { ...defaultData, ...data };

    return (
      <div
        style={{
          width: 300,
          borderRadius: 20,
          border: "3px solid #430b8a",
          background: "#2f1367",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        }}
      >
        {nodeData.inputs &&
          nodeData.inputs.map((input, index) => (
            <Handle
              key={`input-${index}`}
              type="target"
              position={Position.Left}
              id={`${id}-${input.id}`}
              style={{
                ...handleStyle,
                top: `${(index + 1) * 20}%`,
                backgroundColor: "#c38cff",
              }}
            />
          ))}
        <NodeContent id={id} data={nodeData} />
        {nodeData.outputs &&
          nodeData.outputs.map((output, index) => (
            <Handle
              key={`output-${index}`}
              type="source"
              position={Position.Right}
              id={`${id}-${output.id}`}
              style={{
                ...handleStyle,
                top: `${(index + 1) * 20}%`,
                backgroundColor: "#c38cff",
              }}
            />
          ))}
      </div>
    );
  };
};

export default createBaseNode;
