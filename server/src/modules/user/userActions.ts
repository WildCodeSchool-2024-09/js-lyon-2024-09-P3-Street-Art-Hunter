import type { RequestHandler } from "express";

import userRepository from "./userRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
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
    };

    const insertId = await userRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { read, add };
