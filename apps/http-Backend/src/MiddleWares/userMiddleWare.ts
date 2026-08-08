import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";
import {
  MyRequest,
  MyjwtPayload,
} from "@repo/typesAndvalidations-common/typesandzodvalidation";

//this is the middleware
export const userMiddleWare = (
  req: MyRequest,
  res: Response,
  next: NextFunction,
) => {
  const jwtPass = User_JWT_pass;
  const token = req.headers["authorization"];

  if (!jwtPass && typeof jwtPass !== "string") {
    return res.status(401).json({
      message: "JWTPAss is invalid or undefined",
    });
  } else if (!token) {
    return res.status(401).json({
      message: "Token is expired or not there",
    });
  }

  try {
    const decodeData = jwt.verify(token, jwtPass) as MyjwtPayload;
    req.userID = decodeData.userID;
    next();
  } catch (e: any) {
    res.status(401).json({
      message: e,
    });
  }
};
