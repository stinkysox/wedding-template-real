import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Correct import
import "./index.css";
import App from "./App";
import ImageProvider from "./Context/ImagesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ImageProvider>
        <App />
      </ImageProvider>
    </BrowserRouter>
  </StrictMode>
);
