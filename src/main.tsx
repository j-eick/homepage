// import App from "./App.tsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./pages/start/start";
import Overview from "./pages/Overview.tsx";
import Layout from "./components/ui/layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  { path: "/overview", element: <Overview /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
