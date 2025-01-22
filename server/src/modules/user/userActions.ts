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

const validate: RequestHandler = async (req, res, next) => {
  try {
    const userPseudo = String(req.body.pseudo);
    const user = await userRepository.verify(userPseudo);

    if (user.length === 0) {
      res.sendStatus(422);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const currentDate = new Date().toISOString().split("T")[0];
  console.info(currentDate);
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      pseudo: req.body.pseudo,
      inscription_date: currentDate,
    };

    const insertId = await userRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { read, validate, add };
