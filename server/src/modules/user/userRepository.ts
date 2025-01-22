import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface user {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  inscription_date: string;
}

class UserRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id=?",
      [id],
    );
    return rows[0] as user;
  }

  async create(user: Omit<user, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (email, password, pseudo, inscription_date) values (?, ?, ?, ?)",
      [user.email, user.password, user.pseudo, user.inscription_date],
    );

    return result.insertId;
  }

  async verify(pseudo: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select pseudo from user where pseudo=?",
      [pseudo],
    );
    return rows as user[];
  }
}
export default new UserRepository();
