import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface artist {
  id: number;
  name: string;
}

class artistRepository {
  async create(name: string) {
    const [result] = await databaseClient.query<Result>(
      "insert into artist (name) values (?)",
      [name],
    );

    return result.insertId;
  }
}

export default new artistRepository();
