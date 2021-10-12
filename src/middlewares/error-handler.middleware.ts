import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.models";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
	if (error instanceof DatabaseError) {
		res.sendStatus(StatusCodes.NOT_FOUND);
	} else {
		res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

export default errorHandler;
