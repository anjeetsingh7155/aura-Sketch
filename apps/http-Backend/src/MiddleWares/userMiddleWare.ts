import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";

//This is to resolve the error of JWT userID and req.userID
interface MyjwtPayload extends JwtPayload {
  userID?: string;
}

interface MyRequest extends Request {
  userID?: string;
}

//this is the middleware
export const userMiddleWare = (
  req: MyRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["authorization"];

  if (!User_JWT_pass) {
    return res.status(401).json({
      message: "JWTPAss is invalid or undefined",
    });
  } else if (!token) {
    return res.status(401).json({
      message: "Token is expired or not there",
    });
  }

  try {
    const decodeData = jwt.verify(token, User_JWT_pass) as MyjwtPayload;
    req.userID = decodeData.userID;
    next();
  } catch (e: any) {
    res.status(401).json({
      message: e,
    });
  }
};
