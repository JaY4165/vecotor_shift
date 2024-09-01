import React, { useState } from "react";
import createBaseNode from "./baseNode";
import createInputField from "../components/createInputField";
import createSelectField from "../components/createSelectField";

const DataTransformNodeContent = ({ data }) => {
  const [transformation, setTransformation] = useState(
    data.transformation || "json_to_csv"
  );
  const [options, setOptions] = useState(data.options || "");

  return (
    <>
      <div className="card-header">Data Transform</div>
      {createSelectField(
        "Transformation",
        transformation,
        (e) => setTransformation(e.target.value),
        ["json_to_csv", "csv_to_json", "xml_to_json"]
      )}
      {createInputField("Options", options, (e) => setOptions(e.target.value))}
    </>
  );
};

export const DataTransformNode = createBaseNode(DataTransformNodeContent, {
  inputs: [{ id: "input" }],
  outputs: [{ id: "output" }],
});
