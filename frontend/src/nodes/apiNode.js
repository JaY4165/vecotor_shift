import React, { useState } from "react";
import createBaseNode from "./baseNode";
import createInputField from "../components/createInputField";
import createSelectField from "../components/createSelectField";
const ApiNodeContent = ({ data }) => {
  const [url, setUrl] = useState(data.url || "");
  const [method, setMethod] = useState(data.method || "GET");

  return (
    <>
      <div className="card-header">API Request</div>
      {createInputField("URL", url, (e) => setUrl(e.target.value))}
      {createSelectField("Method", method, (e) => setMethod(e.target.value), [
        "GET",
        "POST",
        "PUT",
        "DELETE",
      ])}
    </>
  );
};

export const ApiNode = createBaseNode(ApiNodeContent, {
  inputs: [{ id: "params" }, { id: "body" }],
  outputs: [{ id: "response" }],
});
