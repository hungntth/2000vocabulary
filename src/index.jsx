import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

// Note: Remove the following line if you want to disable the API mocks.
import "./mocks";

import "jsvectormap";
import "./vendor/us_aea_en.js";
import "./vendor/world.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
