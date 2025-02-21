import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface UserProps {
  id: number;
  pseudo: string;
  email: string;
  hashed_password: string;
  inscription_date: string;
  profile_picture: string;
  // token: string; laissé pour semaine pro uniquement
}

interface NewUserProps {
  id: number;
  pseudo: string;
  email: string;
}

class UserRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id=?",
      [id],
    );
    return rows[0] as UserProps;
  }

  async create(user: Omit<UserProps, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (email, hashed_password, pseudo, inscription_date, profile_picture) values (?, ?, ?, ?, ?)",
      [
        user.email,
        user.hashed_password,
        user.pseudo,
        user.inscription_date,
        user.profile_picture,
      ],
    );

    return result.insertId;
  }

  async update(user: NewUserProps) {
    const [result] = await databaseClient.query<Result>(
      "update user set pseudo = ?, email = ? where id = ?",
      [user.pseudo, user.email, user.id],
    );
    return result.affectedRows;
  }

  async verify(pseudo: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select pseudo from user where pseudo = ?",
      [pseudo],
    );

    return rows as UserProps[];
  }

  async readByEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0] as UserProps;
  }
}

export default new UserRepository();
