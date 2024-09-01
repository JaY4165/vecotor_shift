import React, { useState } from "react";
import createBaseNode from "./baseNode";
import createSelectField from "../components/createSelectField";

const ImageProcessingNodeContent = ({ data }) => {
  const [effect, setEffect] = useState(data.effect || "grayscale");

  return (
    <>
      <div className="card-header">Image Processing</div>
      {createSelectField("Effect", effect, (e) => setEffect(e.target.value), [
        "grayscale",
        "blur",
        "sharpen",
        "invert",
      ])}
    </>
  );
};

export const ImageProcessingNode = createBaseNode(ImageProcessingNodeContent, {
  inputs: [{ id: "image" }],
  outputs: [{ id: "processedImage" }],
});
