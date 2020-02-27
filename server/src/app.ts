import dotenv from "dotenv-safe";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { router as UserRoutes } from "./routes/user";
import { router as ContactRoutes } from "./routes/contact";
import { router as AuthRoutes } from "./routes/auth";
import { ContectDb } from "./config/db";

dotenv.config({
  allowEmptyValues: false
});

const app: Application = express();
const PORT = process.env.PORT || 5000;
// DATABASE
ContectDb();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From Express Ts");
});

app.use(bodyParser.json());
app.use("/api/users", UserRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/auth", AuthRoutes);

app.listen(5000, () => {
  console.log(`Server is Running On Port ${PORT}`);
});
