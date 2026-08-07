import express from "express";
import cors from "cors";
import { signup } from "./signUpAndLogin-Route/signup";
import { login } from "./signUpAndLogin-Route/login";
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

//signup and Login Routes
app.post("/v1/signup", signup);
app.post("/v1/login", login);

app.listen(port, () => {
  console.log(`Http server is running on the http://localhost:${port}`);
});
