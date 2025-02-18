import axios, { type AxiosResponse } from "axios";
import type { RequestHandler } from "express";

const client = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
});

type geolocData = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: number;
  lon: number;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string];
};

const geocode: RequestHandler = async (req, res, next) => {
  const submitedAddress = req.query.submitedAddress;

  //utilisation d'Axios pour faire une requête vers une API exterieur
  const queryString: string = `q=${submitedAddress}&format=json`;
  try {
    const searchResponse: AxiosResponse = await client.get(
      `/search?${queryString}`,
    );

    // important : il faut bien garder le /search? à ce niveau d'AxiosResponse et non dans la const client ou la queryString.
    const geocodedData: geolocData[] = searchResponse.data;

    // transmition via Express des infos recueilli par Axios.

    if (
      geocodedData !== undefined &&
      geocodedData !== null &&
      geocodedData.length > 0
    ) {
      res.json(geocodedData);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

export default { geocode };
