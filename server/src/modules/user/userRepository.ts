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

  // Verifier l'existence de l'email dans la BDD
  async readByEmail(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0] as user;
  }

  // Vérifier l'éxistence du pseudo dans la BDD
  async verify(pseudo: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select pseudo from user where pseudo = ?",
      [pseudo],
    );
    return rows as user[];
  }
}
export default new UserRepository();
