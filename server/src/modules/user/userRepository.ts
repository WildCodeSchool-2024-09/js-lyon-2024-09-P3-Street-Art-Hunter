import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

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
}
export default new UserRepository();
