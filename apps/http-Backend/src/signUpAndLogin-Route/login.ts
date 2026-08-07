import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const login = (req: Request, res: Response) => {
  const jwtPass = process.env.UserJWTPAss;

  if (!jwtPass) {
    res.status(500).json({ error: "JWT secret not set" });
    return;
  }

  const userName = "AnjeetSingh";
  const password = "Anjeet";
  const user = {
    _id: "2",
  }; //database logic to find the user

  const token = jwt.sign(
    {
      userID: user._id,
    },
    jwtPass,
  );

  console.log(token);
};
