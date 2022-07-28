import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import JobId from "./routes/jobs/$jobId";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jobs/:jobId" element={<JobId />} />
    </Routes>
  </BrowserRouter>
);
