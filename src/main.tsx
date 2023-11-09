import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// var tokenName = document.getAttribute('data-token-name') || 'DefaultTokenName';
const widgetDivs = document.querySelector("#root");
const tokenName = widgetDivs?.getAttribute("token-name");
// console.log(widgetDivs?.getAttribute("symbol"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App tokenName={tokenName} />
  </React.StrictMode>
);
