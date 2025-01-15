// import { createContext, useContext, useEffect, useState } from "react";
// import type { GeocodingContextType } from "../types/GeocodingType";

// interface LatLongData {
//   place_id: number;
//   licence: string;
//   osm_type: string;
//   osm_id: number;
//   lat: number;
//   lon: number;
//   class: string;
//   type: string;
//   place_rank: number;
//   importance: number;
//   addresstype: string;
//   name: string;
//   display_name: string;
//   boundingbox: [string, string, string, string];
// }

// const GeocodingContext = createContext<GeocodingContextType | null>(null);

// export const useGeocoding = () => {
//   const context = useContext(GeocodingContext);
//   if (!context) {
//     throw new Error("useGames must be used within a GamesProvider");
//   }
//   return context;
// };

// const result = [
//   {
//     place_id: 89313882,
//     licence:
//       "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
//     osm_type: "node",
//     osm_id: 689142443,
//     lat: "48.8693321",
//     lon: "2.3311085",
//     class: "place",
//     type: "house",
//     place_rank: 30,
//     importance: 9.317235065227768e-5,
//     addresstype: "place",
//     name: "",
//     display_name:
//       "13, Rue de la Paix, Quartier Gaillon, Paris 2e Arrondissement, Paris, Île-de-France, France métropolitaine, 75002, France",
//     boundingbox: ["48.8692821", "48.8693821", "2.3310585", "2.3311585"],
//   },
// ];

// export const GeocodingProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [searchedAddress, setSearchedAddress] = useState<string>("");
//   const [latLong, setLatLong] = useState<GeocodingContextType>();
//   //   const [isLoading, setIsLoading] = useState<boolean>(true);
//   //   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // console.log(
//     //   `https://thingproxy.freeboard.io/fetch/https://nominatim.openstreetmap.org/search?q=${searchedAddress}&format=json`,
//     // );
//     // fetch(
//     //   `https://thingproxy.freeboard.io/fetch/https://nominatim.openstreetmap.org/search?q=${searchedAddress}&format=json`,
//     // )
//     //   .then((response) => response.json())
//     //   .then((data : LatLongData) => {
//     //     if (Array.isArray(data)) {
//     //       setLatLong(data);
//     //     }
//     //     setIsLoading(false);
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error fetching latLong data:", error);
//     //     setError("Failed to load latLong.");
//     //     setIsLoading(false);
//     //   });
//     const latitude = Number.parseInt(result[O].lat);
//     const longitude = Number.parseInt(result[O].lon);
//     const geoloc = { latitude, longitude };
//     setLatLong(geoloc);
//   }, [searchedAddress]);

//   return (
//     <GeocodingContext.Provider
//       value={{
//         latLong,
//         setLatLong,
//         searchedAddress,
//         setSearchedAddress,
//         // isLoading,
//         // error,
//       }}
//     >
//       {children}
//     </GeocodingContext.Provider>
//   );
// };

// export default GeocodingContext;
