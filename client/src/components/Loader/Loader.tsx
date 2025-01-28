import "./Loader.css";
import DistSearch from "../DistSearch/DistSearch";

export default function Loader() {
  return (
    <section className="loading-page">
      <article className="loader">
        <h1>Loading ...</h1>
        <h2>city canvas is coming !</h2>
      </article>
      <DistSearch />
    </section>
  );
}
