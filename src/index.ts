import { Request, Response } from "express";
import express from "express";

const api = express();

const port = 3000;

api.get("/test", (req: Request, res: Response) => {
	res.status(200).send("Hello");
});

api.listen(port, () => `App funcionando na porta ${port}`);
