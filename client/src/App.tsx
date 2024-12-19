import "./App.css";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import WorldMap from "./components/WorldMap";

function App() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
        <Navbar />
      </nav>
      <main>
        <SearchBar />
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

export default App;
