import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <>
        <nav>
          <Link to="/" className="link-logo" aria-label="Retour à l'accueil">
            <img src={Logo} alt="CityCanvas logo" className="logo" />
          </Link>
          <Navbar />
        </nav>
        <main>
          <Outlet />
          <ToastContainer theme="light" />
          <ThemeToggle />
        </main>
        <div className="narrow-nav">
          <Navbar />
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
