import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userZodvalidation } from "@repo/typesAndvalidations-common/typesandzodvalidation";
import { prisma } from "@repo/prismadb/db";

export const signup = async (req: Request, res: Response) => {
  const resultObj = userZodvalidation.safeParse(req.body);

  if (!resultObj.success) {
    return res
      .status(400)
      .json({ error: resultObj.error.flatten().fieldErrors });
  }

  const { userName, Name, Email, password } = resultObj.data;

  const hashpass = await bcrypt.hash(password, 10);
try{

    const userRegister = await prisma.user.create({
    data: {
      userName: userName,
      password: hashpass,
      email: Email,
      name: Name,
      photo: "NOtFound",
    },
  });

  console.log(userRegister);

  res.status(200).json({
    message : "User Registered"
  })

}catch(e){
   res.status(401).json({
    message : "The user is already Exists",
    error : e

  })
}

};
