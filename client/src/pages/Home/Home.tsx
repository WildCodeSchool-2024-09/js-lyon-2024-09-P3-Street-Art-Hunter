import Logo from "../../assets/images/cc_logo_spotless.png";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../../App.css";
import "../Home/Home.css";
import Carousel from "../../components/Carousel/Carousel";

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
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default Home;
