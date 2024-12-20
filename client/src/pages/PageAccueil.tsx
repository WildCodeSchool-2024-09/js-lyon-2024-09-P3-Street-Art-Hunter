import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import WorldMap from "../components/WorldMap";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";

function PageAccueil() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
        <Navbar />
      </nav>
      <main>
        <img src={Logo} alt="logoCC" className="narrow-logo" />
        <WorldMap />
      </main>
      <div className="narrow-nav">
        <Navbar />
      </div>
      <footer>
        <p>Créé avec </p>
        <h3>passion</h3>
        <p> par la Team City Canvas</p>
      </footer>
    </>
  );
}

export default PageAccueil;
