import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./pages/Home/Home";
import App from "./App";
import Home from "./pages/Home/Home";
import PageAccueil from "./pages/PageAccueil/HomePage";

/* ************************************************************************* */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accueil",
    element: <App />,
    children: [
      {
        path: "/accueil",
        element: <PageAccueil />,
      },
    ],
  },
]);

/* ************************************************************************* */
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
