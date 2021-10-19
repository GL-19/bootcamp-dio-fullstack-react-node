import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import shortid from "shortid";
import { config } from "../config/Constants";

export class URLController {
	public async shorten(req: Request, res: Response): Promise<void> {
		const { originURL } = req.body;
		const url = await URLModel.findOne({ originURL });
		if (url) {
			res.json(url);
			return;
		}

		const hash = shortid.generate();
		const shortURL = `${config.API_URL}/${hash}}`;
		const newURL = await URLModel.create({ hash, shortURL, originURL });

		res.json(newURL);
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
