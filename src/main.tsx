import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: "/start-break-app/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#4D869C",
          colorPrimaryHover: "#7AB2B2",
          fontSize: 16,
        },
        components: {
          Button: {
            fontSize: 16,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
