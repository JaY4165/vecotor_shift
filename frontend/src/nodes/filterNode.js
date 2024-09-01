import React, { useState } from "react";
import createBaseNode from "./baseNode";
import createInputField from "../components/createInputField";

const FilterNodeContent = ({ data }) => {
  const [condition, setCondition] = useState(data.condition || "");

  return (
    <>
      <div className="card-header">Filter</div>
      {createInputField("Condition", condition, (e) =>
        setCondition(e.target.value)
      )}
    </>
  );
};

export const FilterNode = createBaseNode(FilterNodeContent, {
  inputs: [{ id: "input" }],
  outputs: [{ id: "filtered" }],
});
