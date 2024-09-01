import React from "react";
import createBaseNode from "./baseNode";

const LLMNodeContent = () => (
  <>
    <div className="card-header">LLM</div>
    <div style={{ marginBottom: 10, padding: "10px 10px 20px 20px", color : "white" }}>
      This is a LLM.
    </div>
  </>
);

export const LLMNode = createBaseNode(LLMNodeContent, {
  inputs: [{ id: "system" }, { id: "prompt" }],
  outputs: [{ id: "response" }],
});

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }
