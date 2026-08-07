import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});


const userJWTpass = process.env.UserJWTPAss;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket, req) => {
  const url = req.url;
  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);

  const token = queryParams.get("token");
  if (!token) {
    socket.close();
    return;
  }

  if (!userJWTpass) {
    throw new Error("UserJWTPAss is missing");
  }
  const decoded = jwt.verify(token, userJWTpass);

  socket.on("message", () => {
    console.log(token);
  });
});
