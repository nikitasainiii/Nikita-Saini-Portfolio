import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const el = document.getElementById("root");
if (!el) {
  throw new Error('Root element "#root" not found');
}

const router = getRouter();

createRoot(el).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
