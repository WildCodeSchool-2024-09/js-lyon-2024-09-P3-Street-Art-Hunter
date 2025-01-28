import type { RequestHandler } from "express";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

type MyPayload = JwtPayload & { id: string };

// Import access to data
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    // Récupération de l'utilisateur par email
    const user = await userRepository.readByEmailWithPassword(req.body.email);

    if (!user) {
      // Utilisateur introuvable
      res.sendStatus(422); // Unprocessable Entity
      return;
    }

    // Vérification du mot de passe avec argon2
    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (verified) {
      // Suppression du mot de passe haché avant de renvoyer la réponse
      const { hashed_password, ...userWithoutHashedPassword } = user;
      //ajout d'un token pour l'identification de l'utilisateur
      const myPayload: MyPayload = {
        id: user.id.toString(),
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "1h",
        },
      );

      res.json({
        token,
        user: userWithoutHashedPassword,
      });
    } else {
      // Mot de passe incorrect
      res.sendStatus(422); // Unprocessable Entity
    }
  } catch (err) {
    next(err);
  }
};

// Options de hachage (voir documentation : https://github.com/ranisalt/node-argon2/wiki/Options)
// Recommandations **minimales** de l'OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashed_password = hashedPassword;

    // Oubli du mot de passe non haché de la requête : il restera un secret même pour notre code dans les autres actions
    req.body.password = undefined;

    next();
  } catch (err) {
    next(err);
  }
};

export default { login, hashPassword };
