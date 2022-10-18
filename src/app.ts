import express, { Express, Response, Request } from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    mantap: "sip",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("port 3000");
});
