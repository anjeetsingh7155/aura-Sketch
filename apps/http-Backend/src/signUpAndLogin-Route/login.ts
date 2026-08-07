import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const userID = 1;
  const userName = "Anjeet";

  const token = jwt.sign(
    {
      userID: userID,
      userName: userName,
    },
    "ahdajhdiugdieuhdhdisdhdsiuhdshdishdishdisuhdis",
  );

  console.log(token);
};
