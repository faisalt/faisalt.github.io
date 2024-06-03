import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "./routes/projects.tsx";
import Root from "./routes/root.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Media from "./routes/media.tsx";
import Publications from "./routes/publications.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/publications",
    element: <Publications />,
  },
  {
    path: "/media",
    element: <Media />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
