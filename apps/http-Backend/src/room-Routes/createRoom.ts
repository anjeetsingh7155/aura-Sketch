import { Request, Response } from "express";

export const createRoom = (res: Response, req: Request) => {
  //create a Db call
  res.json({
    roomID: 123,
  });
};
