import Logo from "../../assets/images/cc_logo_spotless.png";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.css";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <section className="logo-sct">
        <img src={Logo} alt="logoCC" className="logo" />
        <img src={Logo} alt="logoCC" className="center-logo" />
      </section>
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
