import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  const safeObject = z.object({
    userName: z.string().min(5).max(10),
    Name: z.string().min(5).max(20),
    Email: z.email(),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/),
  });

  const resultObj = safeObject.safeParse(req.body);

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
