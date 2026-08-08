import dotenv from "dotenv";

dotenv.config(/*{
  path: "../../.env",
}*/);

export const User_JWT_pass = process.env.UserJWTPAss;

console.log(User_JWT_pass);
