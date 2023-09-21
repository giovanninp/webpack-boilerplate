import { createElement } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

export default () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(createElement(App));
};
