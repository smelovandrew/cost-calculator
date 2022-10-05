import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";

const router: Readonly<ReturnType<typeof createBrowserRouter>> =
  createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" replace={true} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

export default () => <RouterProvider router={router} />;
