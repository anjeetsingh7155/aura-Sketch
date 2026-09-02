import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";
import { loginSchema } from "@repo/typesAndvalidations-common/typesandzodvalidation";
import { prisma } from "@repo/prismadb";

export const login = async (req: Request, res: Response) => {
  try {
    
      console.log(User_JWT_pass);
  if (!User_JWT_pass && typeof User_JWT_pass !== "string") {
    return res.status(401).json({
      message: "JWTPAss is invalid or undefined",
    });
  }
  const safeParseObject = loginSchema.safeParse(req.body);

  if (!safeParseObject.success) {
    return res.status(401).json({
      message: "Invalid UserName and Password",
    });
  }
  const Email = safeParseObject.data?.Email;
  const password = safeParseObject.data?.password;
  const userLogin = await prisma.user.findUnique({
  where: {
    email: Email,
    password : password
  },
});
console.log(userLogin)
  

if (userLogin == null){
  return res.status(401).json({
    message : "invalid Username and Password"
  })
}
  const token = jwt.sign(
    {
      userID: userLogin.id,
    },
    User_JWT_pass,
  );

  return res.status(200).json({
    token: token,
  });

  } catch (error) {
    return res.status(500).json({
      message : "Internal Server Error"
    })
  }
  

};
