import express, { Request, Response } from "express";
import { BACKEND_URL } from "@repo/common/config";
const app = express();

app.use(express.json());

console.log(BACKEND_URL);

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "Done",
  });
});

app.listen(3002, () => {
  console.log("Server is running on port:3002");
});
