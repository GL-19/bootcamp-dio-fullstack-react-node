import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT from "jsonwebtoken";

const authorizationRoute = Router();

authorizationRoute.post("/token", async (req: Request, res: Response, next: NextFunction) => {
	try {
		const authorizationHeader = req.headers["authorization"];

		if (!authorizationHeader) {
			throw new ForbiddenError("Credenciais não informadas");
		}

		const [authenticationType, token] = authorizationHeader.split(" ");

		if (authenticationType !== "Basic" || !token) {
			throw new ForbiddenError("Tipo de autenticação inválida");
		}

		const tokenContent = Buffer.from(token, "base64").toString("utf-8");
		const [username, password] = tokenContent.split(":");

		if (!username || !password) {
			throw new ForbiddenError("Credenciais não preenchidas");
		}

		const user = await userRepository.findByUsernameAndPassword(username, password);

		if (!user) {
			throw new ForbiddenError("Usuário ou senha inválidos!");
		}

		const jwtPayload = { userName: user?.username };
		const jwtOptions = { subject: user?.uuid };
		const secretKey = "my_secret_key";

		const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

		res.status(StatusCodes.OK).json({ token: jwt });
	} catch (error) {
		next(error);
	}
});

export default authorizationRoute;
