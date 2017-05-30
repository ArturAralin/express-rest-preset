import * as joi from 'joi';
import { Router, Request, Response } from 'express';
import { resolve } from 'path';
import * as routes from '../lib/routes/root';
import { flatten, map, pipe, values, curryN, not } from 'ramda';
import expressPromiseRouter = require('express-promise-router');

type HTTPMethods = "options" | "get" | "head" | "post" | "put" | "delete" | "trace" | "connect";

export interface AppRouter {
  path: string;
  method: HTTPMethods;
  controller: any;
  validator: object;
  // allowAccess: string[];
}

function setJoiValidator(schema: object): any {
  return (req: Request , res: Response, next: any) => {
    const validationError: joi.ValidationError = joi.validate(req.body, schema).error;

    if (validationError) {
      next(validationError);

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
