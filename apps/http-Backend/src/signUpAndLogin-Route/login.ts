import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";





export const login = (req: Request, res: Response) => {
  const jwtPass = User_JWT_pass 
  if (!jwtPass && typeof jwtPass !=="string") {
    return res.status(401).json({
      message: "JWTPAss is invalid or undefined",
    })};

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

  res.status(200).json(token);
};
