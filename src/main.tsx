// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "@ui/Toast/hooks/useToast.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
