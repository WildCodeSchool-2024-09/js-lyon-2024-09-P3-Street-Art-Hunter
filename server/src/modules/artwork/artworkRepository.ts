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
}

class articleRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "artwork" table
    const [rows] = await databaseClient.query<Rows>("select * from artwork");

    // Return the array of items
    return rows as artwork[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT aw.name, aw.adress, aw.image, aw.picture_date, aw.type_of_art, aw.latitude, aw.longitude, aw.picture_credit, at.name, cr.creation_date FROM artwork AS aw JOIN creation AS cr ON aw.id=cr.id_artwork JOIN artist AS at ON at.id=cr.id_artist WHERE aw.id=?",
      [id],
    );
    return rows[0] as artwork;
  }

  async create(artwork: Omit<artwork, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into artwork (name, address, image, picture_date, type_of_art, latitude, longitude, picture_credit) values (?,?,?,?,?,?,?,?)",
      [
        artwork.name,
        artwork.address,
        artwork.image,
        artwork.picture_credit,
        artwork.type_of_art,
        artwork.latitude,
        artwork.longitude,
        artwork.picture_credit,
      ],
    );
    return result.insertId;
  }

  // // The Rs of CRUD - Read operations

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new articleRepository();
