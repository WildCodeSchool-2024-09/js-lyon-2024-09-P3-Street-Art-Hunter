import "./Carousel.css";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import GeocodingContext from "../../contexts/GeocodingContext";

interface artwork {
  id: number;
  name: string;
  image: string;
  coordinates: [number, number];
}

function Carousel() {
  const { setSearchedLoc } = useContext(GeocodingContext);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [artwork, setArtworks] = useState<artwork[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artworks`)
      .then((response) => response.json())
      .then((data: artwork[]) => {
        setArtworks(data);
      });
  }, []);

  const handleClick = (coordinates: [number, number] | undefined) => {
    setSearchedLoc(coordinates);
  };

  return (
    <Slider {...settings}>
      {artwork.map((art) => (
        <Link
          to={`/StreetArtMap/${art.id}`}
          key={art.id}
          className="carousel-card"
          onClick={() => handleClick(art.coordinates)}
        >
          <p>{art.name}</p>
          <img src={art.image} alt={art.name} />
        </Link>
      ))}
    </Slider>
  );
}

export default Carousel;
