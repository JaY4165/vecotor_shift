import React, { useState, useEffect, useCallback, useRef } from "react";
import { Handle, Position } from "reactflow";
import createBaseNode from "./baseNode";

const TextNodeContent = ({ id, data }) => {
  const [text, setText] = useState(data.text || "");
  const [variables, setVariables] = useState([]);
  const [nodeHeight, setNodeHeight] = useState(100);
  const textareaRef = useRef(null);

  const parseVariables = useCallback((inputText) => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...inputText.matchAll(regex)];
    return [...new Set(matches.map((match) => match[1].trim()))];
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      setNodeHeight(Math.max(80, scrollHeight + 60));
    }
  };

  const handleMouseOut = () => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    const newVariables = parseVariables(text);
    setVariables(newVariables);
    adjustHeight();
  }, [text, parseVariables]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      style={{
        height: nodeHeight,
        paddingBottom: "50px",
        transition: "height 0.3s",
      }}
    >
      <div className="card-header">Text</div>
      <div>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          onMouseOut={handleMouseOut}
          className="hide-scroll-bar"
          style={{
            width: "95%",
            border: "none",
            height: `${nodeHeight - 60}px`,
            resize: "none",
            borderRadius: "4px",
            outline: "none",
            color: "#a9a9a9",
            padding: "4px",
            marginBottom: "20px",
            backgroundColor: "#2f1367",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
          }}
          placeholder="Enter text here. Use {{variableName}} for input variables."
        />
      </div>

      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) / (variables.length + 1)) * 100}%`,
            backgroundColor: "#c38cff",
          }}
        />
      ))}
      {/* <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{  }}
      /> */}
    </div>
  );
};

const TextNodeWrapper = createBaseNode(TextNodeContent, {
  outputs: [{ id: "output" }],
});

export const TextNode = ({ id, data }) => {
  return (
    <div
      style={{
        width: "300px",
        minHeight: 80,
        borderRadius: "5px",
      }}
    >
      <TextNodeWrapper id={id} data={data} />
    </div>
  );
};

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
