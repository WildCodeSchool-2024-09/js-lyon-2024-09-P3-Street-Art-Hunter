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
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import StreetArt from "./pages/StreetArt/StreetArt";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

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
      {
        path: "/StreetArtMap/TermsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/StreetArtMap/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      { path: "/StreetArtMap/Error", element: <ErrorPage /> },
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
    <ThemeProvider>
      <LoginProvider>
        <GeocodingProvider>
          <RouterProvider router={router} />
        </GeocodingProvider>
      </LoginProvider>
    </ThemeProvider>
  </StrictMode>,
);
