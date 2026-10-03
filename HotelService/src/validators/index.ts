import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import logger from "../config/logger.config";

/**
 * Validate request body using Zod schema
 */
export const validateRequestBody = (schema: z.ZodType) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            logger.info("Validating request body");

            await schema.parseAsync(req.body);

            logger.info("Request body is valid");

            next();
        } catch (error) {
            logger.error("Request body is invalid");

            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: "Invalid request body",
                    success: false,
                    errors: error.issues,
                });
            }

            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    };
};

/**
 * Validate query parameters using Zod schema
 */
export const validateQueryParams = (schema: z.ZodType) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            await schema.parseAsync(req.query);

            logger.info("Query params are valid");

            next();
        } catch (error) {
            logger.error("Query params are invalid");

            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: "Invalid query params",
                    success: false,
                    errors: error.issues,
                });
            }

            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }
    };
};