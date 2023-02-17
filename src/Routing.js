import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import ErrorPage from "./Pages/Error";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import Housing from "./Pages/Housing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout error={true}>
        <ErrorPage />
      </RootLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/housing/:id",
        element: <Housing />,
      },
    ],
  },
]);

export default router;
