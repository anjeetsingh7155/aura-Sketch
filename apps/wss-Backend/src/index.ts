import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User_JWT_pass } from "@repo/backend-common/config";
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

  if (!User_JWT_pass) {
    throw new Error("UserJWTPAss is missing");
  }
  const decoded = jwt.verify(token, User_JWT_pass);

  socket.on("message", () => {
    console.log(token);
  });
});
