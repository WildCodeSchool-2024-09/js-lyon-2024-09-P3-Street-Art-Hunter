import Logo from "../assets/images/cc_logo_spotless.png";

import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import "../App.css";

function Home() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
      </nav>
      <section className="home-sct">
        <SearchBar />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
