import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface artwork {
  id: number;
  name: string;
  address: string;
  image: string;
  picture_date: string;
  type_of_art: string;
  latitude: number;
  longitude: number;
  picture_credit: string;
  id_artist: number;
}

class artworkRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "artwork" table
    const [rows] = await databaseClient.query<Rows>("select * from artwork");

    // Return the array of items
    return rows as artwork[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT aw.name, aw.address, aw.image, aw.picture_date, aw.type_of_art, aw.latitude, aw.longitude, aw.picture_credit, at.name as artist FROM artwork AS aw JOIN artist AS at ON at.id=aw.id_artist WHERE aw.id=?",
      [id],
    );
    return rows[0] as artwork;
  }

  async create(artwork: Omit<artwork, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into artwork (name, address, image, picture_date, type_of_art, latitude, longitude, picture_credit, id_artist) values (?,?,?,?,?,?,?,?,?)",
      [
        artwork.name,
        artwork.address,
        artwork.image,
        artwork.picture_date,
        artwork.type_of_art,
        artwork.latitude,
        artwork.longitude,
        artwork.picture_credit,
        artwork.id_artist,
      ],
    );

    return result.insertId;
  }
}

export default new artworkRepository();
