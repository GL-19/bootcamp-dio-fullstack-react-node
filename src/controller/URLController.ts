import { Request, Response } from "express";
import shortid from "shortid";
import { config } from "../config/Constants";

export class URLController {
	public async shorten(req: Request, res: Response): Promise<void> {
		//Conferir se a url não existe

		//Criar o hash da url
		const { originURL } = req.body;
		console.log(originURL);
		const hash = shortid.generate();
		const shortURL = `${config.API_URL}/${hash}}`;

		//Salvar a url no banco

		//Retornar a url encurtada que foi salva
		res.json({ originURL, hash, shortURL });
	}

	public async redirect(req: Request, res: Response): Promise<void> {
		//Pegar hash da url
		const { hash } = req.params;

		//Encontrar a url original pelo hash
		const url = {
			originURL: "https://github.com/GL-19",
			hash: "o hash",
			shortenURL: "url encurtada",
		};
		//Redirecionar para url original a partir do que foi encontrado no DB
		res.redirect(url.originURL);
	}
}
