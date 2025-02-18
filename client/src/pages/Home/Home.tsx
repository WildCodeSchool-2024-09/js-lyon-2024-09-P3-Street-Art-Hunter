import Logo from "../../assets/images/cc_logo_spotless_mustard.png";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.css";
import "../Home/Home.css";
import Carousel from "../../components/Carousel/Carousel";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

function Home() {
  return (
    <article>
      <section className="logo-sct">
        <img
          src={Logo}
          alt="Logo Citycanvas - retour à la page d'accueil"
          className="big_logo"
        />
        <img
          src={Logo}
          alt="Logo Citycanvas - retour à la page d'accueil"
          className="center-logo"
        />
      </section>
      <section className="home-sct">
        <Carousel />
        <SearchBar />
      </section>
      <ThemeToggle />
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Home;
