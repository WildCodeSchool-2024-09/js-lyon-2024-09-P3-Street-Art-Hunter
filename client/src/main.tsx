import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./pages/Home/Home";
import App from "./App";
import { GeocodingProvider } from "./contexts/GeocodingContext";
import { LoginProvider } from "./contexts/LoginContext";
import AuthPage from "./pages/AuthPage/AuthPage";
import Home from "./pages/Home/Home";
import NewArtwork from "./pages/NewArtwork/NewArtwork";
import StreetArtMap from "./pages/StreetArtMap/StreetArtMap";

/* ************************************************************************* */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/StreetArtMap",
    element: <App />,
    children: [
      {
        path: "/StreetArtMap",
        element: <StreetArtMap />,
      },
      {
        path: "/StreetArtMap/authentication",
        element: <AuthPage />,
      },
      {
        path: "/StreetArtMap/NewArtwork",
        element: <NewArtwork />,
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
  <LoginProvider>
    <GeocodingProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </GeocodingProvider>
  </LoginProvider>,
);
