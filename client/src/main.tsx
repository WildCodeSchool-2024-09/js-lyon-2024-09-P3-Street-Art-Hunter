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
import Profile from "./pages/Profile/Profile";
import StreetArtMap from "./pages/StreetArtMap/StreetArtMap";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StreetArt from "./pages/StreetArt/StreetArt";

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
      { path: "/StreetArtMap/:id", element: <StreetArt /> },
      {
        path: "/StreetArtMap/authentication",
        element: <AuthPage />,
      },
      {
        path: "/StreetArtMap/Profile",
        element: <Profile />,
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
        {/* <ToastContainer position="bottom-right" theme="light" /> */}
      </StrictMode>
    </GeocodingProvider>
  </LoginProvider>,
);
