import type { Dispatch, SetStateAction } from "react";

interface LatLongProps {
  latLong: {
    latitude: number;
    longitude: number;
  };
}

export type GeocodingContextType = {
  latLong: LatLongProps;
  setLatLong: Dispatch<SetStateAction<LatLongProps>>;
  searchedAddress: string;
  setSearchedAddress: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  error: string | null;
};
