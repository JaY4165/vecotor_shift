import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReactFlowProvider } from "reactflow";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactFlowProvider>
      <App />
      <Toaster position="bottom-right" />
    </ReactFlowProvider>
  </React.StrictMode>
);
