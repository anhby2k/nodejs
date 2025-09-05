import React from "react";
import { createRoot } from "react-dom/client";
import MyFunc from "./app.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<MyFunc />);
