import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="link-logo">
          <img src={Logo} alt="logoCC" className="logo" />
        </Link>
        <Navbar />
      </nav>
      <main>
        <LoginProvider>
          <Outlet />
        </LoginProvider>
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
