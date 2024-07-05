// import App from "./App.tsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./pages/start/start";
import About from "./pages/about/About.tsx";
import Layout from "./components/ui/layout/Layout.tsx";
import Work from "./pages/work/Work.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
