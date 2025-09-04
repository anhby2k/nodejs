// 1.Hiểu Component (function component).
// 2.Học JSX (cú pháp viết HTML trong JS).
// 3.Học Props (truyền dữ liệu vào component).
// 4.Học State & useState (quản lý dữ liệu động).
// 5.Sự kiện (event) trong React.
// 6.Render list, conditional render.
// 7.useEffect (xử lý side-effect).

import { createRoot } from "react-dom/client";
import App from "./app.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
