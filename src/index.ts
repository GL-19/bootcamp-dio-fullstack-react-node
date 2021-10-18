import express, { Request, Response } from "express";
import { URLController } from "./controller/URLController";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
	res.status(200).send("hello world");
});

const urlController = new URLController();

app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);

app.listen(3000, () => console.log(`Servidor funcionando na porta 3000`));
