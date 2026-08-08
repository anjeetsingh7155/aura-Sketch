import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userZodvalidation } from "@repo/typesAndvalidations-common/typesandzodvalidation";

export const signup = async (req: Request, res: Response) => {
  const resultObj = userZodvalidation.safeParse(req.body);

  if (!resultObj.success) {
    return res
      .status(400)
      .json({ error: resultObj.error.flatten().fieldErrors });
  }

  const { userName, Name, Email, password } = resultObj.data;

  const hashpass = await bcrypt.hash(password, 10);

  console.log(userName, Name, Email, hashpass);

  //write the database logic here and the whole further logic
};
