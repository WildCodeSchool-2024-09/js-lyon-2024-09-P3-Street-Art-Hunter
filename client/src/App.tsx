import "./App.css";
import Logo from "./assets/images/cc_logo_spotless_mustard.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
        <Navbar />
      </nav>
      <main>
        <img src={Logo} alt="logoCC" className="narrow-logo" />
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
