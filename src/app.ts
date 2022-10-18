import express, { Express, Response, Request } from "express";
import cors from "cors";
import prisma from "../prisma/prisma";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", async (_req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

app.post("/", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return res.status(200).json(user);
});

app.get("/mantap", (req, res) => {
  res.json({
    mantap: "sop",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("port 3000");
});
