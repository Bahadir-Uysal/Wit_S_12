import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageThemeProvider } from "./contexts/LanguageThemeContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageThemeProvider>
      <App />
      <ToastContainer />
    </LanguageThemeProvider>
  </StrictMode>
);