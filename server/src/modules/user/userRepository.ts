import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface user {
  id: number;
  pseudo: string;
  email: string;
  hashed_password: string;
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
      "insert into user (email, hashed_password, pseudo) values (?, ?, ?)",
      [user.email, user.hashed_password, user.pseudo],
    );

    return result.insertId;
  }

  async verify(pseudo: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select pseudo from user where pseudo = ?",
      [pseudo],
    );

    return rows as user[];
  }

  async readByEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0] as user;
  }
}

export default new UserRepository();
