import React, { useState } from "react";
import createBaseNode from "./baseNode";
import createInputField from "../components/createInputField";
import createSelectField from "../components/createSelectField";

const MathNodeContent = ({ data }) => {
  const [operation, setOperation] = useState(data.operation || "add");
  const [constant, setConstant] = useState(data.constant || "0");

  return (
    <>
      <div className="card-header">Math Operation</div>
      {createSelectField(
        "Operation",
        operation,
        (e) => setOperation(e.target.value),
        ["add", "subtract", "multiply", "divide"]
      )}
      {createInputField(
        "Constant",
        constant,
        (e) => setConstant(e.target.value),
        "number"
      )}
    </>
  );
};

export const MathNode = createBaseNode(MathNodeContent, {
  inputs: [{ id: "input" }],
  outputs: [{ id: "result" }],
});
