import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

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
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT aw.name, aw.adress, aw.image, aw.picture_date, aw.type_of_art, aw.latitude, aw.longitude, aw.picture_credit, at.name, cr.creation_date FROM artwork AS aw JOIN creation AS cr ON aw.id=cr.id_artwork JOIN artist AS at ON at.id=cr.id_artist WHERE aw.id=?",
      [id],
    );
    return rows[0] as artwork;
  }

  // The C of CRUD - Create operation

  // async create(item: Omit<artwork, "id">) {
  //   // Execute the SQL INSERT query to add a new item to the "item" table
  //   const [result] = await databaseClient.query<Result>(
  //     "insert into item (title, user_id) values (?, ?)",
  //     [item.title, item.user_id],
  //   );

  // Return the ID of the newly inserted item
  //   return result.insertId;
  // }

  // // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from artwork");

    // Return the array of items
    return rows as artwork[];
  }

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
