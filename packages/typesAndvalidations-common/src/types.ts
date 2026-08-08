import type {JwtPayload} from 'jsonwebtoken'
import z from 'zod'
import type {Request} from 'express'


//this is for the signin
 export const userZodvalidation = z.object({
    userName: z.string().min(5).max(10),
    Name: z.string().min(5).max(20),
    Email: z.email(),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/),
  });

//this is for the login
 export const loginSchema = z.object({
    userName: z.string().min(5).max(10),
     password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/),
 })


 export const createRoom = z.object({
    name : z.string().min(3).max(20)
 })

 
  //This is to resolve the error of JWT userID and req.userID
export interface MyjwtPayload extends JwtPayload {
  userID?: string;
}

export interface MyRequest extends Request {
  userID? : string;
}