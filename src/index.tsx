import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ListingPage } from "./pages/ListingPage";
import { MediaPage } from "./pages/MediaPage";
import { UploadPage } from "./pages/UploadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListingPage />,
  },
  {
    path: "/:mediaId",
    element: <MediaPage />,
  },
  {
    path: "/upload",
    element: <UploadPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
