import express from "express";
import cors from "cors";
import { signup } from "./signUpAndLogin-Route/signup";
import { login } from "./signUpAndLogin-Route/login";
import { userMiddleWare } from "./MiddleWares/userMiddleWare";
import { createRoom } from "./room-Routes/createRoom";
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

//signup and Login Routes
app.post("/v1/signup", signup);
app.post("/v1/login", login);


//Room Routes
app.post('/v2/createRoom',userMiddleWare,createRoom)

app.listen(port, () => {
  console.log(`Http server is running on the http://localhost:${port}`);
});
