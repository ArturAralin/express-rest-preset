import * as joi from 'joi';
import { Router, Request, Response, NextFunction } from 'express';
import { resolve } from 'path';
import * as routes from '../lib/routes/root';
import { flatten, map, pipe, values, curryN, not } from 'ramda';
import expressPromiseRouter = require('express-promise-router');
import ValidationError from '../lib/errors/validation';

type HTTPMethods = "options" | "get" | "head" | "post" | "put" | "delete" | "trace" | "connect";

export interface AppRouter {
  path: string;
  method: HTTPMethods;
  validator: object;
  controller(req: Request, res: App.Endpoint, next?: NextFunction): void;
  // allowAccess: string[];
}

function setJoiValidator(schema: object): any {
  return (req: Request , res: Response, next: NextFunction) => {
    const validationError: joi.ValidationError = joi.validate(req.body, schema).error;

    if (validationError) {
      next(new ValidationError(validationError));

      return;
    }

    next();
  };
}

const rootRouter: Router = expressPromiseRouter();

pipe(values, flatten)(routes)
  .forEach(({ path, method, controller, validator }) => {
    const methodName = method.toLowerCase();
    const func = (rootRouter as any)[methodName];

    func.call(rootRouter, path, setJoiValidator(validator), controller);
  });

export default rootRouter;
