import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";
import { loginSchema } from "@repo/typesAndvalidations-common/typesandzodvalidation";

export const login = (req: Request, res: Response) => {
  
  console.log(User_JWT_pass);
  if (!User_JWT_pass && typeof User_JWT_pass !== "string") {
    return res.status(401).json({
      message: "JWTPAss is invalid or undefined",
    });
  }
  const safeParseObject = loginSchema.safeParse(req.body);

  if (!safeParseObject.success) {
    res.status(401).json({
      message: "Invalid UserName and Password",
    });
  }
  const userName = safeParseObject.data?.userName;
  const password = safeParseObject.data?.password;
  const user = {
    _id: "2",
  }; //database logic to find the user

  const token = jwt.sign(
    {
      userID: user._id,
    },
    User_JWT_pass,
  );

  res.status(200).json({
    token: token,
  });
};
