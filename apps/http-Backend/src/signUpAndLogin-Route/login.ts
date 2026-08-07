import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";
export const login = (req: Request, res: Response) => {
  if (!User_JWT_pass) {
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
    User_JWT_pass,
  );

  console.log(token);
};
