import path from "node:path";
import dotenv from "dotenv";

dotenv.config();
if (!process.env.UserJWTPAss) {
  dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
  dotenv.config({ path: path.resolve(__dirname, "../.env") });
}

const User_JWT_pass =
  process.env.UserJWTPAss ||
  "jcbsgcsuyygtc8ds66ttstxusagcjsagcjhsgcjhgcjhhsgcsa";

export { User_JWT_pass };
