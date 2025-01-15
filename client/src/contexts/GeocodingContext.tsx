import { createContext, useEffect, useState } from "react";

const GeocodingContext = createContext<valueProps>({
  setSubmitedAddress: () => {},
  setSearchedLoc: () => {},
});

interface valueProps {
  setSubmitedAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchedLoc?: [number, number];
  setSearchedLoc: React.Dispatch<
    React.SetStateAction<[number, number] | undefined>
  >;
}

export const GeocodingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [submitedAddress, setSubmitedAddress] = useState<string>();
  const [searchedLoc, setSearchedLoc] = useState<[number, number]>();

  useEffect(() => {
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
  }, [submitedAddress]);

  return (
    <GeocodingContext.Provider
      value={{ setSubmitedAddress, searchedLoc, setSearchedLoc }}
    >
      {children}
    </GeocodingContext.Provider>
  );
};

export default GeocodingContext;
