import SearchBar from "../components/SearchBar/SearchBar";
import Logo from "../assets/images/cc_log_jet.png";

function Home() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="logoCC" className="logo" />
      </nav>
      <SearchBar />
    </div>
  );
}

export default Home;
