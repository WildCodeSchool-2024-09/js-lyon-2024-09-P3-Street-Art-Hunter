import "./App.css";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
        <Navbar />
      </nav>
      <main>
        <img src={Logo} alt="logoCC" className="logo" />
        <h1>Hello World</h1>
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
