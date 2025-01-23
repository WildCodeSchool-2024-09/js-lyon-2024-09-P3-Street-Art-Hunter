import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

type user = {
  id: number;
  email: string;
};

function App() {
  const [user, setUser] = useState(null as user | null);

  return (
    <>
      <nav>
        <Link to="/" className="link-logo">
          <img src={Logo} alt="logoCC" className="logo" />
        </Link>
        <Navbar />
      </nav>
      <main>
        <Outlet context={{ user, setUser }} />
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
