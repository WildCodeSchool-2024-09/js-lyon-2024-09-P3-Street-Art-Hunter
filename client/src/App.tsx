import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
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
      </main>
      <div className="narrow-nav">
        <Navbar />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
