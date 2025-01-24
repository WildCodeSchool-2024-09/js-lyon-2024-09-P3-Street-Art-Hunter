import { createContext, useState } from "react";

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
  const [searchedLoc, setSearchedLoc] = useState<[number, number]>();

  const getCoord = () => {
    if (submitedAddress !== undefined) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/geolocalisation?submitedAddress=${submitedAddress}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const lat = Number(data[0].lat);
          const lon = Number(data[0].lon);
          const geoloc: [number, number] = [lat, lon];
          setSearchedLoc(geoloc);
        });
    }
  };

  console.info(searchedLoc);

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
