import type { RequestHandler } from "express";

import userRepository from "./userRepository";

interface UserProps {
  id: number | null;
  pseudo: string;
  email: string;
  hashed_password: string;
  inscription_date: string;
  profile_picture: string;
}

interface UpdateUserProps extends Omit<UserProps, "id"> {
  id: number;
}

const read: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.body.auth.id);
    const user = await userRepository.read(userId);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const currentDate = new Date().toISOString().split("T")[0];

  try {
    const newUser = {
      email: req.body.email,
      pseudo: req.body.pseudo,
      hashed_password: req.body.hashed_password,
      inscription_date: currentDate,
      profile_picture: req.body.image,
    };

    const insertId = await userRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      id: Number(req.body.auth.id),
      email: String(req.body.email),
      pseudo: String(req.body.pseudo),
    };

    const userUpdated = await userRepository.update(user);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { read, add, edit };
