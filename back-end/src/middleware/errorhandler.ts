import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../error";

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  // check err & number is interger 
  const status = err instanceof ApiError && Number.isInteger(err.status) ? err.status : 500;

  const payload: any = {
    success: false,
    message: status === 500 ? "Internal server error" : err.message,
    code: err?.code,
  };

  // return more debug info in development, avoid leaking in production
  if (process.env.NODE_ENV !== "production") {
    payload.stack = err?.stack;
    if (err?.details) payload.details = err.details;
  }

  // log error
  console.error({
    level: "error",
    status,
    route: req.originalUrl,
    method: req.method,
    msg: err?.message,
    code: err?.code,
    stack: err?.stack,
  });

  res.status(status).json(payload);
}
