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
  console.info(queryString);
  try {
    const searchResponse: AxiosResponse = await client.get(
      `/search?${queryString}`,
    );
    // important : il faut bien garder le /search? à ce niveau d'AxiosResponse et non dans la const client ou la queryString.
    const geocodedData: geolocData[] = searchResponse.data;

    // transmition via Express des infos recueilli par Axios.
    res.json(geocodedData);
    console.info(geocodedData); //sécurité de visualisation 21/01/2025
  } catch (err) {
    next(err);
  }
};

export default { geocode };
