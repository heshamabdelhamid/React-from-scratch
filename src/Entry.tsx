
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { App } from "./App.js";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
