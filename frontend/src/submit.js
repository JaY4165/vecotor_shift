import { useState } from "react";
import toast from "react-hot-toast";
import { useEdges, useNodes } from "reactflow";

export const SubmitButton = () => {
  const [loading, setLoading] = useState(false);
  const nodes = useNodes();
  const edges = useEdges();

  // const pipeline = {
  //   nodes: nodes,
  //   edges: edges,
  // };

  const pipeline = {
    nodes: nodes.map((node) => ({ id: node.id })),
    edges: edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    })),
  };

  const handleSubmit = async () => {
    console.log(pipeline);
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipeline),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);

      toast(
        (t) => (
          <span>
            <h3>Pipeline Analysis :</h3>
            <p>Number of Nodes: {data.num_nodes}</p>
            <p>Number of Edges: {data.num_edges}</p>
            <p>Is DAG: {data.is_dag ? "Yes" : "No"}</p>
          </span>
        ),
        {
          position: "bottom-right",
          icon: "🧐",
          style: {
            borderRadius: "10px",
            background: "#55298f",
            color: "white",
          },
        }
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the pipeline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        type="submit"
        id="submit-btn"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};
