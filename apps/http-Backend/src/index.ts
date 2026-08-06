import express from "express";
import cors from "cors";
import { signup } from "./signUpAndLogin-Route/signup";
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/signup", signup);

app.listen(port, () => {
  console.log(`Http server is running on the http://localhost:${port}`);
});
