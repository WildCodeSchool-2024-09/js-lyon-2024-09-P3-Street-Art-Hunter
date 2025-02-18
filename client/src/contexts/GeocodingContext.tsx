import { createContext, useEffect, useState } from "react";
import { ToasterError } from "../services/ToasterFunctions";

const GeocodingContext = createContext<valueProps>({
  setSubmitedAddress: () => {},
  setSearchedLoc: () => {},
  getCoord: () => {},
});

interface valueProps {
  setSubmitedAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  submitedAddress?: string;
  searchedLoc?: [number, number];
  setSearchedLoc: React.Dispatch<
    React.SetStateAction<[number, number] | undefined>
  >;
  getCoord: () => void;
}

export const GeocodingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [submitedAddress, setSubmitedAddress] = useState<string | undefined>(
    undefined,
  );
  const [searchedLoc, setSearchedLoc] = useState<
    [number, number] | undefined
  >();

  useEffect(() => {
    //a pour but de stocker la geolocalisation dans la page de l'utilisateur web
    const storedArray = localStorage.getItem("last_coord");
    const storedCoords: number[] = storedArray
      ? JSON.parse(storedArray)
      : [0, 0];
    setSearchedLoc(storedCoords as [number, number]);
  }, []);

  const getCoord = () => {
    if (submitedAddress !== undefined) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/geolocalisation?submitedAddress=${submitedAddress}`,
      )
        .then((res) => {
          if (res.status === 404) {
            ToasterError(
              "Hmm… on dirait que cette adresse fait du cache-cache. Réessaie ! 🏠❌",
              "light",
            );
            //récupération de l'information stocker si il y en a une afin que l'utilisateur puisse retrouver son point d'origine sur la map
            const storedArray = localStorage.getItem("last_coord");
            if (storedArray) {
              const storedCoords: number[] = JSON.parse(storedArray);
              setSearchedLoc(storedCoords as [number, number]);
            }
          }
          return res.json();
        })
        .then((data) => {
          const lat = Number(data[0].lat);
          const lon = Number(data[0].lon);
          const geoloc: [number, number] = [lat, lon];
          setSearchedLoc(geoloc);
          localStorage.setItem("last_coord", JSON.stringify(geoloc));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <GeocodingContext.Provider
      value={{
        setSubmitedAddress,
        submitedAddress,
        searchedLoc,
        setSearchedLoc,
        getCoord,
      }}
    >
      {children}
    </GeocodingContext.Provider>
  );
};

export default GeocodingContext;
