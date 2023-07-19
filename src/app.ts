import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { BookRoutes } from "./app/modules/books/books.routes";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
//use
app.use("/api/v1", BookRoutes);

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome BookHut server");
});

export default app;
