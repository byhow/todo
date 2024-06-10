import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("root");
if (root === null) throw new Error("I've got no root");
// But my home was never on the ground.

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
